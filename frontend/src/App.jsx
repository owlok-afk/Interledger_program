import React, { useState } from "react";
import Catalog from "./Catalog.jsx";
import Pago from "./Pago.jsx";

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

  if (!loggedIn) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target.username.value;
          const password = e.target.password.value;
          handleLogin(username, password);
        }}
      >
        <h2>Login</h2>
        <input name="username" placeholder="Usuario" />
        <input name="password" type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
    );
  }

  if (selectedProduct) {
    return <Pago product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return <Catalog onSelectProduct={setSelectedProduct} />;
}
