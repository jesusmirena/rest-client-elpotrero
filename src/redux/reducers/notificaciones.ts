import { GET_NOTIFICACIONES } from "../actionsNames";

const initialState: any = {
  notificaciones: [],
};

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_NOTIFICACIONES:
      return {
        ...state,
        notificaciones: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;