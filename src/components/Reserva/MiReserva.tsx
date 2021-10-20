import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteReserva, getReserva, resetReserva } from "../../redux/actions";
import styles from "./MiReserva.module.scss";

export default function MiReserva(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();
  const reservaData = useSelector((state: any) => state.reserva);
  let userId: any = window.sessionStorage.getItem("id");

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(deleteReserva(props.id));
    dispatch(resetReserva());
    window.sessionStorage.removeItem("idreserva");
    window.location.reload();
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={props.field.image} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{props.field.name}</h3>
        <h3>{props.field.address}</h3>
        <p>Dia de la reserva: </p>
        <p>{props.day}</p>
        <p>Horario de reserva: </p>
        <p>{props.hour}</p>
        <p>Precio Total</p>
        <p>{props.field.cost}</p>
      </div>
      <button onClick={handleSubmit}>Cancelar reserva</button>
    </div>
  );
}
