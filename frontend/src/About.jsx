import React from "react";
import umbImage from "./assets/umb_interledger.png"; // Asegúrate que la imagen esté en la carpeta assets

export default function About() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto", lineHeight: 1.6, textAlign: "justify" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Pago seguro artesanal con Interledger</h1>

      <p>
        Esta plataforma ha sido desarrollada gracias al trabajo dedicado de estudiantes de la <strong>UMB</strong>, 
        quienes han integrado la <strong>API Open Payments de Interledger</strong> para garantizar pagos seguros, rápidos y confiables
        directamente del cliente al artesano, sin retención de fondos. Esto permite formalizar transacciones digitales en el comercio artesanal,
        fortaleciendo la estabilidad financiera de los artesanos y promoviendo la economía local.
      </p>

      <p>
        La plataforma web es simple e intuitiva, permitiendo al cliente ingresar los datos del pago y confirmar la transacción hacia el artesano.
        Los pagos se procesan de forma segura, interoperable y casi inmediata gracias a la API Open Payments de Interledger.
      </p>

      <p>
        Este proyecto representa un esfuerzo académico aplicado, demostrando cómo el conocimiento de los estudiantes de la UMB puede transformar la economía local 
        a través de soluciones digitales innovadoras, brindando confianza y transparencia en cada transacción artesanal.
      </p>

      <div style={{ marginTop: 40 }}>
        <img 
          src={umbImage} 
          alt="UMB e Interledger" 
          style={{ width: "100%", height: "auto", display: "block" }} 
        />
      </div>
    </div>
  );
}
