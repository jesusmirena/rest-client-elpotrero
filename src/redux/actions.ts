import { ADD_TODO, DELETE_TODO } from "./actionsNames";
let id: number = 1;
export function addTodo(payload: Todo) {
  if (payload.desc === "") delete payload.desc;
  payload.id = id++;
  return {
    type: ADD_TODO,
    payload,
  };
}

export const deleteTodo = (payload: Todo) => ({ type: DELETE_TODO, payload });