import { ADD_TODO, DELETE_TODO } from "../actionsNames";

const initialState: TodoState = {
  todos: []
}

const reducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case DELETE_TODO:
      const id = action.payload.id;
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== id)
      }
      default:
      return state
  }
}

export default reducer;
