import { combineReducers } from "redux";
import users from "./user"; //Nombre de los reducers
import canchas from "./canchas";
import usuario from "./usuario";

export default combineReducers({
  users,
  canchas,
  usuario, //Lista de reducers
});
