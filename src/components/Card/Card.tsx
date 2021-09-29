import React from "react";
import cancha from "../../visuales/cancha.svg";
import styles from "../Card/Card.module.scss";

export default function Card() {
  return (
    <div>
      <div>
        <p className={styles.hora}>Cancha uno </p>
        <p className={styles.hora}>Disponible</p>
        <p className={styles.hora}>Hora 22:30</p>
      </div>
      <img src={cancha} className={styles.cancha} />
    </div>
  );
}
