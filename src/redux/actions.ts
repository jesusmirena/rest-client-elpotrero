import { POST_USERNAME, GET_CANCHAS } from "./actionsNames";

export function postUsername(payload: User) {
  if (payload.gender === "") delete payload.gender;
  if (payload.image === "") delete payload.image;

  return {
    type: POST_USERNAME,
    payload,
  };
}

export function getCanchas(payload: Cancha) {
  return {
    type: GET_CANCHAS,
    payload,
  };
}
