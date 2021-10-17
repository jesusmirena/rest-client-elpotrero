import { GET_TEAMS, GET_TEAMS_ID } from "../actionsNames";

const initialState: any = {
  teams: [],
  teamsId: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
      case GET_TEAMS_ID:
        return { 
          ...state,
          teamsId: action.payload,
        }
      
    default:
      return state;
  }
};

export default reducer;
