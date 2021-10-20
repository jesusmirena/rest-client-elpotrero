import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllReserva} from "../../redux/actions";
import styles from "./MisReservas.module.scss";
import MiReserva from "./MiReserva";


export default function MisReservas() {
  const dispatch = useDispatch();
  const allReserva = useSelector((state: any) => state.reserva.allReserva);
  console.log("RESERVITAS", allReserva);
  
  
  let userId: any = window.sessionStorage.getItem("id");

  useEffect(() => {
    dispatch(getAllReserva(5));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1>Mis Reservas</h1>
        </div>
        <div className={styles.grid}>
          {allReserva &&
            allReserva.map((el: any) => {
              return (
                <MiReserva
                  key={el.id}
                  id={el.id}
                  day={el.day}
                  hour={el.hour}
                  duration={el.duration}
                  field={el.field}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
