import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const invitaciones = await prisma.invitacion.findMany({
      include: {
        invitados: { orderBy: { orden: "asc" } },
      },
      orderBy: {
        nombreFamilia: "asc",
      },
    });

    const report = invitaciones.map((invitacion) => ({
      codigo: invitacion.codigo,
      nombreFamilia: invitacion.nombreFamilia,
      puestosAsignados: invitacion.cantidadPuestos,
      estado: invitacion.estado,
      puestosConfirmados: invitacion.cantidadConfirmada,
      fechaConfirmacion: invitacion.fechaConfirmacion,
      telefono: invitacion.telefono,
      mesa: invitacion.mesa,
      invitados: invitacion.invitados.map((invitado) => ({
        nombre: invitado.nombreCompleto,
        esPrincipal: invitado.esPrincipal,
        asistira: invitado.asistira,
        restriccionAlimentaria: invitado.restriccionAlimentaria,
        observaciones: invitado.observaciones,
      })),
      link: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/i/${invitacion.codigo}`,
    }));

    return NextResponse.json(report);
  } catch (error) {
    console.error("REPORT_ERROR:", error);

    return NextResponse.json(
      {
        error: "Error generando reporte",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
