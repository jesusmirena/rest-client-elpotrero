import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCarrito, addCarritoDisponible } from "../../../redux/actions";

export default function AddCarritoDisponible({ players }: any) {
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

  if (jugador.name !== "") dispatch(addCarritoDisponible(jugador));

  return (
    <div>
      <button
        type="button"
        onClick={handleSubmit}
        style={{ color: "black", borderRadius: "5px" }}
      >
        Seleccionar
      </button>
    </div>
  );
}
