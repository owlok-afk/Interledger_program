// App.jsx
import React, { useState } from "react";
import Catalog from "./Catalog.jsx";
import Pago from "./pago.jsx";
import Login from "./Login.jsx"; 

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.success) setLoggedIn(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",   // toda la altura
        width: "100vw",    // todo el ancho
        display: "flex",
        flexDirection: "column", // hijos uno debajo de otro (si los hay)
      }}
    >
      {!loggedIn ? (
        <div style={{ flex: 1 }}>
          <Login onLogin={handleLogin} />
        </div>
      ) : selectedProduct ? (
        <div style={{ flex: 1 }}>
          <Pago product={selectedProduct} onBack={() => setSelectedProduct(null)} />
        </div>
      ) : (
        <div style={{ flex: 1 }}>
          <Catalog onSelectProduct={setSelectedProduct} />
        </div>
      )}
    </div>
  );
}
