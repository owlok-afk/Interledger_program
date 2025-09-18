import React, { useState } from "react";
import heroImage from "./assets/artesanias_cuarto.png";

// Importa todas las imágenes de productos
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.PNG";

// Componentes al mismo nivel
import About from "./About";
import Contact from "./Contact";

// Importar las 10 pantallas de artesanos
import Artesano1 from "./Artesano1";
import Artesano2 from "./Artesano2";
import Artesano3 from "./Artesano3";
import Artesano4 from "./Artesano4";
import Artesano5 from "./Artesano5";
import Artesano6 from "./Artesano6";
import Artesano7 from "./Artesano7";
import Artesano8 from "./Artesano8";
import Artesano9 from "./Artesano9";
import Artesano10 from "./Artesano10";

export default function Catalog() {
  const [activeTab, setActiveTab] = useState("home");

  const estados = [
    "Jalisco", "Oaxaca", "Puebla", "Guanajuato", "Chiapas",
    "Michoacán", "Veracruz", "Hidalgo", "Morelos", "Yucatán"
  ];

  const tiposArtesania = [
    "Barro", "Textil", "Madera", "Vidrio soplado", "Cerámica",
    "Cestería", "Metal", "Pintura", "Joyería", "Cartonería"
  ];

  const nombresArtesanos = [
    "José Bernabé Campechano",
    "Miguel Ángel Ramírez",
    "Don Manuel Herrera",
    "Don Enrique Morales",
    "Don Martín Herrera"
  ];

  const productImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
  ];

  // Asignar estado, tipo y nombre de artesano
  const products = productImages.map((image, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    image,
    estado: estados[i % estados.length], // aleatorio cíclico
    tipo: tiposArtesania[i % tiposArtesania.length], // aleatorio cíclico
    artesano: nombresArtesanos[i % nombresArtesanos.length], // repetir ciclo 1-5
  }));

  const styles = {
    page: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      background: "#f9f5f0",
      minHeight: "100vh",
    },
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
      background: "#3c2f2f",
      color: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,.12)",
    },
    navTitle: { fontSize: 20, fontWeight: 700 },
    navList: { display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 },
    navItem: { cursor: "pointer", userSelect: "none" },
    heroWrap: { position: "relative", height: "70vh", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" },
    heroImg: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 },
    heroOverlay: { position: "relative", zIndex: 1, background: "rgba(0,0,0,0.45)", color: "#fff", padding: "28px", borderRadius: 12, maxWidth: 960, textAlign: "center" },
    heroTitle: { margin: 0, fontSize: "2.8rem", lineHeight: 1.05 },
    heroText: { marginTop: 8, fontSize: "1.05rem" },

    section: { padding: "32px 20px 80px", maxWidth: 1200, margin: "0 auto" },
    grid: { display: "grid", gap: 20, gridTemplateColumns: "repeat(5, 1fr)", alignItems: "start" },
    card: { background: "#fff", borderRadius: 10, boxShadow: "0 6px 18px rgba(0,0,0,0.08)", overflow: "hidden", maxWidth: 260, margin: "0 auto", display: "flex", flexDirection: "column" },
    prodImg: { width: "100%", height: 160, objectFit: "cover", display: "block" },
    cardBody: { padding: 12, textAlign: "center", flex: "1 1 auto" },
    prodName: { margin: "8px 0 12px", fontSize: 16, fontWeight: 600, color: "#333" },
    productDetails: { fontSize: 14, color: "#555", marginBottom: 8 },
    button: { background: "#d35400", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600 },
  };

  const HomeContent = () => (
    <>
      <div style={styles.heroWrap}>
        <img src={heroImage} alt="Artesanías" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h2 style={styles.heroTitle}>Arte Mexicano </h2>
          <p style={styles.heroText}>Typical products & souvenirs - Artesanías con historia</p>
        </div>
      </div>

      <section style={styles.section}>
        <h1 style={{ textAlign: "center", color: "#3c2f2f", fontSize: 28, marginBottom: 20 }}>Catálogo de Productos</h1>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.prodImg} />
              <div style={styles.cardBody}>
                <h3 style={styles.prodName}>{product.name}</h3>
                <div style={styles.productDetails}>
                  <p>Estado: {product.estado}</p>
                  <p>Tipo: {product.tipo}</p>
                  <p>Artesano: {product.artesano}</p>
                </div>
                <button onClick={() => setActiveTab(`artesano${product.id}`)} style={styles.button}>Ver más</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    if (activeTab === "about") return <About />;
    if (activeTab === "contact") return <Contact />;
    if (activeTab === "artesano1") return <Artesano1 />;
    if (activeTab === "artesano2") return <Artesano2 />;
    if (activeTab === "artesano3") return <Artesano3 />;
    if (activeTab === "artesano4") return <Artesano4 />;
    if (activeTab === "artesano5") return <Artesano5 />;
    if (activeTab === "artesano6") return <Artesano6 />;
    if (activeTab === "artesano7") return <Artesano7 />;
    if (activeTab === "artesano8") return <Artesano8 />;
    if (activeTab === "artesano9") return <Artesano9 />;
    if (activeTab === "artesano10") return <Artesano10 />;
    return <HomeContent />;
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navTitle}>Artesanías locales por y para ti</div>
        <ul style={styles.navList}>
          <li style={styles.navItem} onClick={() => setActiveTab("home")}>Inicio</li>
          <li style={styles.navItem} onClick={() => setActiveTab("about")}>Sobre nosotros</li>
          <li style={styles.navItem}>Productos</li>
          <li style={styles.navItem} onClick={() => setActiveTab("contact")}>Contacto</li>
        </ul>
      </nav>

      {renderContent()}
    </div>
  );
}
