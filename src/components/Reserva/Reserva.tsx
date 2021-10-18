import React, { useEffect, useState } from "react";
import { deleteReserva, getReserva } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useHistory } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Redirect } from "react-router";
import styles from "./Reserva.module.scss";
import imagen from "../../visuales/canchitaCard.png";
import { resetReserva } from "../../redux/actions";

export default function Reserva() {
  const dispatch = useDispatch();
  const history = useHistory();
  const reservaData = useSelector((state: any) => state.reserva);
  let userId: any = window.sessionStorage.getItem("id");
  const { isLogged } = useUser();

  //console.log("IDDDD", userId);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(deleteReserva(reservaData.reserva.id));
    history.push("/");
    dispatch(resetReserva());
    window.sessionStorage.removeItem("idreserva");
  }
  window.sessionStorage.setItem("idreserva", reservaData.reserva.id);

  const numberid = parseInt(userId);
  useEffect(() => {
    dispatch(getReserva(numberid));
  }, []);
  return (
    <>
      {!isLogged && <Redirect to="/login" />}
      {isLogged && (
        <div className={styles.container}>
          <h3>Reserva de Cancha</h3>
          <div>
            <div>
              <div>
                <div>
                  <h2>{reservaData.reserva.field?.name}</h2>
                  <h3>{reservaData.reserva?.day}</h3>
                </div>
                <h3>{reservaData.reserva?.hour}</h3>
                <div>
                  <img
                    className={styles.img}
                    src={reservaData.reserva.field?.image || imagen}
                    alt="Cancha"
                  />
                  <h4>Direccion</h4>
                  <p className={styles.direccion}>
                    {reservaData.reserva.field?.address}
                  </p>
                  <h3>
                    Precio de la reserva (20%) : ${" "}
                    {reservaData.reserva.field?.cost * 0.2}
                  </h3>
                  <div>
                    <form action="http://localhost:3001/checkout" method="POST">
                      <input
                        type="hidden"
                        name="title"
                        id="title"
                        value={reservaData.reserva.field?.name}
                      />
                      <input
                        type="hidden"
                        name="price"
                        id="price"
                        value={reservaData.reserva.field?.cost * 0.2}
                      />

                      <input
                        type="hidden"
                        name="quantity"
                        id="quantity"
                        value={reservaData.reserva?.duration}
                      />
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={reservaData.reserva.id}
                      />
                      <button className={styles.btnreservar} type="submit">
                        Reserva
                      </button>
                    </form>
                    <button
                      className={styles.btncancelar}
                      onClick={handleSubmit}
                    >
                      Cancelar reserva
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
