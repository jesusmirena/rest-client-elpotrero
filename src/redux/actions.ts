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

/* export function getCanchas() {
  return async function (dispatch: any) {
    const data: Cancha[] = await (
      await axios.get("http://localhost:3001/fields")
    ).data;

    //.then((data: AxiosResponse) => data.data);
    console.log("actions", data);
    return dispatch({
      type: GET_CANCHAS,
      payload: data,
    });
  };
} */

export async function getCanchas() {
  console.log("actionprueba");
  try {
    const dato = await fetch("http://localhost:3001/fields", {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    });
    const result = await dato.json();

    // const data = await axios.get("http://localhost:3001/fields");

    console.log("actions", result);
    /*   return {
      type: GET_CANCHAS,
      payload: result,
    }; */
  } catch (e) {
    console.log(e);
  }
}
