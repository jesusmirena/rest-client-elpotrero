import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./DetalleJugador.module.scss";
import { putPlayerQualification } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { playersPosition } from "../Teams/Funciones/PlayersPosition";
import { genderName } from "../Teams/Funciones/Gender";

function DetalleJugador(props: { match: { params: { id: any } } }) {
  const dispatch = useDispatch();
  const token = window.sessionStorage.getItem("jwt") || "";
  const [jugador, setJugador]: any = useState([]);
  const [player, setPlayer] = useState({
    id: "",
    qualification: 0,
  });
  const { id } = props.match.params;

  const getJugador = async (id: string) => {
    const data = await axios.get("http://localhost:3001/player/byid/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    var res = await data.data;
    setJugador(res);
  };
  function handleChange(e: any, p: any) {
    setPlayer({
      id: p,
      qualification: parseInt(e.target.value),
    });
  }
  function handleSubmitQualification(e: any) {
    e.preventDefault();
    dispatch(putPlayerQualification(player));
    alert("Jugador calificado");
    setPlayer({
      id: "",
      qualification: 0,
    });
  }
  useEffect(() => {
    getJugador(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Link to="/jugadores">
        <input
          type="submit"
          className={`${styles.boton} ${styles.botonVolver}`}
          value="Volver"
        />
      </Link>
      <h1 className={styles.titulo}>Detalles del jugador</h1>
      <div className={styles.container}>
        {jugador.map((p: any) => {
          return (
            <div
              key={p.id}
              className={`${styles.cardItem} ${styles.CardItemUniqueEffect}`}
            >
              <div>
                <img
                  src={
                    p.image ||
                    "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"
                  }
                  alt="Image not found"
                />
                <div className={styles.Content}>
                  <h2 className={styles.Title}>Nombre: {p.name}</h2>
                  <p className={styles.Genres}>
                    Fecha de nacimiento: {p.birthday}
                  </p>
                  <p className={styles.Genres}>Sexo:{genderName(p.gender)} </p>
                  <p className={styles.Rating}>Calificacion: {p.punctuation}</p>
                  <p className={styles.Genres}>
                    Posicion: {playersPosition(p.position)}{" "}
                  </p>
                  <p className={styles.Genres}>
                    Disponibilidad:{" "}
                    {p.available ? "Disponible" : "No Disponible"}
                  </p>
                </div>
              </div>

              <form>
                <input
                  name="qualification"
                  onChange={(e) => handleChange(e, p.id)}
                  placeholder="calificacion"
                  type="number"
                  min="0"
                  max="5"
                />
                <input
                  name="jugador"
                  onClick={(e) => handleSubmitQualification(e)}
                  className={`${styles.boton} ${styles.botonCalificar}`}
                  type="submit"
                  value="Calificar"
                />
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetalleJugador;
