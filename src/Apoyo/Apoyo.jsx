// Apoyo.jsx

import React from "react";
import "./Apoyo.css";
import { motion } from "framer-motion";

function Apoyo() {
  return (
    <motion.div
      className="apoyo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Apoyo mensual sugerido</h2>

      <h1>$2000 USD</h1>

      <h5>
        Este monto ayuda a cubrir vivienda, alimentación y gastos del ministerio
      </h5>

      <h6>Métodos de Transferencia</h6>

      <p>Transferencias en Pesos Argentinos</p>

      <p>
        Banco: Macro Cuenta Corriente: 3-068-0294448-7 Titular: Convención
        Evangélica Bautista Argentina Misiones CUIT: 30-70076200-4 CBU:
        2850294430094448870 Alias: CENTRO.SUBELA.LIMITE
      </p>

      <p>Transferencias en Dólares</p>

      <p>
        Banco: Galicia Cuenta USD (ARG) Titular: Razón Social (Iglesia o Misión)
        CUIT: 30-52227491-4 Cuenta: 4876-6 029-0 Razón Social: Confederación
        Evangélica Bautista CBU: 0070029430004876602901
      </p>

      <h5>
        Importante: Después de realizar tu transferencia, por favor envía el
        comprobante para poder agradecerte personalmente.
      </h5>

      <a
        href="https://wa.me/5493813687975?text=Hola!%20ya%20realicé%20la%20transferencia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          Enviar Comprobante
        </motion.button>
      </a>

      <img src="" alt="" />
    </motion.div>
  );
}

export default Apoyo;