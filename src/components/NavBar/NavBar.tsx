import React from "react";
import { Link } from "react-router-dom";
import logo from "../../visuales/fondoPotrero.png";
import styles from "../NavBar/NavBar.module.scss";
export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} ${styles.headerWrapper}`}>
        <Link to="/home">
          <img className={styles.logo} src={logo} />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navWrapper}>
            <li>
              {" "}
              <Link className={styles.navLink} to="/home">
                Home{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.navLink} to="/canchas">
                Canchas
              </Link>
            </li>
            <li>
              {" "}
              <Link className={styles.navLink} to="#">
                Crear equipo
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className={`${styles.navLink} ${styles.navLinkEnd}`}
                to="/contacto"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} to="/login">
                Iniciar sesion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
