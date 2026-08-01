"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Parroquia from "@/public/images/venue-ceremony.png";
import Map_marker from "@/public/map_marker.svg";

const MotionImage = motion(Image);

export default function Intro() {
  return (
    <section className="flex px-6 py-4 bg-wedding-light">
      <div className="max-w-md mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          Ceremonia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold">Hora:</b> <br />
          2:45 p. m.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold">Lugar:</b> <br />
          Parroquia Jesús de la Divina Misericordia
        </motion.p>
        <Image
          src={Parroquia}
          alt="Ceremonia"
          width={350}
          height={350}
          className="mx-auto rounded-lg"
        />
        <motion.a
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          href="https://www.google.com/maps/place/Parroquia+Jes%C3%BAs+de+la+Divina+Misericordia-Arquidiocesis+de+Managua/@12.1030623,-86.305072,14z/data=!4m10!1m2!2m1!1s+Parroquia+Jes%C3%BAs+de+la+Divina+Misericordia!3m6!1s0x8f71559ab16a43bf:0x7e8d88b1f84aab49!8m2!3d12.1030623!4d-86.2669632!15sCipQYXJyb3F1aWEgSmVzw7pzIGRlIGxhIERpdmluYSBNaXNlcmljb3JkaWGSAQZjaHVyY2jgAQA!16s%2Fg%2F1tfryjw0?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center gap-2 py-3 mt-6 text-white transition rounded-lg justify-center1/12 bg-wedding-dark hover:bg-wedding-dark/90"
        >
          Ver ubicación de la ceremonia <Image src={Map_marker} alt="icono map marker" width={16} height={16}/>
        </motion.a>
      </div>
    </section>
  );
}
