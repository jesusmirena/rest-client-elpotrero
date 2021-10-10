import { GET_CANCHAS } from "./actionsNames";
import axios, { AxiosResponse } from "axios";

export async function postUsername(payload: User) {
  // if (payload.gender === "") delete payload.gender;
  // if (payload.image === "") delete payload.image;
  const response = await axios.post("http://localhost:3001/user", payload);
  console.log("desde el response", response);
}

// export async function postLogin(payload: any) {
//   const response = await axios.post("http://localhost:3001/login", payload);
//   console.log("desde el Login", response);
// }
export function postLogin({ mail, password }: any) {
  return fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
export async function getCanchas() {
  const data: Cancha[] = await axios
    .get("http://localhost:3001/fields")
    .then((data: AxiosResponse) => data.data);
  console.log("get de canchas", data);
  return {
    type: GET_CANCHAS,
    payload: data,
  };
}
