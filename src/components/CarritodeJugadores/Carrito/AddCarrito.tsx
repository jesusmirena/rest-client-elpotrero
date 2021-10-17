import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarrito } from "../../../redux/actions";
import Carrito from "./Carrito";

export default function AddCarrito({ players }: any) {
  const { image, id, name } = players;
  const dispatch = useDispatch();
  // const array = useSelector((state: any) => state.carrito.carrito);
  const [jugador, setJugador] = useState({
    name: "",
    id: "",
    image: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    // if (array.length > 5) return alert("tenes la cola llena");

    setJugador({
      ...jugador,
      name,
      id,
      image,
    });
  }

  if (jugador.name !== "") dispatch(addCarrito(jugador));

  return (
    <div>
      <button
        type="button"
        onClick={handleSubmit}
        style={{ color: "black", borderRadius: "5px" }}
      >
        INVITAR
      </button>
    </div>
  );
}
