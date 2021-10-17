const initialState: any = {
  carrito: [],
};

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case "ADD_CARRITO":
      if (state.carrito.length > 3) return alert("Equipo lleno");
      return {
        ...state,
        carrito: [
          action.payload,
          ...state.carrito.filter((e: any) => e.id !== action.payload.id),
        ],
      };
    case "FILTER_CARRITO":
      return {
        ...state,
        carrito: state.carrito.filter((e: any) => e.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
