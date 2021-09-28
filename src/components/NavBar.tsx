import React from "react";
import styles from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <div>
      <nav className="navBar">
        <a className={styles.navLink} href="#">
          hola
        </a>
        <a className={styles.navLink} href="#">
          chau
        </a>
        <a className={styles.navLink} href="#">
          fedeperro
        </a>
        <a className={styles.navLink} href="#">
          boca sho te amo
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
