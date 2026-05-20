// Contacto.jsx

import React from "react";
import "./Contacto.css";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <motion.header
      className="contacto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830443/control/preview.webp?Expires=1779160307&Key-Pair-Id=K3CGD36DHX2SX7&Signature=Tac5B2V5CfXRmEIPZCrd6c9CvahWElPF6Qfp1t~3FnB6AoGv7xkq96f8VnpxnoT~eJfLmpidY6D2BwxcOyq45h5K7C5mRKgw4pDCYVFnER6-gOvQcbrc0yBenoS1R9lBL3or0y0mHfweKGZ8z-qGPO0PVMCsOqPMcLPg8p9JpmkO5BOD1quxqJLiXfnNSmIMHtcrnDROfr3UsjPJnO24IJRCQCC13IGLcFMwbPS3jCI9JvEr56s77e2TPNk-uIyIvRPfPbY-QRheZ5-4c0VOJHyCYRo-SL7Q80NhmRrQWluAhp5ydfMnxQf4gIABljXFo4YhfuERNb007X3Kn5xRrg__"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <h2>HOLA, SOY FABIANA</h2>

      <p>
        Soy argentina y Dios me llamó a servir como misionera en el País Vasco,
        España. Esta es una región con una rica historia y cultura, pero también
        con una gran necesidad espiritual. Mi corazón late por ver comunidades
        transformadas por el amor de Cristo, y estoy comprometida a trabajar
        junto con la iglesia local para alcanzar a aquellos que aún no conocen
        el evangelio. Te invito a ser parte de esta misión a través de tu
        oración y apoyo.
      </p>
    </motion.header>
  );
}

export default Contacto;