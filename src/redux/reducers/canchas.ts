import { GET_CANCHAS } from "../actionsNames";

const initialState: Canchastate = {
  canchas: [],
};

const reducer = (
  state: Canchastate = initialState,
  action: Actioncancha
): Canchastate => {
  switch (action.type) {
    case GET_CANCHAS:
      return {
        ...state,
        canchas: [action.payload, ...state.canchas],
      };

    default:
      return state;
  }
};

export default reducer;
