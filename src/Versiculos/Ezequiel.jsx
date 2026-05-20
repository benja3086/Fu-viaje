// Ezequiel.jsx

import React from "react";
import "./Versiculo.css";
import { motion } from "framer-motion";

function Ezequiel() {
  return (
    <motion.div
      className="versiculo"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h4>
        Pondré en ustedes un corazón nuevo y un espíritu nuevo. Quitaré de
        ustedes ese corazón duro como la piedra y les pondré un corazón dócil.
      </h4>

      <h5>Ezequiel 36.26</h5>
    </motion.div>
  );
}

export default Ezequiel;