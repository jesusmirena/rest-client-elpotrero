import React from "react";
import { useDispatch } from "react-redux";
import { putNotificationTeams, putTeam } from "../../redux/actions";
import { playersPosition } from "../Teams/Funciones/PlayersPosition";
import styles from "./Notificaciones.module.scss";

export default function JugadorUnir(props: any) {
  const dispatch = useDispatch();

  //n.notificationId,
  /*   n.teamId,
  n.teamName,
  n.teamImage,
  n.teamAvailable,
  n.teamPlayers */

  function handleAccept(idNotification: number, playerid: any) {
    let payload = {
      id: idNotification,
      attending: "YES",
    };
    console.log("PROPS", props.teamPlayers);
    dispatch(putNotificationTeams(payload));
    dispatch(
      putTeam(props.id, {
        name: props.teamName,
        image: props.teamImage,
        available: props.teamAvailable,
        //[...props.teamPlayers, {id: playerId}]

        player: [...props.teamPlayers, { id: parseInt(playerid) }],
      })
    );
    alert("Aceptaste la invitación satisfactoriamente");
    window.location.reload();
  }

  function handleReject(id: number) {
    let payload = {
      id: id,
      attending: "NO",
    };
    dispatch(putNotificationTeams(payload));
    alert("Rechazaste la invitación satisfactoriamente");
    window.location.reload();
  }

  return (
    <div>
      <h3 className={styles.textoNotificaciones}>
        {Array.isArray(props.notificaciones) && props.teamName}
      </h3>
      {Array.isArray(props.notificaciones) &&
        props.notificaciones?.map((n: any) => {
          return (
            <div key={n.notificationId}>
              <p className={styles.textoNotificaciones}>
                El jugador {n.playerName} quiere unirse a tu equipo
              </p>
              <p className={styles.textoNotificaciones}>
                Su posicion en la cancha es de{" "}
                {playersPosition(n.playerPosition)} y obtuvo una calificacion
                de: <strong> {n.playerQualification}</strong>
              </p>
              <p className={styles.textoNotificaciones}>
                Si queres tener mas informacion contactalo al:
                <strong>{n.playerCell}</strong>
              </p>
              <button
                className={styles.botonAceptar}
                onClick={() => handleAccept(n.notificationId, n.playerId)}
              >
                Aceptar invitacion
              </button>
              <button
                className={styles.botonRechazar}
                onClick={() => handleReject(n.notificationId)}
              >
                Rechazar invitacion
              </button>
            </div>
          );
        })}
    </div>
  );
}
