// Necesidad.jsx

import React from "react";
import "./Necesidad.css";
import { motion } from "framer-motion";

function Necesidad() {
  return (
    <motion.div
      className="necesidad"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>NECESIDAD</h2>

      <h1>El Pueblo Vasco necesita el Evangelio</h1>

      <h5>
        El País Vasco es una de las regiones con mayor secularización en España.
        A pesar de su rica historia, muchas personas viven sin esperanza y sin
        conocer el amor transformador de Jesucristo. La iglesia evangélica es
        muy pequeña en esta región, y hay una necesidad urgente de obreros que
        estén dispuestos a dedicar sus vidas para compartir las buenas nuevas.
      </h5>

      <p>
        Menos del 2% de la población del País Vasco se identifica como
        evangélica
      </p>

      <motion.img
        src="https://preview-us.wetransfer.net/transfer/f6afc73b10aa5008e97df57e2e9dd2d720260518210832/hl-25104830445/control/preview.webp?Expires=1779160307&Key-Pair-Id=K3CGD36DHX2SX7&Signature=kqoYfjSOgXFkcQBbb5u9SHCAeczo2tm7L8q1gK9wKkqVpJBP-b~mVpeNBf5HNttM05DoRD8GmZFgUs~6b6VS7kpDo7Z2eKg6y8V3g~xFrHNjgXnipECTmf0uonO1rsAjqnRykhPyoSu9t9rYKFzkvFvZvpIF64q6E0jYE60~qtNm2b~vJlIba-o4O4FQ-5TIoVwMk0jIQjwOZPBK5ALOUHGs~G5haO0ZW5qFlHbKT3HgYzpRcvSJslBx4vkP3WJAr7D9Td9xD9ggP6otRYb~3AeNK6BIRT8GRaYJRbd8QzijT97owlP3QomkFiMHI15oVpI-FdN4msvIZsU-vbY5qw__"
        alt=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />
    </motion.div>
  );
}

export default Necesidad;