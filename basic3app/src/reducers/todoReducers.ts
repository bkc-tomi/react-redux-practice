export type Todo = {
  id: number,
  text: string,
};

const initState:Todo[] = [];

type todoActions = {
  type: "ADD_TODO",
  id: number,
  text: string,
} | {
  type: "DELETE_TODO",
  id: number,
}

const todoReducer = (state:Todo[] = initState, action:todoActions) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default todoReducer;