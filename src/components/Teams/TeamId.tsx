import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import imagen from "../../visuales/edit.jpg";
import styles from "./TeamId.module.scss";
import {deleteTeam} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useUser from "../../hooks/useUser";

export default function TeamId(props: any) {
  const dispatch = useDispatch();

  
  

  function handleOnClickDelete(id: any){
    dispatch(deleteTeam(id))
    alert("Equipo eliminado")
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={imagen} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <p>Calificacion: </p>
        <p>{props.qualification}</p>
      </div>
      <button >Editar Equipo</button>
      <Link to="/homedos">
        <button>Reservar Cancha </button>
      </Link>
      <Link to="/jugadores">
        <button>Invitar jugadores</button>
      </Link>
      <button onClick={()=> handleOnClickDelete(props.id)}>Eliminar Equipo</button>
        
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
