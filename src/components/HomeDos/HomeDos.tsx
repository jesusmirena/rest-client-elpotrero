import React from "react";
import styles from "./HomeDos.module.scss";
import Datepicker from "../Card/Datepicker/Datepicker";
import { Link } from "react-router-dom";

export default function HomeDos() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundInfo}>
        <div className={styles.infoContainer}>
          <p className={styles.infotitle}>Jugá</p>
          <p className={styles.parrafo}>
            Vos preocupate por romperla en el partido.
          </p>

          <div className={styles.botonContainer}>
            <Link to="/disponibles">
              <button className={styles.btn}>Me falta uno</button>
            </Link>

            <Link to="/teamsId">
              <button className={styles.btn}>Mis equipos</button>
            </Link>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infotitle}>Busca y Reservá</p>
          <p className={styles.parrafo}>
            Conocé la disponibilidad de tus canchas preferidas. Tenés toda la
            información para hacer tu reserva instantánea.
          </p>
          <div className={styles.datepicker}>
            <Datepicker />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infotitle}>Calificar</p>
          <p className={styles.parrafo}>
            Califica los equipos y jugadores para mejorar la calidad de tus
            partidos.
          </p>
          <Link to="/jugadores">
            <button className={styles.btn}>Jugadores</button>
          </Link>
          <Link to="/allteams">
            <button className={styles.btn}>Equipos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
