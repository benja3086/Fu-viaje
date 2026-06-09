// Apoyo.jsx

import React from "react";
import "./Apoyo.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function Apoyo() {
  return (
    <motion.div
      className="apoyo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Presupuesto Mensual</h2>

      <h1>$2700 USD</h1>

      <h5>
        Este monto ayuda a cubrir vivienda, alimentación, estudio de idioma y
        gastos del ministerio
      </h5>

      <h6>Métodos de Transferencia</h6>

      <p>Transferencias en Pesos Argentinos</p>

      <p>
        Banco: Galicia - PESOS <br />
        Cuenta Corriente en pesos: N° 12614-4-007-1
        <br />
        Titular: Convención Evangélica Bautista Argentina Misiones
        <br />
        CUIT: 30-54125562-8 <br />
        CBU: 0070007820000012614413 <br />
        Alias: CENTRO.SUELA.LIMITE
      </p>

      <p>Transferencias en Dólares</p>

      <p>
        BANCO GALICIA CUENTA USD (ARG) <br />
        Número de cuenta: 9750095-5 007-5 <br />
        Razón Social: Confederación Evangélica Bautista
        <br />
        CUIT: 30-52227451-4
        <br />
        CBU: 0070007831009750095551{" "}
      </p>

      <h5>
        Importante: Después de realizar tu transferencia, por favor envía el
        comprobante para poder agradecerte personalmente.
      </h5>
<section id="comprobante">
      <a
        href="https://wa.me/5493813687975?text=Hola!%20ya%20realicé%20la%20transferencia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="btn-comprobante"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaWhatsapp size={64} />
          <span>Apreta acá y mandame el comprobante</span>
        </motion.button>
      </a>
      </section>
    </motion.div>
  );
}

export default Apoyo;
