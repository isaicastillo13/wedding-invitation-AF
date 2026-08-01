import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { syncGoogleSheet } from "@/lib/syncGoogleSheet";

type InvitadoInput = {
  id: string;
  asistira: boolean;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { codigo, invitados }: { codigo?: string; invitados?: InvitadoInput[] } =
      body;

    if (!codigo) {
      return NextResponse.json(
        { error: "codigo es requerido" },
        { status: 400 },
      );
    }

    if (!Array.isArray(invitados) || invitados.length === 0) {
      return NextResponse.json(
        { error: "invitados debe ser un arreglo no vacío" },
        { status: 400 },
      );
    }

    const invitacion = await prisma.invitacion.findUnique({
      where: { codigo },
      include: {
        invitados: { orderBy: { orden: "asc" } },
      },
    });

    if (!invitacion) {
      return NextResponse.json(
        { error: "Invitación no encontrada" },
        { status: 404 },
      );
    }

    const idsValidos = new Set(invitacion.invitados.map((g) => g.id));
    const hayInvitadoInvalido = invitados.some((g) => !idsValidos.has(g.id));

    if (hayInvitadoInvalido) {
      return NextResponse.json(
        { error: "Alguno de los invitados no pertenece a esta invitación" },
        { status: 400 },
      );
    }

    const cantidadConfirmada = invitados.filter((g) => g.asistira).length;
    const estado = cantidadConfirmada > 0 ? "confirmada" : "no_asiste";

    await prisma.$transaction([
      ...invitados.map((g) =>
        prisma.invitado.update({
          where: { id: g.id },
          data: { asistira: g.asistira },
        }),
      ),
      prisma.invitacion.update({
        where: { id: invitacion.id },
        data: {
          cantidadConfirmada,
          estado,
          fechaConfirmacion: new Date(),
        },
      }),
    ]);

    const actualizada = await prisma.invitacion.findUnique({
      where: { id: invitacion.id },
      include: {
        invitados: { orderBy: { orden: "asc" } },
      },
    });

    await syncGoogleSheet({
      Codigo: invitacion.codigo,
      "Nombre de la Familia": invitacion.nombreFamilia ?? "",
      "Puestos Asignados": invitacion.cantidadPuestos,
      Estado: estado,
      "Puestos Confirmados": cantidadConfirmada,
      "Invitados Asistentes": invitados
        .filter((g) => g.asistira)
        .map((g) => {
          const invitado = invitacion.invitados.find((i) => i.id === g.id);
          return invitado?.nombreCompleto ?? "";
        })
        .join(", "),
      "Fecha Respuesta": new Date().toISOString(),
      Link: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/i/${invitacion.codigo}`,
    });

    return NextResponse.json({
      success: true,
      cantidadConfirmada,
      estado,
      invitacion: actualizada,
    });
  } catch (error) {
    console.error("RSVP_ERROR:", error);

    return NextResponse.json(
      {
        error: "Error guardando la confirmación",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
