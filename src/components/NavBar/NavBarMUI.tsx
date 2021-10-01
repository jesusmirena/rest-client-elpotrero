import * as React from "react";
import styles from "./NavBarMUI.module.scss";
import MenuHamburguesa from "./MenuHamburguesa";
import logo from "../../visuales/logoblanco.png";
import IconButton from "@mui/material/IconButton";

export default function NavBarMui() {
  return (
    <div className={styles.navbar}>
      <div className={styles.columnmenu}>
        <MenuHamburguesa />
      </div>
      <div className={styles.columnlogo}>
        <img src={logo} className={styles.logo} />
      </div>
      <div className={styles.columnhome}>
        <p className={styles.title}>HOME</p>
      </div>
      <div className={styles.columncanchas}>
        <p className={styles.title}>CANCHAS</p>
      </div>
      <div className={styles.columnequipo}>
        <p className={styles.title}>CREAR EQUIPO</p>
      </div>

      <div className={styles.columncontacto}>
        <p className={styles.title}>CONTACTO</p>
      </div>
      <div className={styles.columnsesion}>
        <p className={styles.title}>INICIAR SESION</p>
      </div>
    </div>
  );
}
