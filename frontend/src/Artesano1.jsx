// Artesano1.jsx
import React, { useState } from "react";
import artesano1 from "./assets/artesano_1.jpg";
import Pago from "./pago"; // Componente de pago (usado para compra o incentivo)

export default function Artesano1() {
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
      background: "#8B5E3C", // café artesanal
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
      <h1 style={styles.title}>José Bernabé Campechano</h1>
      <img src={artesano1} alt="Artesano 1" style={styles.image} />
      <div style={styles.description}>
        <p>
          Artesano de Tlaquepaque, dedicado a preservar la tradición y la belleza
          del arte mexicano.
        </p>
        <p style={styles.quote}>
          “El artesano no necesita limosnas, necesita donde vender”.
        </p>
        <p style={styles.quote}>
          “Yo no pienso que esto se va a acabar, yo estoy con ganas de que se
          siga pero los nietos ya piensan en si van a vender o no, algo un
          poquito más seguro. Eso es lo que necesitamos: el apoyo de la misma
          gente que diga: hay algo muy hermoso, muy bonito. Tenemos que tener
          cosas caras, no nada más Estados Unidos o los chinos pueden dar las
          cosas más caras”.
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
          product={{ name: "Compra - Artesanía de José Bernabé" }}
          onBack={() => setModo(null)}
        />
      )}

      {modo === "incentivo" && (
        <Pago
          product={{ name: "Incentivo para José Bernabé" }}
          onBack={() => setModo(null)}
        />
      )}
    </div>
  );
}
