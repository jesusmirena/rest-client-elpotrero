import { GET_NOTIFICACIONES, GET_NOTIFICACIONES_MY_TEAM } from "../actionsNames";

const initialState: any = {
  notificaciones: [],
  notificacionesMisEquipos: []
};

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_NOTIFICACIONES:
      return {
        ...state,
        notificaciones: action.payload,
      };
    case GET_NOTIFICACIONES_MY_TEAM:{
      return {
        ...state,
        notificacionesMisEquipos: action.payload
      }
    }

    default:
      return state;
  }
};

export default reducer;