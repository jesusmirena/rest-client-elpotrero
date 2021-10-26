import { GET_PLAYERS } from "../actionsNames";
const jugadoresState: any = {
  jugadores: [],
  jugadoresDisponibles: [],
};

const reducer = (state: any = jugadoresState, action: any): any => {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        jugadores: action.payload,
      };
    case "SEARCH_PLAYER_AVAILABLE":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };
    case "GET_SOLO_DISPONIBLES":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };

    case "GET_ORDER_BY_NAME_DISPONIBLE":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };
    case "GET_PLAYERS_PUNCTUATION_DISPONIBLE":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };
    case "GET_PLAYERS_GENDER_AVAILABLE":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };
    case "GET_PLAYERS_POSITION_AVAILABLE":
      return {
        ...state,
        jugadoresDisponibles: action.payload,
      };

    case "GET_ORDER_BY_NAME":
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
