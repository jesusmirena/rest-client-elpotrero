import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./DetalleJugador.module.scss";

function DetalleJugador(props: { match: { params: { id: any } } }) {
  const token = window.sessionStorage.getItem("jwt") || "";
  const [jugador, setJugador]: any = useState([]);
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
  useEffect(() => {
    getJugador(id);
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
              <img
                src={
                  p.image ||
                  "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"
                }
                alt="Image not found"
              />
              <div className={styles.Content}>
                <h2 className={styles.Title}>Nombre: {p.name}</h2>
                <p className={styles.Genres}>Sexo:{p.gender} </p>
                <p className={styles.Rating}>Calificacion: {p.qualification}</p>
                <p className={styles.Genres}>Posicion: {p.position} </p>
                <p className={styles.Genres}>
                  Fecha de nacimiento: {p.birthday}
                </p>
              </div>
            </div>
          );
        })}
        <form>
          <input
            className={`${styles.boton} ${styles.botonInvitar}`}
            type="submit"
            name=""
            value="Invitar"
          />
          <input
            className={`${styles.boton} ${styles.botonCalificar}`}
            type="submit"
            value="Calificar"
          />
        </form>
      </div>
    </div>
  );
}

export default DetalleJugador;
