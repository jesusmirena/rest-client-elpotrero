import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import styles from "./Team.module.scss";
import { putCalificarTeam, postNotificationTeam } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Team(props: any) {
  const dispatch = useDispatch();
  const [calificacion, setCalificacion] = useState({
    id: props.id,
    qualification: 0,
  });
  let userId: any = window.sessionStorage.getItem("id");

  function handleCalificar(e: any) {
    setCalificacion({
      ...calificacion,
      qualification: parseInt(e.target.value),
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(putCalificarTeam(calificacion));
    setCalificacion({
      ...calificacion,
      qualification: 0,
    });
  }

  /*  let playerId = props.players?.map((p: any) => {
    return {
      id: p.id,
    };
  });
 */
  function handleUnirme() {
    let payload = {
      team: props.id,
      player: parseInt(userId),
    };

    dispatch(postNotificationTeam(payload));
  }

  return (
    <div className={styles.container}>
      {/* <Calificacion value={3} /> */}
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={props.image} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.info}>
          <h2 className={styles.name}>{props && props.name}</h2>

          <div>
            <Rating name="read-only" value={props.qualification} readOnly />
          </div>

          <p>Capitan: </p>
          <p>{props && props.user}</p>

          <p className={styles.info}>Jugadores:</p>
          {props.players &&
            props.players.map((el: any) => {
              return (
                <div key={el.id}>
                  <p className={styles.info}>{el.playerName}</p>
                </div>
              );
            })}
        </div>
      </div>
      <br />
      <button className={styles.botonUnirme} onClick={handleUnirme}>
        Unirme
      </button>
      <select
        className={styles.selectCalificacion}
        onChange={(e) => handleCalificar(e)}
        name="Calificar"
        id="calificar"
      >
        <option key="1" value="1">
          1
        </option>
        <option key="2" value="2">
          2
        </option>
        <option key="3" value="3">
          3
        </option>
        <option key="4" value="4">
          4
        </option>
        <option key="5" value="5">
          5
        </option>
      </select>
      <button className={styles.botonCalificar} onClick={handleSubmit}>
        Calificar
      </button>
    </div>
  );
}
