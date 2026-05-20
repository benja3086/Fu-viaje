import React from "react";
import "./Desafio.css";
import { motion } from "framer-motion";

function Desafio() {
  return (
    <motion.div
      className="Desafio"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Desafio</h2>

      <h1>Los desafíos de la misión</h1>

      <h5>
        Servir como misionera en el País Vasco presenta desafíos únicos:
      </h5>

      <p>Adaptación a una nueva cultura e idioma</p>

      <p>Costo de vida elevado en la región</p>

      <p>Establecer conexiones en una sociedad secular</p>

      <p>Sostén financiero para el ministerio</p>

      <motion.img
        src="/desafioImg.jpg"
        alt="Imagen de la página de desafío"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Desafio;