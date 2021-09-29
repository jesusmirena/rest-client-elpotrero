import React from "react";
import { Link } from "react-router-dom";
import styles from "../NavBar/NavBar.module.scss";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link className={styles.navLink} to="/home">
          Home{" "}
        </Link>
        <Link className={styles.navLink} to="/canchas">
          Canchas
        </Link>
        <Link className={styles.navLink} to="#">
          Crear equipo
        </Link>
      </nav>
      <div>
        <Link className={styles.navLinkLogin} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
