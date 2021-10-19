import { GET_TEAMS, GET_TEAMS_ID } from "../actionsNames";

const initialState: any = {
  teams: [],
  teamsId: [],
  allTeams: [],
  teamDisponible: [],
  teamDetail: [],
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

    default:
      return state;
  }
};

export default reducer;
