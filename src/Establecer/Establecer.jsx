// Establecer.jsx

import React from "react";
import "./Establecer.css";
import { motion } from "framer-motion";

function Establecer() {
  return (
    <motion.div
      className="Establecer"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="/establecerImg.jpeg"
        alt="Imagen de la página de establecer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <h2>Establecer</h2>

      <h1>Establecer comunidades de fe</h1>

      <h5>
        El objetivo a largo plazo es colaborar con la iglesia local para
        establecer comunidades de fe sólidas y autosostenibles que puedan
        continuar el trabajo del evangelio en la región
      </h5>

      <h5>
        Esto incluye discipular nuevos creyentes, formar líderes locales, y
        equipar a la iglesia para que sea luz en medio de su comunidad.
      </h5>

      <p>Formación de discípulos comprometidos</p>

      <p>Capacitación de líderes locales</p>

      <p>Fortalecimiento de la iglesia local</p>

      <p>Impacto sostenible en la comunidad</p>
    </motion.div>
  );
}

export default Establecer;