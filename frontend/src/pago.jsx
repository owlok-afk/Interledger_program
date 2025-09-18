import React, { useState } from "react";
import artesaniaImg from "./assets/artesania.jpg"; // 👈 importa la imagen desde assets

export default function Pago({ product, onBack }) {
  const [loading, setLoading] = useState(false);
  const [lastOutgoingGrant, setLastOutgoingGrant] = useState(null);

  const handleCreatePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000 }), // puedes pasar otro monto si quieres
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
    <div>
      <h1>{product.name}</h1>
      <img
        src={artesaniaImg} // 👈 ahora se carga desde assets
        alt="Artesanía"
        style={{ display: "block", margin: "0 auto", maxWidth: "300px" }}
      />
      <p>
        Esta es una hermosa artesanía de Puebla elaborada con barro tradicional. 
        Cada pieza es única, reflejando la tradición y el arte transmitido de 
        generación en generación.
      </p>

      <button onClick={handleCreatePayment} disabled={loading}>
        {loading ? "Creando pago..." : "Crear Pago"}
      </button>

      {lastOutgoingGrant && (
        <button onClick={handleFinalizePayment} disabled={loading}>
          {loading ? "Finalizando..." : "Finalizar Pago"}
        </button>
      )}

      <br />
      <button onClick={onBack}>Volver al catálogo</button>
    </div>
  );
}
