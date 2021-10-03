import { POST_USERNAME } from "../actionsNames";

const initialState: Userstate = {
  users: [],
};

const reducer = (
  state: Userstate = initialState,
  action: Action
): Userstate => {
  switch (action.type) {
    case POST_USERNAME:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };

    default:
      return state;
  }
};

export default reducer;
