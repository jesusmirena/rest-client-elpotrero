import { GET_CANCHAS } from "./actionsNames";
import axios, { AxiosResponse } from "axios";

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
