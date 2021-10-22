import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getOrderGenderAvailable,
  getOrderPositionAvailable,
  getOrderPunctuationAvailable,
  getSoloDisponibles,
  getTeamsId,
  orderByNameAvailable,
  putPlayerQualification,
} from "../../redux/actions";
import AddCarritoDisponible from "../CarritodeJugadores/Carrito/AddCarritoDisponible";
import Carrito from "../CarritodeJugadores/Carrito/Carrito";
import CarritoDisponible from "../CarritodeJugadores/Carrito/CarritoDisponible";
import styles from "./Players.module.scss";
import SearchBarAvailable from "./SearchbarAvailable";
import { playersPosition } from "../Teams/Funciones/PlayersPosition";
export default function PlayersAvailable() {
  const id = sessionStorage.getItem("id");

  const jugadores = useSelector(
    (state: any) => state.jugadores.jugadoresDisponibles
  );

  const [player, setPlayer] = useState({
    id: "",
    qualification: 0,
  });
  const dispatch = useDispatch();

  function handleOrderByName(orden: any) {
    dispatch(orderByNameAvailable(orden));
  }
  function handleOrderByGender(orden: any) {
    dispatch(getOrderGenderAvailable(orden));
  }
  function handleOrderByPosition(orden: any) {
    dispatch(getOrderPositionAvailable(orden));
  }
  function handleOrderByPunctuation(orden: any) {
    dispatch(getOrderPunctuationAvailable(orden));
  }

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
    dispatch(getTeamsId(id));

    dispatch(getSoloDisponibles());
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Todos los jugadores disponibles</h1>
      <SearchBarAvailable />
      <CarritoDisponible />

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
            <th>Disponibilidad</th>
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
                <td>{playersPosition(p.position)}</td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
