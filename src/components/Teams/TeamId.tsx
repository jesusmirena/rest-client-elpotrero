import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TeamId.module.scss";
import {
  deleteTeam,
  filterTeam,
  getTeamsId,
  putTeam,
} from "../../redux/actions";
import { useDispatch } from "react-redux";

function playersPosition(el: any) {
  if (el === "ATTACKER") return "ATACANTE";
  if (el === "MIDFIELDER") return "MEDIOCAMPISTA";
  if (el === "GOALKEEPER") return "ARQUERO";
  if (el === "DEFENDER") return "DEFENSOR";
}

export default function TeamId(props: any) {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const id = window.sessionStorage.getItem("id");

  function handlePlaying(e: any) {
    e.preventDefault();
    dispatch(putTeam(props.id, { available: true }));
    setFlag(!flag);
  }

  function handleNoPlaying(e: any) {
    e.preventDefault();
    dispatch(putTeam(props.id, { available: false }));
    setFlag(!flag);
  }

  function confirmDelete(id: any) {
    let respuesta = confirm("Estas seguro de queres eliminar el equipo?");

    if (respuesta == true) {
      dispatch(deleteTeam(id));
      window.location.reload();
    } else {
      return false;
    }
  }
  function handleEditTeam() {
    dispatch(filterTeam(props.id));
  }

  useEffect(() => {
    dispatch(getTeamsId(id));
  }, [flag]);

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={props.image} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{props.name}</h3>
        <p>Calificacion: </p>
        <p>{props.qualification}</p>
        <p>Votos: </p>
        <p>{props.votes}</p>
      </div>
      <Link to="/teamedit">
        <button onClick={handleEditTeam}>Editar Equipo</button>
      </Link>
      <Link to="/home">
        <button>Reservar Cancha </button>
      </Link>
      <Link to="/jugadores">
        <button>Añadir participante</button>
      </Link>
      {props.available ? (
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
                  <h3>nombre: </h3>
                  <span>{el.name}</span>

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
