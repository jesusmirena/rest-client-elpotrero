import { GET_TEAMS } from "../actionsNames";

const initialState: any = {
  teams: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
      
    default:
      return state;
  }
};

export default reducer;
