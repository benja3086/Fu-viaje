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
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830448/control/preview.webp?Expires=1779252875&Key-Pair-Id=K3CGD36DHX2SX7&Signature=CshCjPdt~gFAAB2ABd2pKF~Vz9hc9Cq~vQZ8i197gvi38HkI8hXNl5GGUWXGna8T7owaG6siMvN7SbCwsTItRWSifJvc80aVOzZTChXpmwrAEtxHIdxAXn-8uOmL~d-TX-kxacHA8e~rRoUT80X3hrkq1vY2rZqy7L2eyo9mcuKktdzwl8j0QBto1FlIxIjzN5CumrFkdEGWvVOnJrXPhLRLi-dGXm3IbGWJ-VxM8K4zFP8GWuo3v1JxrfFcdLb-tkaT8mm56XZxeneWtHlrN48Qw3UnKuY6hKXVmHIBDM463JtU1Dj99hDupe7ewPvN6jBk1BTF0FmJeUXS4KRh7A__"
        alt=""
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