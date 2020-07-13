const initState: string = "a";

type textActions = {
  type: "CHANGE_TEXT",
  todoText: string,
}

const textReducer = (state:string = initState, action: textActions) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.todoText;
    default:
      return state;
  }
}

export default textReducer;