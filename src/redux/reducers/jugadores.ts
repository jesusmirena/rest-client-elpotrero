import { GET_PLAYERS } from "../actionsNames";
const initialState: any = {
  jugadores: [],
};

const reducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        jugadores: action.payload,
      };
    case "GET_ORDER_BY_NAME":
      return {
        ...state,
        jugadores: action.payload,
      };
    case "GET_SOLO_DISPONIBLES":
      return {
        ...state,
        jugadores: action.payload,
      };

    case "GET_PLAYERS_DISPONIBLES":
      return {
        ...state,
        jugadores: action.payload,
      };
    case "GET_PLAYERS_GENDER":
      return {
        ...state,
        jugadores: action.payload,
      };
    case "GET_PLAYERS_PUNCTUATION":
      return {
        ...state,
        jugadores: action.payload,
      };
    case "GET_PLAYERS_POSITION":
      return {
        ...state,
        jugadores: action.payload,
      };
    case "SEARCH_PLAYER":
      return {
        ...state,
        jugadores: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
