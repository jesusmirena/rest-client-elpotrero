import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Failed.module.scss";
import { deleteReserva } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Failed() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const reservaData = useSelector((state: any) => state.reserva);

  function handleSubmit(e: any) {
    e.preventDefault();
    const id = window.sessionStorage.getItem("idreserva");
    dispatch(deleteReserva(id));
    window.sessionStorage.removeItem("idreserva");

    history.push("/");
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Tu pago fue rechazado</h1>
      </div>
      <span className={styles.txt}>¿Qué pasó?</span>
      <p className={styles.txt}>
        No pudimos avanzar con el pago, si quieres puedes intentar con otro
        medio de pago
      </p>
      <div>
        <button onClick={handleSubmit} className={styles.btn}>
          Volver a Home
        </button>
      </div>
    </div>
  );
}
