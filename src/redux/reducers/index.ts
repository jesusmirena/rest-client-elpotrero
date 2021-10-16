import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";
import jugadores from "./jugadores";
export default combineReducers({
  users,
  canchas,
  usuario,
  reserva,
  jugadores, //Lista de reducers
});
