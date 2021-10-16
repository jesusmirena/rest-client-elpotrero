import React from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.titulo} >
        <h1 className={styles.titulo}>Contacto</h1>
        <h4>Email: elpotrero.info@gmail.com</h4>
      </div>
      <div className={styles.grid}>
        <h2>Nuestro Equipo</h2>
        <h4>Catalina Manzano</h4>
        <h4>Jesus Mirena</h4>
        <h4>Ariel Romero</h4>
        <h4>Federico Aguilera</h4>
        <h4>Santiago Gonzalez Lonzieme</h4>
        <h4>Rodrigo Batista</h4>
      </div>
      <div>
        <h2>Gracias por visitar nuestra pagina</h2>
      </div>
    </div>
  );
}
