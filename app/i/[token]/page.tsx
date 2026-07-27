import { prisma } from "@/lib/prisma";
import Hero from "@/components/invitation/Hero";
import Intro from "@/components/invitation/Cita";
import Countdown from "@/components/invitation/Countdown";
import EventDetails from "@/components/invitation/EventDetails";
import RSVP from "@/components/invitation/RSVP";
import Gifts from "@/components/invitation/Gifts";
import Closing from "@/components/invitation/Closing";
import Moments from "@/components/invitation/Moments";
import { syncGoogleSheet } from "@/lib/syncGoogleSheet";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const guest = await prisma.guest.findUnique({
    where: { token },
    include: {
      rsvp: true,
    },
  });

  if (!guest) {
    return (
      <main className="flex items-center justify-center min-h-screen px-6 text-center bg-wedding-light text-wedding-dark">
        <div>
          <h1 className="font-serif text-3xl">Invitación no encontrada</h1>
          <p className="mt-4 text-sm text-wedding-dark/70">
            Verifica que el enlace sea correcto.
          </p>
        </div>
      </main>
    );
  }

  if (!guest.hasOpened) {
    const openedAt = new Date();

    await prisma.guest.update({
      where: { id: guest.id },
      data: {
        hasOpened: true,
        openedAt,
        status: "opened",
      },
    });

    await syncGoogleSheet({
      Nombre: guest.name,
      "Puestos Asignados": guest.passes,
      Estado: "opened",
      "Abrio Invitacion": "Sí",
      "Fecha Apertura": openedAt.toISOString(),
      Asistencia: guest.rsvp
        ? guest.rsvp.attending
          ? "Sí"
          : "No"
        : "Sin respuesta",
      "Puestos Confirmados": guest.rsvp?.attendeesCount ?? 0,
      Mensaje: guest.rsvp?.message ?? "",
      "Fecha Respuesta": guest.rsvp?.createdAt
        ? guest.rsvp.createdAt.toISOString()
        : "",
      Token: guest.token,
      Link: `${process.env.NEXT_PUBLIC_APP_URL}/i/${guest.token}`,
    });
  }

  return (
    <main>
      <Hero />
      <Intro />
      <EventDetails />
      <Moments />
      <RSVP guest={guest} />
      <Gifts />
      <Countdown />
    </main>
  );
}
