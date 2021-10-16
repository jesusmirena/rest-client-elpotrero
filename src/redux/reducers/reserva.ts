import { GET_RESERVA } from "../actionsNames";

const initialState: any = {
  reserva: [],
};

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_RESERVA:
      return {
        ...state,
        reserva: action.payload,
      };
    case "RESET_RESERVA":
      return {
        reserva: [],
      };

    default:
      return state;
  }
};

export default reducer;
