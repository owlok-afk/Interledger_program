import React, { useState } from "react";
import artesano5 from "./assets/artesano_5.PNG"; // Asegúrate de que la imagen exista
import Pago from "./pago";

export default function Artesano5() {
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
      <h1 style={styles.title}>Don Martín Herrera</h1>
      <img src={artesano5} alt="Artesano 5" style={styles.image} />
      <div style={styles.description}>
        <p>
          Don Martín Herrera es un artesano apasionado que ha dedicado más de 40
          años a preservar técnicas tradicionales de su comunidad. Cada pieza
          que crea es única, cargada de historia y esfuerzo.
        </p>
        <p>
          Desde joven, aprendió de sus mayores a moldear, pintar y dar vida a
          materiales simples, transformándolos en obras que reflejan la cultura
          y la identidad local. Su trabajo busca mantener vivas las raíces
          artesanales y compartirlas con quienes valoran lo auténtico.
        </p>
        <p style={styles.quote}>
          “Cuando trabajo, pienso en todas las generaciones que me antecedieron
          y en las que vendrán. Cada pieza es un legado que quiero dejar.”
        </p>
        <p style={styles.quote}>
          “Es importante que la gente comprenda que detrás de cada artesanía hay
          esfuerzo, pasión y amor por nuestra tradición.”
        </p>
        <p>
          Además de vender sus productos, Don Martín participa en talleres
          educativos para jóvenes interesados en aprender y continuar con el
          arte local, fomentando así la continuidad de la cultura artesanal.
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
          product={{ name: "Compra - Artesanía de Don Martín" }}
          type="compra"
          onBack={() => setModo(null)}
        />
      )}

      {modo === "incentivo" && (
        <Pago
          product={{ name: "Incentivo para Don Martín" }}
          type="incentivo"
          onBack={() => setModo(null)}
        />
      )}
    </div>
  );
}
