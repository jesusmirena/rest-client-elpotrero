import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import imagen from "../../visuales/edit.jpg";
import styles from "./Team.module.scss";
import { putCalificarTeam, putTeam } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function AllTeam(props: any) {
  const dispatch = useDispatch();
  const [calificacion, setCalificacion] = useState({
    id: props.id,
    qualification: 0,
  });
  let userId: any = window.sessionStorage.getItem("id");

  function handleCalificar(e: any) {
    setCalificacion({
      id: props.id,
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

  let playerId = props.players.map((p: any) => {
    return {
      id: p.id,
    };
  });

  /* function handleUnirme() {
    let payload = {
      name: props.name,
      image: props.image,
      available: props.available,
      player: [...playerId, { id: parseInt(userId) }],
    };

    dispatch(putTeam(props.id, payload));
  } */

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={props.image} alt="" />
      </div>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <p>Calificacion: </p>
        <p>{props.qualification}</p>
        <p>Capitan: </p>
        <p>{props.user}</p>
      </div>
      <p className={styles.info}>Jugadores:</p>
      {props.players &&
        props.players.map((el: any) => {
          return (
            <div key={el.id}>
              <h3 className={styles.info}>{el.playerName}</h3>
            </div>
          );
        })}
      <select
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
