import { GET_CANCHAS, GET_CANCHAS_DISPONIBLE } from "../actionsNames";

const initialState: Canchastate = {
  canchas: [],
};

const reducer = (state = initialState, action: Actioncancha): Canchastate => {
  switch (action.type) {
    case GET_CANCHAS:
      console.log("reducer", action.payload);
      return {
        ...state,
        canchas: action.payload,
      };
    case GET_CANCHAS_DISPONIBLE:
      return {
        ...state,
        canchas: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
