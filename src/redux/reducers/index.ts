import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";
import reserva from "./reserva";
import jugadores from "./jugadores";
import teams from "./teams";


export default combineReducers({
  users,
  canchas,
  usuario,
  reserva,
  jugadores, 
  teams,
  reserva, 
});
