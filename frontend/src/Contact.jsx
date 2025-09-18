import React from "react";
import alexImg from "./assets/alex.jpeg";
import andresImg from "./assets/andres.jpeg";
import alanImg from "./assets/alan.jpeg";

export default function Contact() {
  const team = [
    {
      name: "Alex González",
      role: "Desarrollador Frontend & Backend",
      email: "alex.g.g5387@gmail.com",
      img: alexImg,
    },
    {
      name: "Jesús Andrés Mondragón Tenorio",
      role: "Project Manager",
      email: "jesusandresmt98@gmail.com",
      img: andresImg,
    },
    {
      name: "Alan Fernando Sánchez Romero",
      role: "Diseñador de experiencia de usuario",
      email: "fs2878810@gmail.com",
      img: alanImg,
    },
  ];

  const styles = {
    container: { padding: 40, maxWidth: 1000, margin: "0 auto", textAlign: "center" },
    header: { fontSize: 32, marginBottom: 30 },
    teamGrid: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 30 },
    memberCard: { 
      width: 220, 
      backgroundColor: "#f9f9f9", 
      borderRadius: 15, 
      padding: 20, 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center", 
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)", 
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    memberCardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    },
    memberImg: { 
      width: 120, 
      height: 120, 
      borderRadius: "50%", 
      objectFit: "cover", 
      marginBottom: 12, 
      border: "3px solid #8B4513", // color café
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)" 
    },
    memberName: { fontWeight: "bold", fontSize: 18, marginBottom: 4 },
    memberRole: { fontSize: 14, color: "#555", marginBottom: 6 },
    memberEmail: { fontSize: 14, color: "#333", textDecoration: "none" },
    footerBar: {
      width: "100%",
      height: 8,
      backgroundColor: "#8B4513", // color café para la barra
      marginTop: 50,
      borderRadius: 4,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contacto</h1>
      <div style={styles.teamGrid}>
        {team.map((member, idx) => (
          <div 
            key={idx} 
            style={styles.memberCard} 
            onMouseEnter={e => Object.assign(e.currentTarget.style, styles.memberCardHover)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "none", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" })}
          >
            <img src={member.img} alt={member.name} style={styles.memberImg} />
            <div style={styles.memberName}>{member.name}</div>
            <div style={styles.memberRole}>{member.role}</div>
            <a href={`mailto:${member.email}`} style={styles.memberEmail}>{member.email}</a>
          </div>
        ))}
      </div>

      {/* Barra inferior */}
      <div style={styles.footerBar}></div>
    </div>
  );
}
