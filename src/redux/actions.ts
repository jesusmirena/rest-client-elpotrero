import { POST_USERNAME, GET_CANCHAS, GET_RESERVA, DELETE_RESERVA } from "./actionsNames";
// import axios from '../lib/axiosConfig'
import axios from 'axios'

export async function postUsername(payload: User) {
  const response = await axios.post("http://localhost:3001/user", payload);
  console.log("desde el response", response);
}

export async function postLogin({ mail, password }: any) {
  console.log("ANTEESSSS ESTAMOS EN EL POST LOGIN")
  try{
    const response = await axios.post("http://localhost:3001/auth/login", {
      mail,
      password,
    });
    const user = response.data;
    console.log("ESTAMOS EN EL POST LOGIN")
    console.log(user, "ESTAMOS EN EL POST LOGIN")
    return {
      type: "POST_LOGIN",
      payload: user,
    };

  }catch(error){
    console.log("ERROR DEL POSTLOGIN",error)
  }
}

export function getCanchasDisponible(payload: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      "http://localhost:3001/fields/available/" + payload,
      );
    return dispatch({ type: GET_CANCHAS, payload: res.data });
  };
}

export function resetUser() {
  return { type: "RESET" };
}

export function postReserva(payload: any) {
  return async function () {
    const res = await axios.post("http://localhost:3001/timetable", payload);
    console.log("RESERVA",res);
    return res;
  };
}

export function getReserva(id:any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      `http://localhost:3001/timetable/${id}`);
    console.log("GET DE RESERVA", res.data)
    return dispatch({ type: GET_RESERVA, payload: res.data });
  };
}

export function deleteReserva(id:any) {
  return async function (dispatch: any) {
    let res = await axios.delete(
      `http://localhost:3001/timetable/${id}`);
    return dispatch({ type: DELETE_RESERVA});
  };
}

// export function postMercadoPago(payload: any) {
//   return async function () {
//     const res = await axios.post("http://localhost:3001/checkout", payload);
//     console.log("MERCADO",res);
//     return res;
//   };
// }
