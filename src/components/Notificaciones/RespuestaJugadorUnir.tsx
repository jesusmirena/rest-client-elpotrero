import React from "react";
import styles from "./Notificaciones.module.scss";
export default function RespuestaJugadorUnir(props: any) {
  if (props.attending === "NO") {
    return (
      <div>
        <p className={styles.textoNotificaciones}>
          Lamentamos informale que el equipo {props.teamName} rechazo su pedido
          para unirte al equipo
        </p>
      </div>
    );
  }

  if (props.attending === "YES") {
    return (
      <div>
        <p className={styles.textoNotificaciones}>
          Felicitaciones!! el equipo {props.teamName} acepto que te unieras{" "}
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className={styles.textoNotificaciones}>
        El equipo {props.teamName} todavia no respondio a tu solicitud{" "}
      </p>
    </div>
  );
}
