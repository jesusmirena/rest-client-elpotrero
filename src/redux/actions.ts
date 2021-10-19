import {
  POST_USERNAME,
  GET_CANCHAS,
  GET_RESERVA,
  DELETE_RESERVA,
  GET_TEAMS,
  GET_TEAMS_ID,
  GET_PLAYERS,
} from "./actionsNames";

// import axios from '../lib/axiosConfig'

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
export async function putLoginGoogle(user: any) {
  try {
    const response = await axios.put(
      "http://localhost:3001/auth/googleFormLogin",
      user
    );
    const userGoogle = response.data;
    return {
      type: "PUT_LOGIN",
      payload: userGoogle,
    };
  } catch (error) {
    console.log("ERROR DEL PUTLOGINGOOGLE", error);
  }
}
export async function postLoginGoogle(user: any) {
  try {
    const response = await axios.post(
      "http://localhost:3001/auth//googleLogin",
      user
    );
    const userGoogle = response.data;
    return {
      type: "POST_LOGIN",
      payload: userGoogle,
    };
  } catch (error) {
    console.log("ERROR DEL PUTLOGINGOOGLE", error);
  }
}

export function getUser(id: any) {
  return async function (dispatch: any) {
    let res = await axios.get("http://localhost:3001/user?id=" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: "POST_LOGIN", payload: res.data });
  };
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

export function deleteUser(id: any) {
  return async function () {
    try {
      const res = await axios.delete(`http://localhost:3001/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Usuario eliminado");
      return res;
    } catch (err) {
      alert("Vuelve a intentar");
      console.log(err);
    }
  };
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

export function postTeam(payload: any) {
  return async function () {
    const res = await axios.post("http://localhost:3001/team", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  };
}

export function putUser(id: any, payload: any) {
  return async function () {
    try {
      const res = await axios.put(`http://localhost:3001/user/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Cambios realizados satisfactoriamente");
      return res;
    } catch (err) {
      alert("Vuelve a intentar por favor");
      console.log("put", err);
    }
  };
}

export function putTeam(id: any, payload: any) {
  return async function () {
    try {
      const res = await axios.put(
        `http://localhost:3001/team/team/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return alert("Enviado");
    } catch (err) {
      console.log("Error equipo", err);
      alert("Algo salio mal");
    }
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

export function getTeams() {
  return async function (dispatch: any) {
    let res = await axios.get("http://localhost:3001/team/available", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: GET_TEAMS, payload: res.data });
  };
}

export function getTeamsId(id: any) {
  return async function (dispatch: any) {
    let res = await axios.get("http://localhost:3001/team?id=" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return dispatch({ type: GET_TEAMS_ID, payload: res.data });
  };
}

export function getPlayers() {
  return async function (dispatch: any) {
    const token = window.sessionStorage.getItem("jwt") || "";
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
export function orderByName(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(`http://localhost:3001/player?order=${orden}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: "GET_ORDER_BY_NAME", payload: res.data });
  };
}
export function getPlayersDisponibles(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      `http://localhost:3001/player/available?order=${orden}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return dispatch({ type: "GET_PLAYERS_DISPONIBLES", payload: res.data });
  };
}
export function getSoloDisponibles() {
  return async function (dispatch: any) {
    let res = await axios.get(`http://localhost:3001/player/available`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: "GET_SOLO_DISPONIBLES", payload: res.data });
  };
}
export function getOrderGender(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(`http://localhost:3001/player/${orden}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: "GET_PLAYERS_GENDER", payload: res.data });
  };
}
export function getOrderPunctuation(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      `http://localhost:3001/player/punctuation/${orden}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return dispatch({ type: "GET_PLAYERS_PUNCTUATION", payload: res.data });
  };
}
export function getOrderPosition(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(
      `http://localhost:3001/player/position/${orden}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return dispatch({ type: "GET_PLAYERS_POSITION", payload: res.data });
  };
}
export function searchByName(orden: any) {
  return async function (dispatch: any) {
    let res = await axios.get(`http://localhost:3001/player/byname/${orden}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({ type: "SEARCH_PLAYER", payload: res.data });
  };
}

// export function getTeams(id: any) {
//   return async function (dispatch: any) {
//     let res = await axios.get("http://localhost:3001/team?id=" + id);

//     return dispatch({ type: GET_TEAMS, payload: res.data });
//   };
// }

export function addCarrito(payload: any) {
  return async function (dispatch: any) {
    return dispatch({ type: "ADD_CARRITO", payload });
  };
}

export function addCarritoDisponible(payload: any) {
  return async function (dispatch: any) {
    return dispatch({ type: "ADD_CARRITO_DISPONIBLE", payload });
  };
}

export function filterCarritoDisponible(payload: any) {
  return async function (dispatch: any) {
    return dispatch({ type: "FILTER_CARRITO_DISPONIBLE", payload });
  };
}
export function filterCarrito(payload: any) {
  return async function (dispatch: any) {
    return dispatch({ type: "FILTER_CARRITO", payload });
  };
}

export function putEditTeam(id: any, payload: any) {
  return async function () {
    console.log(payload);
    try {
      const res = await axios.put(
        `http://localhost:3001/team/team/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res;
    } catch (err) {
      console.log("put", err);
    }
  };
}

export function deleteTeam(id: any) {
  return async function () {
    const res = await axios.delete(`http://localhost:3001/team/team/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  };
}
export function filterTeam(payload: any) {
  return {
    type: "FILTER_TEAM",
    payload,
  };
}
