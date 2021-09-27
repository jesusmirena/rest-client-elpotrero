interface Todo {
    id: number;
    name: string;
    desc?: string;
    isComplete: boolean;
  }
  
  interface TodoState {
    todos: Todo[];
  }
  
  interface Action {
    type: string;
    payload: Todo;
  }
  
  type DispatchType = (args: TodoAction) => TodoAction;