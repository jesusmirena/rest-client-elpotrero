import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";
import jugadores from "./jugadores";
import teams from "./teams";
import carrito from "./carrito";

export default combineReducers({
  users,
  canchas,
  usuario,
  reserva,
  jugadores,
  teams,
  carrito,
});
