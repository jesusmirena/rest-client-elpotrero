import { POST_USERNAME, GET_CANCHAS } from "./actionsNames";
import axios, { AxiosResponse } from "axios";

export function postUsername(payload: User) {
  if (payload.gender === "") delete payload.gender;
  if (payload.image === "") delete payload.image;

  return {
    type: POST_USERNAME,
    payload,
  };
}

export async function getCanchas() {
  const data: Cancha[] = await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((data: AxiosResponse) => data.data);
  console.log(data);
  return {
    type: GET_CANCHAS,
    payload: data,
  };
}
