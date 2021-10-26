import { combineReducers } from "redux";
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";
import teams from "./teams";
import jugadores from "./jugadores";
import carrito from "./carrito";
import notificaciones from "./notificaciones";

export default combineReducers({
  canchas,
  usuario,
  teams,
  reserva, //Lista de reducers
  jugadores,
  carrito,
  notificaciones,
});
