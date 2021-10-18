import { GET_TEAMS, GET_TEAMS_ID } from "../actionsNames";

const initialState: any = {
  teams: [],
<<<<<<< HEAD
  teamsId: [],
=======
  allTeams: [],
>>>>>>> jesus
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
        allTeams: action.payload,
      };
<<<<<<< HEAD
      case GET_TEAMS_ID:
        return { 
          ...state,
          teamsId: action.payload,
        }
      
=======

    case "FILTER_TEAM":
      const filter =
        action.payload === "todos"
          ? state.allTeams
          : state.allTeams.filter((e: any) => e.id == action.payload);
      return {
        ...state,
        teams: filter,
      };

>>>>>>> jesus
    default:
      return state;
  }
};

export default reducer;
