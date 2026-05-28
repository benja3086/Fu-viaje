// Donar.jsx

import React from "react";
import "./Donar.css";
import { motion } from "framer-motion";

function Donar() {
  const espacios = [
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `10-${i}`,
      monto: 10,
      ocupado: i < 2,
    })),

    ...Array.from({ length: 15}, (_, i) => ({
      id: `20-${i}`,
      monto: 20,
      ocupado: i < 1,
    })),

    ...Array.from({ length: 4 }, (_, i) => ({
      id: `50-${i}`,
      monto: 50,
      ocupado: i < 3,
    })),

    ...Array.from({ length: 5 }, (_, i) => ({
      id: `100-${i}`,
      monto: 100,
      ocupado: i < 2,
    })),

    ...Array.from({ length: 7 }, (_, i) => ({
      id: `200-${i}`,
      monto: 200,
      ocupado: i < 5,
    })),
  ];
  return (
    <motion.section
      className="donar"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span>{espacios.length} ESPACIOS DISPONIBLES</span>

      <h1>
        Cada cuadrito es
        <br />
        una semilla de fe
      </h1>

      <p>
        Elige el monto que Dios ponga en tu corazón. Realiza la transferencia e
        informanos por WhatsApp para marcar tu espacio: +54 9 381-368-7975 (Fabiana)
      </p>

      <div className="grid">
        {espacios.map((espacio) => (
          <motion.div
            key={espacio.id}
            className={`cuadro ${espacio.ocupado ? "ocupado" : ""}`}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            {espacio.ocupado ? "✓" : `$${espacio.monto}`}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Donar;
