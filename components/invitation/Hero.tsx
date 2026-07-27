"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center h-full text-center text-wedding-light"
    >
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-cover.jpeg"
            alt="Wedding"
            className="object-cover object-[60%_center] w-full h-full"
          />
          {/* Mascara en gradiente de arriba hacia abajo */}
          <div className="absolute inset-0 bg-linear-to-b from-wedding-dark/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start h-full px-6 py-20 text-center text-wedding-light">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-5xl leading-tight tracking-wide"
          >
            Maria Alejandra <br /> y <br /> Franklin
          </motion.h1>
        </div>
      </section>
    </motion.div>
  );
}
