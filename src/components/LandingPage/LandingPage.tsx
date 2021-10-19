import React from "react";
import styles from "./LandingPage.module.scss";
import FormPrueba from "../Forms/FormPage/Login/FormPrueba";
import Logo from "../../visuales/logoblanco.png";

export default function LandinPage() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.logo} src={Logo} alt="" />
        <div className={styles.btngrid}>
          <FormPrueba />
        </div>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>EL POTRERO</h1>
        </div>
      </div>
    </>
  );
}
