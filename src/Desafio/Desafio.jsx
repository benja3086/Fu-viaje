// Desafio.jsx

import React from "react";
import "./Desafio.css";
import { motion } from "framer-motion";

function Desafio() {
  return (
    <motion.div
      className="Desafio"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Desafio</h2>

      <h1>Los desafíos de la misión</h1>

      <h5>
        Servir como misionera en el País Vasco presenta desafíos únicos:
      </h5>

      <p>Adaptación a una nueva cultura e idioma</p>

      <p>Costo de vida elevado en la región</p>

      <p>Establecer conexiones en una sociedad secular</p>

      <p>Sostén financiero para el ministerio</p>

      <motion.img
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830450/control/preview.webp?Expires=1779252875&Key-Pair-Id=K3CGD36DHX2SX7&Signature=DounspoBVV2HbbNkENgSg3cH~Q8oxwHuAlYJuCGbvEAJ~Ye2IxdBxIs8MDkA~ArTUT8lAiY94F3TTISbyRb3ACW--BrH8p3-FatczxWlEa~g1HQ16z21WvZyVoqbJO3xfJRMMiN~D7E8CLoFMigULKENcpkXs5goRzc7lSi9jbZ-QFqJM9nXmRHoGuc1Jn97iR7ch1J-lV7gRTVPvo0McsZvm~ty0P0-Km8B~6byebiK7i4aRvmjsmsKfWhvIrpRn7dw-jlCMrhoyyvl0NMxR8x4DhQ5FF03VsDXrViWR6rxOqIK9kxuPHsfY3zzH7DB-H6zwAaJ2fyGzflt16UqMw__"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Desafio;