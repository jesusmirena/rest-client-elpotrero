import { combineReducers } from "redux";
import users from "./users"; //Nombre de los reducers
import canchas from "./canchas";

export default combineReducers({
  users,
  canchas, //Lista de reducers
});
