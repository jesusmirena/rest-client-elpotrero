import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";
import teams from "./teams";
import jugadores from "./jugadores";
import carrito from "./carrito";

export default combineReducers({
  users,
  canchas,
  usuario,
  teams,
  reserva, //Lista de reducers
  jugadores,
  carrito,
});
