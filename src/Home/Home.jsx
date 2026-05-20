import React from "react";
import "./Home.css";
import homeImg from "/homeImg.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        Proyecto puente
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Llevando el 100% de la iglesia donde Dios quiere
      </motion.h1>

      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        Apoyando la misión al Pueblo Vasco
      </motion.h5>

      <a href="#compromiso">
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          Apoyar la Misión
        </motion.button>
      </a>

      <motion.img
        src={homeImg}
        alt="Imagen de la página principal"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9 }}
      />
    </motion.div>
  );
}

export default Home;
