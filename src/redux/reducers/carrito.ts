const initialState: any = {
  carrito: [],
  carritoDisponible: [],
};

const reducer = (state = initialState, action: any): any => {
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
    /*   case "FILTER_CARRITO":
      console.log("LLEGUE", action.payload);
      return {
        ...state,
        carrito: state.carrito.filter((e: any) => e.id !== action.payload),
      };
 */
    default:
      return state;
  }
};

export default reducer;
