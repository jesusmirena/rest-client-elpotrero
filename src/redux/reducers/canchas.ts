import { GET_CANCHAS, GET_CANCHAS_DISPONIBLE } from "../actionsNames";

const initialState: any = {
  canchas: [],
};

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_CANCHAS:
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
