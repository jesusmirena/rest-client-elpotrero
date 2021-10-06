import { POST_USERNAME, GET_CANCHAS } from "./actionsNames";
import axios from "axios";

export function postUsername(payload: User) {
  if (payload.gender === "") delete payload.gender;
  if (payload.image === "") delete payload.image;

  return {
    type: POST_USERNAME,
    payload,
  };
}

export function getCanchas() {
  return async function (dispatch: any) {
    let info = await axios.get("http://localhost:3001/fields");
    console.log("acrtion", info.data);
    return dispatch({ type: "GET_CANCHAS", payload: info.data });
  };
}
