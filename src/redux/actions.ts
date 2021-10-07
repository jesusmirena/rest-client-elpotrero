import { POST_USERNAME, GET_CANCHAS } from "./actionsNames";
import axios, { AxiosResponse } from "axios";

export async function postUsername(payload: User) {
  // if (payload.gender === "") delete payload.gender;
  // if (payload.image === "") delete payload.image;
  const response = await axios.post("http://localhost:3001/user", payload);
  console.log("desde el response", response);
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
