import React from "react";
import "./Inmersion.css";
import inmersionImg from "/inmersionImg.jpg";
import { motion } from "framer-motion";

function Inmersion() {
  return (
    <motion.div
      className="inmersion"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1>Sumergirme en la cultura y comunidad</h1>

      <p>
        Mi objetivo es integrarme completamente en la vida del País Vasco,
        aprendiendo el idioma, conociendo la cultura y estableciendo relaciones
        genuinas con las personas.
      </p>

      <p>Vivir en la comunidad local</p>

      <p>Construir relaciones significativas</p>

      <p>Servir con amor y humildad</p>

      <motion.img
        src={inmersionImg}
        alt="Imagen de la página de inmersión"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Inmersion;