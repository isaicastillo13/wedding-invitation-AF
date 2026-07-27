import Hero from "@/components/invitation/Hero";
import Cita from "@/components/invitation/Cita";
import Separador from "@/components/ui/separador";
import Mensaje from "@/components/invitation/Mensaje";
import Date from "@/components/invitation/Date";
import Ceremonia from "@/components/invitation/Ceremonia";
import Recepcion from "@/components/invitation/Recepcion";
import Moments from "@/components/invitation/Moments";


export default function HomePage() {
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
      {/* <EventDetails /> */}
      {/* <Gifts /> */}
      {/* <Closing /> */}
    </main>
  );
}
