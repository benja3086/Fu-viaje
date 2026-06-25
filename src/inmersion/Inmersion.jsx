import React from "react";
import "./Inmersion.css";
import { motion } from "framer-motion";
import { FaHome, FaHeart } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";

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

      <h4>
        Mi objetivo es integrarme completamente en la vida del País Vasco,
        aprendiendo el idioma, conociendo la cultura y estableciendo relaciones
        genuinas con las personas.
      </h4>

      <div className="item">
        <FaHome className="icono" />
        <p>Vivir en la comunidad local</p>
      </div>

      <div className="item">
        <GiTeamIdea className="icono" />
        <p>Construir relaciones significativas</p>
      </div>

      <div className="item">
        <FaHeart className="icono" />
        <p>Servir con amor y humildad</p>
      </div>

      <motion.img
        src="/inmersionImg.jpg"
        alt="Imagen de la página de inmersión"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Inmersion;