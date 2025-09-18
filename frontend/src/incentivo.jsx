// Pago.jsx
import React, { useState } from "react";

export default function Pago({ product, onBack }) {
  const [loading, setLoading] = useState(false);
  const [lastOutgoingGrant, setLastOutgoingGrant] = useState(null);
  const [amount, setAmount] = useState("");

  const handleCreateDonation = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Por favor ingresa un monto válido para donar.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount) }), // 👈 monto dinámico
      });
      const data = await res.json();
      console.log("Respuesta de /pago:", data);

      if (data.url) {
        setLastOutgoingGrant(data);
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Error al crear donación:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalizeDonation = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/finalizar-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("Donación finalizada:", data);
      setLastOutgoingGrant(null);
      setAmount("");
    } catch (err) {
      console.error("Error al finalizar donación:", err);
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: { textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif", color: "#3c2f2f" },
    title: { fontSize: "1.8rem", marginBottom: "20px" },
    input: {
      padding: "10px",
      marginBottom: "20px",
      width: "220px",
      borderRadius: "8px",
      border: "1px solid #aaa",
      fontSize: "1rem",
      textAlign: "center",
    },
    button: {
      background: "#d35400",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      margin: "10px",
      transition: "background 0.3s ease",
    },
    backBtn: {
      marginTop: "20px",
      background: "#555",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Apoya al artesano con tu donación</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Ingresa el monto a donar"
        style={styles.input}
      />
      <br />

      <button onClick={handleCreateDonation} disabled={loading} style={styles.button}>
        {loading ? "Procesando..." : "Enviar donación"}
      </button>

      {lastOutgoingGrant && (
        <button onClick={handleFinalizeDonation} disabled={loading} style={styles.button}>
          {loading ? "Procesando..." : "Confirmar donación"}
        </button>
      )}

      <br />
      <button onClick={onBack} style={styles.backBtn}>Volver</button>
    </div>
  );
}
