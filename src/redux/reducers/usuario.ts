const initialState: any = {
  user: {},
};

const reducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
