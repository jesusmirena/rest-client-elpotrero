import * as React from "react";
import styles from "./NavBarMUI.module.scss";

import { Link } from "react-router-dom";

export default function NavBarMui() {
  return (
    <div className={styles.navBg}>
      <nav className={`${styles.navegacion} ${styles.contenedor}`}>
        <li className={styles.navLink}>
          <Link to="/home">HOME</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/canchas">CANCHAS</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/equipo">CREAR EQUIPO</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/contacto">CONTACTO</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/login">INICIAR SESION</Link>
        </li>
      </nav>
    </div>
  );
}
