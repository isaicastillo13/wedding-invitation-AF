import Hero from "@/components/invitation/Hero";
import Cita from "@/components/invitation/Cita";
import Line from "@/components/ui/line";
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
      <Line style={{ marginTop: 10, marginBottom: 10 }} />
      <Mensaje />
      <Line style={{ marginTop: 10, marginBottom: 10 }} />
      <Date />
      <Line style={{ marginTop: 10, marginBottom: 10 }} />
      <Ceremonia />
      <Line style={{ marginTop: 10, marginBottom: 10 }} />
      <Recepcion />
      <Line style={{ marginTop: 10, marginBottom: 10 }} />
      {/* <EventDetails /> */}
      {/* <Moments /> */}
      {/* <Gifts /> */}
      {/* <Closing /> */}
    </main>
  );
}
