// Login.jsx
import React, { useState } from "react";
import fondoImg from "./assets/fourXpay_fondo.png"; // 👈 importa tu imagen de fondo

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondoImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#1a1a1a",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Login
        </h2>

        {/* Usuario */}
        <label
          style={{
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Ingresa usuario
        </label>
        <input
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
          }}
        />

        {/* Contraseña */}
        <label
          style={{
            display: "block",
            textAlign: "left",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          Ingresa contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
          }}
        />

        {/* Botón */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0f172a")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1e3a8a")}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
