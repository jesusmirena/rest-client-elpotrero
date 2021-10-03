import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../visuales/logoblanco.png";
import MenuHamburguesa from "../NavBar/MenuHamburguesa";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.menuHamburguesa}>
        <IconButton
          size="large"
          edge="start"
          style={{ color: "white" }}
          aria-label="menu"
        >
          <MenuHamburguesa />
        </IconButton>
      </div>
      <div className={styles.logoContainer}>
        <Link to="/home">
          <img className={styles.logo} src={logo} />
        </Link>
      </div>
    </header>
  );
}
