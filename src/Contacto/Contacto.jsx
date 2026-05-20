import React from "react";
import "./Contacto.css";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <motion.header
      className="contacto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/contactoImg.jpg"
        alt="Imagen de la página de contacto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <h2>HOLA, SOY FABIANA</h2>

      <p>
        Soy argentina y Dios me llamó a servir como misionera en el País Vasco,
        España. Esta es una región con una rica historia y cultura, pero también
        con una gran necesidad espiritual. Mi corazón late por ver comunidades
        transformadas por el amor de Cristo, y estoy comprometida a trabajar
        junto con la iglesia local para alcanzar a aquellos que aún no conocen
        el evangelio. Te invito a ser parte de esta misión a través de tu
        oración y apoyo.
      </p>
    </motion.header>
  );
}

export default Contacto;