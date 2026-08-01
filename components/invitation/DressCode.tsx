"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CodigoVestimenta from "@/public/images/venue-ceremony-alt.png";


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
          className="max-w-sm my-8 leading-7 text-wedding-dark/75"
        >
          Codigo de vestimenta
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm my-8 leading-7 text-wedding-dark/75"
        >
          Traje formal
        </motion.p>
        <Image
          src={CodigoVestimenta}
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
          className="max-w-sm my-8 leading-7 text-wedding-dark/75"
        >
          Con cariño reservamos los siguientes colores para la novia y el cortejo
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          <span className="w-10 h-10 border rounded-full border-wedding-dark/20" style={{ backgroundColor: "#FFFFFF" }} />
          <span className="w-10 h-10 rounded-full" style={{ backgroundColor: "#F0B6B7" }} />
          <span className="w-10 h-10 rounded-full" style={{ backgroundColor: "#B96F7D" }} />
          <span className="w-10 h-10 rounded-full" style={{ backgroundColor: "#87394A" }} />
        </motion.div>
      </div>
    </section>
  );
}
