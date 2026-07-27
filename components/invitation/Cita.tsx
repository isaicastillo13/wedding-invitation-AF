"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex px-6 py-4 bg-wedding-light">
      <div className="max-w-md mx-auto text-center ">

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="max-w-sm m-8 leading-7 text-wedding-dark/75"
        >
          El amor es paciente, es servicial. El amor no es envidioso, no hace alarde, no se envanece, no procede con bajeza ni busca su propio interés, no se irrita y no tiene en cuenta el mal recibido, no se alegra de la injusticia, sino que se regocija con la verdad. El amor todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta. <b className="font-black">El amor no pasará jamás.</b>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-wedding-dark text-[32px]"
        >
          1 Corintios 13, 4-8
        </motion.h2>
      </div>
    </section>
  );
}
