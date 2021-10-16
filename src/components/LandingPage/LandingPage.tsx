import React from "react";
import styles from "./LandingPage.module.scss";
import { Link } from "react-router-dom";
import Datepicker from "../Card/Datepicker/Datepicker";
import useUser from "../../hooks/useUser";
import FormPrueba from "../Forms/FormPage/Login/FormPrueba";

export default function LandinPage() {
  const { isLogged } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.datepicker}>
        <Datepicker />
      </div>
      {/* <div className={styles.btngrid}>
        {!isLogged && (
          <div className={styles.btnc}>
            <Link to="/register">
              <button className={styles.btn}>Registrese</button>
            </Link>
          </div>
        )}
      </div> */}
      <div className={styles.btngrid}>
        <FormPrueba/>
      </div>
      <div className={styles.containerTitle}>
        <p className={styles.title}>EL POTRERO</p>
      </div>
      <div className={styles.backgroundInfo}>
        <div className={styles.busca}>
          <p className={styles.infotitle}>Busca</p>
          <p className={styles.parrafo}>
            Conocé la disponibilidad de tus canchas preferidas
          </p>
        </div>
        <div className={styles.reserva}>
          <p className={styles.infotitle}>Reservá</p>
          <p className={styles.parrafo}>
            Tenés toda la información para hacer tu reserva instantánea
          </p>
        </div>
        <div className={styles.alquila}>
          <p className={styles.infotitle}>Jugá</p>
          <p className={styles.parrafo}>
            Vos preocupate por romperla en el partido
          </p>
        </div>
      </div>
    </div>
  );
}
