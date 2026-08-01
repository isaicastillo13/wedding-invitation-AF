import { prisma } from "@/lib/prisma";
import Hero from "@/components/invitation/Hero";
import Cita from "@/components/invitation/Cita";
import Separador from "@/components/ui/separador";
import Mensaje from "@/components/invitation/Mensaje";
import Date from "@/components/invitation/Date";
import Ceremonia from "@/components/invitation/Ceremonia";
import Recepcion from "@/components/invitation/Recepcion";
import Moments from "@/components/invitation/Moments";
import DressCode from "@/components/invitation/DressCode";
import Regalos from "@/components/invitation/Regalos";
import RSVP from "@/components/invitation/RSVP";

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const invitacion = await prisma.invitacion.findUnique({
    where: { codigo: token },
    include: {
      invitados: { orderBy: { orden: "asc" } },
    },
  });

  if (!invitacion) {
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

  return (
    <main>
      <Hero />
      <Cita />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Mensaje />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Date />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Ceremonia />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Recepcion />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Moments />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <DressCode />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <Regalos />
      <Separador style={{ marginTop: 10, marginBottom: 10 }} />
      <RSVP invitacion={invitacion} invitados={invitacion.invitados} />
    </main>
  );
}
