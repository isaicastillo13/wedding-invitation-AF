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
          className="max-w-sm my-8 leading-7 text-wedding-dark/75"
        >
          Con la bendición de nuestros padres uniremos nuestras vidas en
          matrimonio y nos complacería contar con su compañía para celebrar este
          día tan especial. 
        </motion.p>
      </div>
    </section>
  );
}
