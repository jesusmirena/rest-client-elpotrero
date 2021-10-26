import React from "react";
import styles from "./HomeDos.module.scss";
import Datepicker from "../Card/Datepicker/Datepicker";
import { Link } from "react-router-dom";

export default function HomeDos() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundInfo}>
        <div className={styles.infoContainer}>
          <h2 className={styles.infotitle}>Jugar</h2>
          <p className={styles.parrafo}>
            Conseguí al jugador que te falta y mirá a qué equipos te podés unir
          </p>

          <div className={styles.botonContainer}>
            <Link to="/disponibles">
              <button className={styles.btn}>Me falta uno</button>
            </Link>

            <Link to="/teams">
              <button className={styles.btn}>Equipos disponibles</button>
            </Link>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.infotitle}>Reservar</h2>
          <p className={styles.parrafo}>
            Conocé la disponibilidad de tus canchas preferidas. Tenés toda la
            información para hacer tu reserva instantánea.
          </p>
          <div className={styles.datepicker}>
            <Datepicker />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.infotitle}>Calificar</h2>
          <p className={styles.parrafo}>
            Calificá los equipos y jugadores para mejorar la calidad de tus
            partidos.
          </p>
          <div className={styles.botonContainer}>
            <Link to="/jugadores">
              <button className={styles.btn}>Jugadores</button>
            </Link>
            <Link to="/allteams">
              <button className={styles.btn}>Equipos</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
