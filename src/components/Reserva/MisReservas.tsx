import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReserva } from "../../redux/actions";
import styles from "./MisReservas.module.scss";
import MiReserva from "./MiReserva";

export default function MisReservas() {
  const dispatch = useDispatch();
  const allReserva = useSelector((state: any) => state.reserva.allReserva);

  let userId: any = window.sessionStorage.getItem("id");

  useEffect(() => {
    dispatch(getAllReserva(userId));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.containerGrid}>
        <div className={styles.titulo}>
          <h1>Mis Reservas</h1>
          {!allReserva?.length && (
            <h2 style={{ color: "white" }}>
              No tienes ninguna reserva en este momento
            </h2>
          )}
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
