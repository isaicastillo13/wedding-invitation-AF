"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Sobre from "@/public/images/venue-ceremony-cutout.png";

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
          Regalos
        </motion.h2>
        <Image
          src={Sobre}
          alt="Ceremonia"
          width={350}
          height={350}
          className="mx-auto rounded-lg"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          Su compañía es el mejor regalo que podemos recibir. Si desean obsequiarnos algo para celebrar esta nueva etapa, aceptamos con mucho cariño un aporte en efectivo mediante un sobre el día del evento o transferencia.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold uppercase">USD BAC Nicaragua</b><br/><span className="text-2xl">359243144</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          <b className="font-bold uppercase">USD Banco General Panamá </b><br/><span className="text-2xl">04-72-99-664368-0</span>
        </motion.p>
      </div>
    </section>
  );
}
