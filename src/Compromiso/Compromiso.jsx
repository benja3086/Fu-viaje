// Compromiso.jsx

import React from "react";
import "./Compromiso.css";
import { motion } from "framer-motion";

function Compromiso() {
  return (
    <motion.div
      id="compromiso"
      className="compromiso"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Compromiso</h2>

      <h1>Cómo puedes apoyar esta misión</h1>

      <h5>
        Tu apoyo hace posible que esta misión se lleve a cabo. Aquí está cómo
        puedes ser parte de lo que Dios está haciendo en el Pueblo Vasco:
      </h5>

      <h6>Oración</h6>

      <p>
        Ora por la obra en el País Vasco y por las personas que serán alcanzadas
      </p>

      <h6>Apoyo Mensual</h6>

      <p>Conviértete en socio financiero con un aporte mensual sostenido</p>

      <h6>Donación Única</h6>

      <p>Realiza una donación especial para necesidades específicas</p>

      <img src="" alt="" />
    </motion.div>
  );
}

export default Compromiso;
