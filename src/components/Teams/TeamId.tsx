import { Button, dividerClasses, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import imagen from "../../visuales/edit.jpg";
import styles from "./TeamId.module.scss";
import { deleteTeam, putTeam } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useUser from "../../hooks/useUser";

function playersPosition(el: any) {
  if (el === "ATTACKER") return "ATACANTE";
  if (el === "MIDFIELDER") return "MEDIOCAMPISTA";
  if (el === "GOALKEEPER") return "ARQUERO";
  if (el === "DEFENDER") return "DEFENSOR";
}

export default function TeamId(props: any) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser]: any = useState([]);
  const [flag, setFlag] = useState(true);
  const id = window.sessionStorage.getItem("id");
  const token = window.sessionStorage.getItem("jwt") || "";

  const teamsId = async () => {
    const data = await axios.get("http://localhost:3001/team?id=" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    var res = await data.data;
    setUser(res);
  };

  function handlePlaying(e: any) {
    e.preventDefault();
    dispatch(putTeam(props.id, { available: true }));
    setFlag(!flag);
    history.push("/disponibles");
  }

  function handleNoPlaying(e: any) {
    e.preventDefault();
    dispatch(putTeam(props.id, { available: false }));
    setFlag(!flag);
  }
  useEffect(() => {
    teamsId();
  }, [flag]);

  /*   function handleOnClickDelete(id: any) {
    dispatch(deleteTeam(id));
    alert("Equipo eliminado");
    window.location.reload();
  } */

  function confirmDelete(id: any) {
    let respuesta = confirm("Estas seguro de queres eliminar el equipo?");

    if (respuesta == true) {
      dispatch(deleteTeam(id));
      window.location.reload();
    } else {
      return false;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={props.image} alt="" />
      </div>
      <div className={styles.info}>
        <h2>{props.name}</h2>
        <br />
        <div>
          <h3>Calificacion: </h3>
          <h3>{props.qualification}</h3>
          <br />  
          <h3>Votos: </h3>
          <h3>{props.votes}</h3>
        </div>
      </div>
      <br />
      <br />
      <button>Editar Equipo</button>
      <br />
      <Link to="/home">
        <button>Reservar Cancha </button>
      </Link>
      <br />
      <Link to="/jugadores">
        <button>Añadir participante</button>
      </Link>
      <br />
      {user[0]?.available ? (
        <>
          <button
            style={{
              backgroundColor: "#b62121",
              fontSize: "12px",
            }}
            onClick={handleNoPlaying}
          >
            EQUIPO COMPLETO
          </button>
        </>
      ) : (
        <>
          {/* <ListItemText onClick={handlePlaying} primary="Quiero jugar!" /> */}
          <button
            style={{
              backgroundColor: "#21b649",
              fontSize: "12px",
            }}
            onClick={handlePlaying}
          >
            INVITAR JUGADORES
          </button>
        </>
      )}
      <br />
      <button
        className={styles.btnEliminar}
        onClick={() => confirmDelete(props.id)}
      >
        Eliminar Equipo
      </button>
      <div className={styles.players}>
        <div>
          <h3>Jugadores:</h3>
          {props.players &&
            props.players.map((el: any) => {
              return (
                <div key={el.id} className={styles.player}>
                  {/* <img className={styles.imagePlayer} src={el.image} alt="" /> */}
                  <h3>Nombre: </h3>
                  <span>{el.name}</span>
                  {/* <h3>calificacion: </h3>
                <span>{el.qualification}</span> */}
                  <h3>Posicion</h3>
                  <span>{playersPosition(el.position)}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
