import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { filterCarrito } from "../../../redux/actions";

export default function Carrito() {
  const dispatch = useDispatch();
  const [state, setstate] = useState(null);
  const select = useSelector((state: any) => state.carrito.carrito);

  function deletePlayer(e: any) {
    dispatch(filterCarrito(e));
    alert("Jugador eliminado");
  }

  function handle(e: any) {
    e.preventDefault();
    alert("equis");
  }

  return (
    <div>
      {select.map((e: any) => {
        return (
          <div style={{ color: "white" }}>
            <button type="button" onClick={() => deletePlayer(e.id)}>
              x
            </button>
            {e.name}
          </div>
        );
      })}
    </div>
  );
}
