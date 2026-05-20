// Salmos.jsx

import React from "react";
import "./Versiculo.css";
import { motion } from "framer-motion";

function Salmos() {
  return (
    <motion.div
      className="versiculo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h4>
        ¡Que todos los pueblos aplaudan! ¡Alaben a Dios con gritos de alegría!
      </h4>

      <h5>Salmo 47.1</h5>
    </motion.div>
  );
}

export default Salmos;