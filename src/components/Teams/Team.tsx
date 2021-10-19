import { dividerClasses } from "@mui/material";
import React from "react";
import imagen from "../../visuales/edit.jpg";
import styles from "./Team.module.scss";

export default function Team(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={imagen} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <p>Calificacion: </p>
        <p>{props.qualification}</p>
        <p>Capitan: </p>
        <p>{props.user}</p>
      </div>
      <p className={styles.span}>Jugadores:</p>
      {props.players &&
        props.players.map((el: any) => {
          return (
            <div>
              <span className={styles.span}>{el.name}</span>
            </div>
          );
        })}
      <br />
      <button>Unirme</button>
    </div>
  );
}
