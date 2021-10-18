import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSoloDisponibles } from "../../redux/actions";
import AddCarritoDisponible from "../CarritodeJugadores/Carrito/AddCarritoDisponible";
import styles from "./Players.module.scss";
import SearchBar from "./SearchBar";

export default function PlayersAvailable() {
  const jugadores = useSelector((state: any) => state.jugadores.jugadores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSoloDisponibles());
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Todos los jugadores disponibles</h1>

      <table className={styles.jugadores}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Disponibilidad</th>
            <th>Sexo</th>
            <th>Posicion</th>
            <th>Calificacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((p: any) => {
            return (
              <tr key={p.id}>
                <td>
                  <Link to={`/jugador/${p.id}`}>
                    <img className={styles.imagenTabla} src={p.image} alt="" />
                  </Link>
                </td>
                <td>
                  <Link to={`/jugador/${p.id}`}>{p.name}</Link>
                </td>
                <td>{p.available ? "Disponible" : "No Disponible"}</td>
                <td>{p.gender}</td>
                <td>{p.position}</td>
                <td>{p.punctuation} / 5</td>
                <td>
                  <form>
                    {p.available ? (
                      /*    <input
                      className={`${styles.boton} ${styles.botonInvitar}`}
                      type="submit"
                      name=""
                      value="Invitar"
                    /> */
                      /*                       <AddCarrito players={p} />
                            
*/
                      <AddCarritoDisponible players={p} />
                    ) : (
                      <></>
                    )}

                    <input
                      className={`${styles.boton} ${styles.botonCalificar}`}
                      type="submit"
                      value="Calificar"
                    />
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
