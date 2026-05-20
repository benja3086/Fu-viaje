// Inmersion.jsx

import React from "react";
import "./Inmersion.css";
import { motion } from "framer-motion";

function Inmersion() {
  return (
    <motion.div
      className="inmersion"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1>Sumergirme en la cultura y comunidad</h1>

      <p>
        Mi objetivo es integrarme completamente en la vida del País Vasco,
        aprendiendo el idioma, conociendo la cultura y estableciendo relaciones
        genuinas con las personas.
      </p>

      <p>Vivir en la comunidad local</p>

      <p>Construir relaciones significativas</p>

      <p>Servir con amor y humildad</p>

      <motion.img
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830451/control/preview.webp?Expires=1779252875&Key-Pair-Id=K3CGD36DHX2SX7&Signature=aRFHezHvt4ao9dtEmVlenmE9FWd6YDrxsUY95bUlaOI2PPttegn0Ssbnw2pxDG46YFAjamrGk38k4LhryNgCf3chDBRdmzzqWe~44L0fzrddvwBNWgDXEwK5Mx~4LbHyfvsXmNnIJptfYDYzaU0RmFR-VXrxa-KOM0Sc7bKJeJSslAbiWBATklmCtv6D0OgOTRs3mjTy0lorqDx7l2Q5t2AYZtcTN8PYF9uXiynzGPgFRiVjT-XNLPEjgsJlm8Ng5qEpnyEjRCBfS044m5pv~vlXRXgpf6IpETTxc6j7v-GCH6cMT9rTSevMu7Zle0Ezst1CrRaPuOJKnGGEr9ypmg__"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Inmersion;