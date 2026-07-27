"use client";

import { motion } from "framer-motion";

export default function Moments() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col items-center justify-center"
    >
      <img
        src="/images/couple-moment-09.jpeg"
        alt="Momento 1"
        className="object-cover w-full"
      />
      <img
        src="/images/couple-moment-07.jpeg"
        alt="Momento 2"
        className="object-cover w-full"
      />
      <img
        src="/images/couple-moment-01.jpeg"
        alt="Momento 3"
        className="object-cover w-full"
      />
    </motion.div>
  );
}
