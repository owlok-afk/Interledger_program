// Catalog.jsx
import React from "react";
import heroImage from "./assets/artesanias_cuarto.png";

// Importa todas las imágenes de productos manualmente (mantén las extensiones tal como las tienes)
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

export default function Catalog({ onSelectProduct }) {
  const productImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
  ];

  const products = productImages.map((image, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    image,
  }));

  const styles = {
    page: { fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", background: "#f9f5f0", minHeight: "100vh" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "#3c2f2f", color: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,.12)" },
    navTitle: { fontSize: 20, fontWeight: 700 },
    navList: { display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 },
    navItem: { cursor: "pointer", userSelect: "none" },
    heroWrap: { position: "relative", height: "70vh", width: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" },
    heroImg: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 },
    heroOverlay: { position: "relative", zIndex: 1, background: "rgba(0,0,0,0.45)", color: "#fff", padding: "28px", borderRadius: 12, maxWidth: 960, textAlign: "center" },
    heroTitle: { margin: 0, fontSize: "2.8rem", lineHeight: 1.05 },
    heroText: { marginTop: 8, fontSize: "1.05rem" },

    section: { padding: "32px 20px 80px", maxWidth: 1200, margin: "0 auto" },
    grid: { display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", alignItems: "start" },
    card: { background: "#fff", borderRadius: 10, boxShadow: "0 6px 18px rgba(0,0,0,0.08)", overflow: "hidden", maxWidth: 260, margin: "0 auto", display: "flex", flexDirection: "column" },
    prodImg: { width: "100%", height: 160, objectFit: "cover", display: "block" },
    cardBody: { padding: 12, textAlign: "center", flex: "1 1 auto" },
    prodName: { margin: "8px 0 12px", fontSize: 16, fontWeight: 600, color: "#333" },
    button: { background: "#d35400", color: "#fff", border: "none", padding: "10px 14px", borderRadius: 8, cursor: "pointer", fontWeight: 600 },
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.navTitle}>Artesanias locales por y para ti</div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Inicio</li>
          <li style={styles.navItem}>Sobre nosotros</li>
          <li style={styles.navItem}>Productos</li>
          <li style={styles.navItem}>Contacto</li>
        </ul>
      </nav>

      {/* HERO: utilizo <img> para asegurar que siempre se renderice */}
      <div style={styles.heroWrap}>
        <img src={heroImage} alt="Artesanías - Cuarto" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <h2 style={styles.heroTitle}>Arte Mexicano </h2>
          <p style={styles.heroText}>Typical products & souvenirs - Artesanías con historia</p>
        </div>
      </div>

      {/* CATÁLOGO */}
      <section style={styles.section}>
        <h1 style={{ textAlign: "center", color: "#3c2f2f", fontSize: 28, marginBottom: 20 }}>Catálogo de Productos</h1>

        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.prodImg} />
              <div style={styles.cardBody}>
                <h3 style={styles.prodName}>{product.name}</h3>
                <button
                  onClick={() => onSelectProduct(product)}
                  style={styles.button}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
