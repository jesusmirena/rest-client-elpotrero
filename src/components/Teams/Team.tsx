import { dividerClasses } from "@mui/material";
import React from "react";
import imagen from "../../visuales/edit.jpg";
import styles from "./Team.module.scss";

export default function Team(props: any) {
  console.log("PROOOPS", props);

  return (
    <div >
      <div>
        <img src={imagen} alt="" width="150px" height="150px" />
      </div>
      <div >
        <h3>nombre: </h3>
        <p>{props.name}</p>
        <p>calificacion: </p>
        <p>{props.qualification}</p>
        <button >Unirme</button>
      </div>
        <p>Jugadores:</p>
        {props.players &&
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
          })}
    </div>
  );
}
