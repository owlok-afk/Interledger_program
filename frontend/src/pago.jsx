// Pago.jsx
import React, { useState } from "react";

export default function Pago({ product, onBack }) {
  const [loading, setLoading] = useState(false);
  const [lastOutgoingGrant, setLastOutgoingGrant] = useState(null);

  const handleCreatePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }), //  monto fijo
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
    } catch (err) {
      console.error("Error al finalizar pago:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>{product?.name || "Pago"}</h2>

      <button onClick={handleCreatePayment} disabled={loading}>
        {loading ? "Procesando..." : "Hacer compra"}
      </button>

      {lastOutgoingGrant && (
        <button
          onClick={handleFinalizePayment}
          disabled={loading}
          style={{ marginLeft: "12px" }}
        >
          {loading ? "Procesando..." : "Confirmar"}
        </button>
      )}

      <br />
      <br />
      <button onClick={onBack}>Volver</button>
    </div>
  );
}
