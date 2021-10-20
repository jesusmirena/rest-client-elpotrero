import { GET_TEAMS, GET_TEAMS_ID, GET_TEAMS_ALLTEAMS } from "../actionsNames";

const initialState: any = {
  teams: [],
  teamsId: [],
  allTeams: [],
  teamDisponible: [],
  teamDetail: [],
  teamsAllTeams: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_TEAM_DETAIL_ID":
      return {
        ...state,
        teamDetail: action.payload,
      };
    case "RESET_TEAM":
      return {
        ...state,
        teamDetail: [],
      };
    case GET_TEAMS_ID:
      return {
        ...state,
        teamsId: action.payload,
        allTeams: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };

    case "FILTER_TEAM":
      const filter =
        action.payload === "todos"
          ? state.allTeams
          : state.allTeams.filter((e: any) => e.id == action.payload);
      return {
        ...state,
        teamsId: filter,
      };
      case GET_TEAMS_ALLTEAMS:
        return {
          ...state,
          teamsAllTeams: action.payload,
        }

    default:
      return state;
  }
};

export default reducer;
