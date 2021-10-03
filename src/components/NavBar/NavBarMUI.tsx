import * as React from "react";
import styles from "./NavBarMUI.module.scss";

import { Link } from "react-router-dom";

export default function NavBarMui() {
  return (
    <div className={styles.navBg}>
      <nav className={`${styles.navegacion} ${styles.contenedor}`}>
        <Link to="/home" className={styles.navLink}>
          HOME
        </Link>
        <Link className={styles.navLink} to="/canchas">
          CANCHAS
        </Link>
        <Link className={styles.navLink} to="/equipo">
          CREAR EQUIPO
        </Link>

        <Link className={styles.navLink} to="/contacto">
          CONTACTO
        </Link>
        <Link className={styles.navLink} to="/login">
          INICIAR SESION
        </Link>
      </nav>
    </div>
  );
}
