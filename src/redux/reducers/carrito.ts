const carritoState: any = {
  carrito: [],
  carritoDisponible: [],
  horario: [],
  fecha: [],
};

const reducer = (state = carritoState, action: any): any => {
  switch (action.type) {
    case "ADD_CARRITO":
      return {
        ...state,
        carrito: [
          action.payload,
          ...state.carrito.filter((e: any) => e.id !== action.payload.id),
        ],
      };
    case "ADD_CARRITO_DISPONIBLE":
      if (state.carritoDisponible.length > 3) return alert("Equipo lleno");
      return {
        ...state,
        carritoDisponible: [
          action.payload,
          ...state.carritoDisponible.filter(
            (e: any) => e.id !== action.payload.id
          ),
        ],
      };

    case "FILTER_CARRITO":
      return {
        ...state,
        carritoDisponible: state.carritoDisponible.filter(
          (e: any) => e.id !== action.payload
        ),
        carrito: state.carrito.filter((e: any) => e.id !== action.payload),
      };

    case "SELECT_DAY":
      return {
        ...state,
        fecha: action.payload,
      };
    case "SELECT_HOUR":
      return {
        ...state,
        horario: action.payload,
      };
    case "RESET_CARRITO":
      return {
        ...state,
        carrito: [],
        carritoDisponible: [],
      };
    default:
      return state;
  }
};

export default reducer;
