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
    default:
      return state;
  }
};

export default reducer;
