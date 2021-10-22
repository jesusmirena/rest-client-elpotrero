import React from "react";
import styles from "./Notificaciones.module.scss";
export default function CardTeam(props: any) {
  console.log(props.notificaciones);
  return (
    <div>
      <h3 className={styles.textoNotificaciones}>{props.teamName}</h3>
      {props.notificaciones?.map((n: any) => {
        if (n.attending === "NO") {
          return (
            <div className={styles.notificacionC} key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.player.user[0].name} rechazo tu invitacion a jugar
                el dia {n.day} a las {n.hour}
              </p>
            </div>
          );
        }
        if (n.attending === "YES") {
          return (
            <div className={styles.notificacionC} key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.player.user[0].name} acepto tu invitacion a jugar
                el dia {n.day} a las {n.hour}
              </p>
            </div>
          );
        } else {
          return (
            <div className={styles.notificacionC} key={n.notifactionId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.player.user[0].name} no respondio aun
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
