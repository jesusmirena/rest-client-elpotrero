import React from "react";
import { Link } from "react-router-dom";
import styles from "./Failed.module.scss";

export default function Failed() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Tu pago fue rechazado</h1>
      </div>
      <span>¿Qué pasó?</span>
      <p>
        No pudimos avanzar con el pago, si quieres puedes intentar con otro
        medio de pago
      </p>
      <div>
        <Link to="/home">
          <button>Volver a Home</button>
        </Link>
      </div>
    </div>
  );
}
