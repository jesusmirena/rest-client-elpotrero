const usuarioState: any = {
  user: {},
};

const reducer = (state: any = usuarioState, action: any): any => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "RESET":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default reducer;
