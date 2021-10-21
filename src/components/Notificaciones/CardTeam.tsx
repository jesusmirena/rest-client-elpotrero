import React from "react";
import styles from "./Notificaciones.module.scss";
export default function CardTeam(props: any) {
  return (
    <div>
      <h3 className={styles.textoNotificaciones}>{props.teamName}</h3>
      {props.notificaciones?.map((n: any) => {
        if (n.attending === "NO") {
          return (
            <div key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.playerName} rechazo tu invitacion a jugar el dia{" "}
                {n.day} a las {n.hour}
              </p>
            </div>
          );
        }
        if (n.attending === "YES") {
          return (
            <div key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.playerName} acepto tu invitacion a jugar el dia{" "}
                {n.day} a las {n.hour}
              </p>
            </div>
          );
        } else {
          return (
            <div key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.playerName} no respondio aun
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
