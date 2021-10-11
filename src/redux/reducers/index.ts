import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";

export default combineReducers({
  users,
  canchas,
  usuario,
  reserva, //Lista de reducers
});
