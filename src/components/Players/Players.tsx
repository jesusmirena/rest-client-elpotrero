import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Players.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTeam,
  getOrderGender,
  getOrderPosition,
  getOrderPunctuation,
  getPlayers,
  getPlayersDisponibles,
  getTeamsId,
  orderByName,
} from "../../redux/actions";
import SearchBar from "./SearchBar";
import AddCarrito from "../CarritodeJugadores/Carrito/AddCarrito";
import Carrito from "../CarritodeJugadores/Carrito/Carrito";
function Players() {
  const jugadores = useSelector((state: any) => state.jugadores.jugadores);
  const equipos = useSelector((state: any) => state.teams.teams);
  const id = sessionStorage.getItem("id");

  const [equipo, setEquipo] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayers());
    dispatch(getTeamsId(id));
  }, [dispatch]);

  function handleOrderByName(orden: any) {
    dispatch(orderByName(orden));
  }
  function handleOrderByAvailability(orden: any) {
    dispatch(getPlayersDisponibles(orden));
  }
  function handleOrderByGender(orden: any) {
    dispatch(getOrderGender(orden));
  }
  function handleOrderByPunctuation(orden: any) {
    dispatch(getOrderPunctuation(orden));
  }
  function handleOrderByPosition(orden: any) {
    dispatch(getOrderPosition(orden));
  }
  return (
    <div>
      <h1 className={styles.title}>Jugadores</h1>
      <SearchBar />

      <Carrito />

      <table className={styles.jugadores}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>
              Nombre
              <select onChange={(e) => handleOrderByName(e.target.value)}>
                <option defaultValue="---Seleccionar---">
                  ---Seleccionar---
                </option>
                <option value="ascendent">ascendente</option>
                <option value="descendent">descendente</option>
              </select>
            </th>
            <th>
              Disponibilidad
              <select
                onChange={(e) => handleOrderByAvailability(e.target.value)}
              >
                <option>---Seleccionar---</option>
                <option value="">Solo Disponibles</option>
                <option value="ascendent">ascendente</option>
                <option value="descendent">descendente</option>
              </select>
            </th>
            <th>
              Sexo
              <select onChange={(e) => handleOrderByGender(e.target.value)}>
                <option value="">---Seleccionar---</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="undefined">otro</option>
              </select>
            </th>
            <th>
              Posicion
              <select onChange={(e) => handleOrderByPosition(e.target.value)}>
                <option value="">---Seleccionar---</option>
                <option value="goalkeeper">Portero</option>
                <option value="defender">Defensa</option>
                <option value="midfielder">Centrocampista</option>
                <option value="attacker">Delantero</option>
              </select>
            </th>
            <th>
              Calificacion
              <select
                onChange={(e) => handleOrderByPunctuation(e.target.value)}
              >
                <option value="">---Seleccionar---</option>
                <option value="ascendent">Ascendente</option>
                <option value="descendent">Descendente</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </th>
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
                      <AddCarrito players={p} />
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

export default Players;
