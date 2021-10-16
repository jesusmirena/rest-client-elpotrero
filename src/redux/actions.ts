import {
  GET_PLAYERS,
  GET_CANCHAS,
  GET_RESERVA,
  DELETE_RESERVA,
} from "./actionsNames";
import axios from "axios";

const token = window.sessionStorage.getItem("jwt") || "";

export async function postUsername(payload: User) {
  const response = await axios.post("http://localhost:3001/user", payload);
}

export async function postLogin({ mail, password }: any) {
  try {
    const response = await axios.post("http://localhost:3001/auth/local", {
      mail,
      password,
    });
    const user = response.data;
    return {
      type: "POST_LOGIN",
      payload: user,
    };
  } catch (error) {
    console.log("ERROR DEL POSTLOGIN", error);
  }
}
export async function postLoginGoogle() {
  try {
    const response = await axios.get("http://localhost:3001/auth/google");
    console.log("desde el post Google", response);

    return alert("conectado correctamente");
  } catch (error) {
    console.log("ERROR DEL POSTLOGINGOOGLE", error);
  }
}

export function getCanchasDisponible(payload: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      "http://localhost:3001/fields/available/" + payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return dispatch({ type: GET_CANCHAS, payload: res.data });
  };
}

export function resetUser() {
  return { type: "RESET" };
}

export function postReserva(payload: any) {
  return async function () {
    const res = await axios.post("http://localhost:3001/timetable", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  };
}

export function resetReserva() {
  return async function (dispatch: any) {
    return dispatch({ type: "RESET_RESERVA" });
  };
}

export function getReserva(id: any) {
  return async function (dispatch: any) {
    let res = await axios.get(`http://localhost:3001/timetable/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: GET_RESERVA, payload: res.data });
  };
}

export function deleteReserva(id: any) {
  return async function (dispatch: any) {
    let res = await axios.delete(`http://localhost:3001/timetable/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: DELETE_RESERVA });
  };
}
export function getPlayers() {
  return async function (dispatch: any) {
    let res = await axios.get("http://localhost:3001/player", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: GET_PLAYERS, payload: res.data });
  };
}
// export function postMercadoPago(payload: any) {
//   return async function () {
//     const res = await axios.post("http://localhost:3001/checkout", payload);
//     console.log("MERCADO",res);
//     return res;
//   };
// }
