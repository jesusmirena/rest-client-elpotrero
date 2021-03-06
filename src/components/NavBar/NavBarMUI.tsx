import * as React from "react";
import styles from "./NavBarMUI.module.scss";
import { Link } from "react-router-dom";
import Carrito from "../CarritodeJugadores/Carrito/Carrito";
import useUser from "../../hooks/useUser";

export default function NavBarMui() {
  const { isLogged } = useUser();
  return (
    <>
      {isLogged && (
        <div className={styles.navBg}>
          <nav className={`${styles.navegacion} ${styles.contenedor}`}>
            <li className={styles.navLink}>
              <Link to="/teams">EQUIPOS DISPONIBLES</Link>
            </li>

            <li className={styles.navLink}>
              <Link to="/equipo">CREAR EQUIPO</Link>
            </li>

            <li className={styles.navLink}>
              <Link to="/disponibles">ME FALTA UNO</Link>
            </li>
            <li className={styles.navLink}>
              <Link to="/contacto">CONTACTO</Link>
            </li>
          </nav>
        </div>
      )}
    </>
  );
}
