import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
export default function Profile() {
  const profile = useSelector((state: any) => state.usuario.user);

  return (
    <div>
      <div className={styles.conteiner}>
        <h1>Bienvenido {profile.name || "FEDERICO AGUILERA"}</h1>
      </div>
      <div>
        <div className={styles.card}></div>
      </div>
    </div>
  );
}
