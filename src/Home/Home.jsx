import React from "react";
import "./Home.css";
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
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830444/control/preview.webp?Expires=1779160308&Key-Pair-Id=K3CGD36DHX2SX7&Signature=bXvj790T4kLjr4YEl9kSG6y6Ev-BjgA-DrgcMIhR7cNX7bKI9RU2BOdJLWGNQkrXvYFtvivW-h~ettVI0HOOYzj-X6SJGU1~wmiLpNrkZhc7dn9WNk19TpWdnuZF9RldikmlDFFYZnI3pXNsB~d~zgHEtAcgCzzaANlzaG6ZsjNsyDDIYjvHPOBbk3bI479CHBRR5tN0BkEWY5IEklb-9vfDXHa9Cn1kPkkQLQQ~KmYFLRpZipxG6ZLr4PvCIyaT5U5iD0QLQLEFavrHgGeAl1eLpoox9PJUNH3Vn6UcFOn8ICav-ZFDZKJP03MFONg4aLUSubb2eZycF6s0Nc5RRA__"
        alt=""
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9 }}
      />
    </motion.div>
  );
}

export default Home;
