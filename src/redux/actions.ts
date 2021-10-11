import { POST_USERNAME, GET_CANCHAS } from "./actionsNames";
import axios from "axios";


export async function postUsername(payload: User) {
  const response = await axios.post("http://localhost:3001/user", payload);
  console.log("desde el response", response);
}

export async function postLogin({ mail, password }: any) {
  const response = await axios.post("http://localhost:3001/auth/login", {
    mail,
    password,
  });
  const user = response.data;
  return {
    type: "POST_LOGIN",
    payload: user,
  };
}
export function getCanchasDisponible(payload: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      "http://localhost:3001/fields/available/" + payload
    );
    return dispatch({ type: GET_CANCHAS, payload: res.data });
  };
}

export function postReserva(payload: any) {
  return async function () {
    const res = await axios.post("http://localhost:3001/timetable", payload);
    console.log(res);
    return res;
  };
}
