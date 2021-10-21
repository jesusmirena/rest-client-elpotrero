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
    // eslint-disable-next-line no-restricted-globals
    let respuesta = confirm("Estas seguro de queres eliminar el equipo?");

    if (respuesta === true) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

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

      <Link to="/teamedit">
        <button className={styles.boton} onClick={handleEditTeam}>
          Editar Equipo
        </button>
      </Link>

      <Link to="/home">
        <button className={styles.boton}>Reservar Cancha </button>
      </Link>
      <Link to="/jugadores">
        <button className={styles.boton}>Añadir participante</button>
      </Link>
      {props.available ? (
        <>
          <button
            className={styles.boton}
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
            className={styles.boton}
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
        className={`${styles.boton} ${styles.btnEliminar}`}
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
