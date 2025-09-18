import React, { useState } from "react";

export default function Pago({ product, type = "compra", onBack }) {
  const [loading, setLoading] = useState(false);
  const [lastOutgoingGrant, setLastOutgoingGrant] = useState(null);
  const [amount, setAmount] = useState("");

  const handleCreatePayment = async () => {
    let monto = type === "compra" ? 10000 : Number(amount);

    if (type === "incentivo" && (!monto || isNaN(monto) || monto <= 0)) {
      alert("Por favor ingresa un monto válido para donar.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: monto }),
      });
      const data = await res.json();
      console.log("Respuesta de /pago:", data);

      if (data.url) {
        setLastOutgoingGrant(data);
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Error al crear pago:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalizePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/finalizar-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("Pago finalizado:", data);
      setLastOutgoingGrant(null);
      setAmount("");
    } catch (err) {
      console.error("Error al finalizar pago:", err);
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
      background: "#8B5E3C",
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
      <h2 style={styles.title}>{product?.name || "Pago"}</h2>

      {type === "incentivo" && (
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa el monto a donar"
          style={styles.input}
        />
      )}

      <br />

      <button onClick={handleCreatePayment} disabled={loading} style={styles.button}>
        {loading ? "Procesando..." : type === "compra" ? "Hacer compra" : "Enviar donación"}
      </button>

      {lastOutgoingGrant && (
        <button onClick={handleFinalizePayment} disabled={loading} style={styles.button}>
          {loading ? "Procesando..." : type === "compra" ? "Confirmar compra" : "Confirmar donación"}
        </button>
      )}

      <br />
      <button onClick={onBack} style={styles.backBtn}>Volver</button>
    </div>
  );
}
