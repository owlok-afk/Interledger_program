import React, { useState } from "react";
import artesano4 from "./assets/artesano_4.PNG";
import Pago from "./pago";

export default function Artesano4() {
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
      <h1 style={styles.title}>Don Enrique Morales</h1>
      <img src={artesano4} alt="Artesano 4" style={styles.image} />
      <div style={styles.description}>
        <p>
          Artesano con años de experiencia creando piezas únicas que reflejan
          la cultura local y la tradición familiar.
        </p>
        <p style={styles.quote}>
          “Cada creación lleva mi esfuerzo y pasión. Espero que quienes las
          reciben sientan ese mismo amor”.
        </p>
        <p style={styles.quote}>
          “Lo más importante es que nuestro trabajo sea valorado y apoyado por
          la comunidad”.
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
          product={{ name: "Compra - Artesanía de Don Enrique" }}
          type="compra"
          onBack={() => setModo(null)}
        />
      )}

      {modo === "incentivo" && (
        <Pago
          product={{ name: "Incentivo para Don Enrique" }}
          type="incentivo"
          onBack={() => setModo(null)}
        />
      )}
    </div>
  );
}
