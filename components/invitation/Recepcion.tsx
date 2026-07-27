"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HotelImg from "@/public/images/8EDFDA1A-BECA-4342-8926-C917DD3C49E4-removebg-preview.png";

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
          Recepción
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold">Hora:</b> <br />
          5:00 p. m
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold">Lugar:</b> <br />
          Hotel Contempo
        </motion.p>
        <Image
          src={HotelImg}
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
          href="https://www.google.com/maps/search/?api=1&query=Hotel+Contempo"
          target="_blank"
          rel="noreferrer"
          className="inline-block w-11/12 px-6 py-3 mt-6 font-semibold text-white transition rounded-lg bg-wedding-dark hover:bg-wedding-dark/90"
        >
          Ver ubicación de la recepción
        </motion.a>
        
      </div>
    </section>
  );
}
