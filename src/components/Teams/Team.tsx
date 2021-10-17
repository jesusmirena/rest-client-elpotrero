import { dividerClasses } from "@mui/material";
import React from "react";
import imagen from "../../visuales/edit.jpg";
import styles from "./Team.module.scss";

export default function Team(props: any) {
  console.log("PROOOPS", props);

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer} >
        <img className={styles.img} src={imagen} alt=""/>
      </div>
      <div className={styles.info} >
        <h3>{props.name}</h3>
        <p>Calificacion: </p>
        <p>{props.qualification}</p>
        <p>Capitan: </p>
        <p>{props.user}</p>
      </div>
        <button >Unirme</button>
        <p>Jugadores:</p>
        {/* {props.players &&
          props.players.map((el: any) => {
            return (
              <div>
                <img src={el.image} alt="" width="150px" height="150px" />
                <h3>nombre: </h3>
                <span>{el.name}</span>
                <h3>calificacion: </h3>
                <span>{el.qualification}</span>
                <h3>Posicion</h3>
                <span>{el.position}</span>
              </div>
            );
          })}  */}
    </div>
  );
}
