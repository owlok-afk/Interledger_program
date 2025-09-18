import React, { useState } from "react";
import artesano2 from "./assets/artesano_2.PNG";
import Pago from "./pago";

export default function Artesano2() {
  const [modo, setModo] = useState(null); // null | "compra" | "incentivo"

  const styles = {
    container: {
      padding: "40px 20px",
      textAlign: "center",
      maxWidth: 800,
      margin: "0 auto",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#3c2f2f",
    },
    title: { fontSize: "2.2rem", marginBottom: 20, fontWeight: "700" },
    image: {
      width: "100%",
      maxWidth: 450,
      borderRadius: 12,
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      marginBottom: 24,
    },
    description: {
      fontSize: "1.05rem",
      lineHeight: 1.6,
      textAlign: "justify",
      marginBottom: 32,
    },
    quote: { fontStyle: "italic", color: "#555", margin: "16px 0" },
    button: {
      background: "#8B5E3C",
      color: "#fff",
      border: "none",
      padding: "12px 22px",
      borderRadius: 10,
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "1rem",
      transition: "background 0.3s ease",
      margin: "0 10px 20px 10px",
    },
    btnGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Miguel Ángel Ramírez</h1>
      <img src={artesano2} alt="Artesano 2" style={styles.image} />
      <div style={styles.description}>
        <p>
          Artesano de Tonalá, especializado en cerámica tradicional mexicana y
          piezas decorativas únicas.
        </p>
        <p style={styles.quote}>
          “Mi papá me enseñó a hacer las piezas, él fue quien me inculcó el amor
          por este arte y la importancia de preservar nuestras tradiciones”.
        </p>
        <p style={styles.quote}>
          “Cada pieza que creo lleva historia, cultura y dedicación. Mi sueño es
          que cada persona que la adquiera valore el esfuerzo detrás de cada detalle”.
        </p>
      </div>

      {modo === null && (
        <div style={styles.btnGroup}>
          <button style={styles.button} onClick={() => setModo("compra")}>
            Hacer compra
          </button>
          <button style={styles.button} onClick={() => setModo("incentivo")}>
            Mandar incentivo
          </button>
        </div>
      )}

      {modo === "compra" && (
        <Pago
          product={{ name: "Compra - Artesanía de Miguel Ángel" }}
          type="compra"
          onBack={() => setModo(null)}
        />
      )}

      {modo === "incentivo" && (
        <Pago
          product={{ name: "Incentivo para Miguel Ángel" }}
          type="incentivo"
          onBack={() => setModo(null)}
        />
      )}
    </div>
  );
}
