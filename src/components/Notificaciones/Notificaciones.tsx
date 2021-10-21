import React, { useEffect, useState } from "react";
import {
  getNotificaciones,
  putNotification,
  getNotificacionesMisEquipos,
  getNotificacionesJugadorUnir,
  getNotificacionesRespuestaJugadorUnir,
} from "../../redux/actions";
import styles from "./Notificaciones.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CardTeam from "./CardTeam";
import JugadorUnir from "./JugadorUnir";
import RespuestaJugadorUnir from "./RespuestaJugadorUnir";

export default function Notificaciones() {
  const notificaciones = useSelector(
    (state: any) => state.notificaciones.notificaciones
  );
  let notificacionesMisEquipos = useSelector(
    (state: any) => state.notificaciones.notificacionesMisEquipos
  );
  const notificacionesJugadoresUnir = useSelector(
    (state: any) => state.notificaciones.notificacionesJugadorUnir
  );
  let notificacionesRespuestaJugadoresUnir = useSelector(
    (state: any) => state.notificaciones.notificacionesRespuestaJugadorUnir
  );

  const dispatch = useDispatch();
  const history = useHistory();
  let userId: any = window.sessionStorage.getItem("id");

  useEffect(() => {
    dispatch(getNotificaciones(userId));
    dispatch(getNotificacionesMisEquipos(userId));
    dispatch(getNotificacionesJugadorUnir(userId));
    dispatch(getNotificacionesRespuestaJugadorUnir(userId));
  }, []);

  notificacionesMisEquipos = notificacionesMisEquipos.filter(
    (n: any) => n.notification != "Sin notificaciones"
  );

  function handleAccept(id: number) {
    let payload = {
      id: id,
      attending: "YES",
    };
    dispatch(putNotification(payload));
    alert("Aceptaste la invitación satisfactoriamente");
    window.location.reload();
  }

  function handleReject(id: number) {
    let payload = {
      id: id,
      attending: "NO",
    };
    dispatch(putNotification(payload));
    alert("Rechazaste la invitación satisfactoriamente");
    window.location.reload();
  }
  return (
    <div className={styles.container}>
      <div className={styles.containerNotificaciones}>
        <h2 className={styles.textoNotificaciones}>
          Notificaciones Personales
        </h2>
        <div className={styles.notificacion}>
          {notificaciones
            .filter((n: any) => n.attending === "PENDING")
            .map((n: any) => {
              return (
                <div key={n.id}>
                  <p className={styles.textoNotificaciones}>
                    El equipo {n.teamName} quiere invitarte a jugar el {n.day} a
                    las {n.hour}
                  </p>
                  <p className={styles.textoNotificaciones}>
                    Para mas informacion contacta al capitan {n.userName} al
                    siguiente numero: {n.userCell}
                  </p>
                  <button
                    className={styles.botonAceptar}
                    onClick={() => handleAccept(n.id)}
                  >
                    Aceptar invitacion
                  </button>
                  <button
                    className={styles.botonRechazar}
                    onClick={() => handleReject(n.id)}
                  >
                    Rechazar invitacion
                  </button>
                </div>
              );
            })}
        </div>
        <div>
          {notificacionesRespuestaJugadoresUnir?.map((n: any) => {
            return (
              <RespuestaJugadorUnir
                key={n.id}
                teamName={n.teamName}
                attending={n.attending}
              />
            );
          })}
        </div>
        <h2 className={styles.textoNotificaciones}>
          Notificaciones de Tus Equipos
        </h2>
        <div>
          {notificacionesMisEquipos?.map((n: any) => {
            return (
              <CardTeam teamName={n.teamName} notificaciones={n.notification} />
            );
          })}
        </div>
        <div>
          {notificacionesJugadoresUnir.map((n: any) => {
            return (
              <JugadorUnir
                key={n.id}
                teamName={n.teamName}
                notificaciones={n.notification}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
