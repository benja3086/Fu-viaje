import React from "react";
import "./Donar.css";

function Donar() {
  const espacios = [
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `10-${i}`,
      monto: 10,
      ocupado: i < 5,
    })),

    ...Array.from({ length: 25 }, (_, i) => ({
      id: `20-${i}`,
      monto: 20,
      ocupado: i < 4,
    })),

    ...Array.from({ length: 20 }, (_, i) => ({
      id: `50-${i}`,
      monto: 50,
      ocupado: i < 3,
    })),

    ...Array.from({ length: 15 }, (_, i) => ({
      id: `100-${i}`,
      monto: 100,
      ocupado: i < 2,
    })),

    ...Array.from({ length: 7 }, (_, i) => ({
      id: `300-${i}`,
      monto: 300,
      ocupado: i < 1,
    })),

    ...Array.from({ length: 3 }, (_, i) => ({
      id: `600-${i}`,
      monto: 600,
      ocupado: false,
    })),
  ];

  return (
    <section className="donar">
      <span>{espacios.length} ESPACIOS DISPONIBLES</span>

      <h1>
        Cada cuadrito es
        <br />
        una semilla de fe
      </h1>

      <p>
        Elegí el monto que esté en tu corazón. Realizá la transferencia y avisá
        para marcar tu espacio.
      </p>

      <div className="grid">
        {espacios.map((espacio) => (
          <div
            key={espacio.id}
            className={`cuadro ${espacio.ocupado ? "ocupado" : ""}`}
          >
            {espacio.ocupado ? "✓" : `$${espacio.monto}`}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Donar;