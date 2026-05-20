import React from "react";
import "./Necesidad.css";
import necesidadImg from "/necesidadImg.jpg";
import { motion } from "framer-motion";

function Necesidad() {
  return (
    <motion.div
      className="necesidad"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>NECESIDAD</h2>

      <h1>El Pueblo Vasco necesita el Evangelio</h1>

      <h5>
        El País Vasco es una de las regiones con mayor secularización en España.
        A pesar de su rica historia, muchas personas viven sin esperanza y sin
        conocer el amor transformador de Jesucristo. La iglesia evangélica es
        muy pequeña en esta región, y hay una necesidad urgente de obreros que
        estén dispuestos a dedicar sus vidas para compartir las buenas nuevas.
      </h5>

      <p>
        Menos del 2% de la población del País Vasco se identifica como
        evangélica
      </p>

      <motion.img
        src={necesidadImg}
        alt="Imagen de la página de necesidad"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Necesidad;