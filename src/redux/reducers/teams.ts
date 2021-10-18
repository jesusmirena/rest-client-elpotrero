import { GET_TEAMS } from "../actionsNames";

const initialState: any = {
  teams: [],
  allTeams: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
        allTeams: action.payload,
      };

    case "FILTER_TEAM":
      const filter =
        action.payload === "todos"
          ? state.allTeams
          : state.allTeams.filter((e: any) => e.id == action.payload);
      return {
        ...state,
        teams: filter,
      };

    default:
      return state;
  }
};

export default reducer;
