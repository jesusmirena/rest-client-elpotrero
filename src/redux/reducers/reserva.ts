import { GET_RESERVA, GET_ALL_RESERVA } from "../actionsNames";

const initialState: any = {
  reserva: [],
  allReserva: [],
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
      case GET_ALL_RESERVA:
       return {
         allReserva: action.payload,
       }
    default:
      return state;
  }
};

export default reducer;
