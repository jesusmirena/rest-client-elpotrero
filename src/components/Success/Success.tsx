import React from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.scss";

export default function Success() {
  return (
    <div className={styles.container}>
      <h1>¡Listo! Se acredito tu pago</h1>
      <Link to="/home">
        <button className={styles.btn}>Volver a Home</button>
      </Link>
    </div>
  );
}
