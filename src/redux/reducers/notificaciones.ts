import { GET_NOTIFICACIONES, GET_NOTIFICACIONES_MY_TEAM, GET_NOTICACIONES_EQUIPO, GET_RESPUESTA_EQUIPO } from "../actionsNames";

const initialState: any = {
  notificaciones: [],
  notificacionesMisEquipos: [],
  notificacionesJugadorUnir:[],
  notificacionesRespuestaJugadorUnir:[]
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
    };
    case GET_NOTICACIONES_EQUIPO:{
      return {
        ...state,
        notificacionesJugadorUnir: action.payload
      }
    }
    case GET_RESPUESTA_EQUIPO:{
      return {
        ...state,
        notificacionesRespuestaJugadorUnir: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;