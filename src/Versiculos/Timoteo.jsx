// Timoteo.jsx

import React from "react";
import "./Versiculo.css";
import { motion } from "framer-motion";

function Timoteo() {
  return (
    <motion.div
      className="versiculo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h4>
        Porque hay un solo Dios, y un solo PUENTE entre Dios y los hombres,
        Jesucristo hombre.
      </h4>

      <h5>1 Timoteo 2:5</h5>

    </motion.div>
  );
}

export default Timoteo;