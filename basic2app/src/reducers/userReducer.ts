import react from "react";

const initState = {
  name: "",
  age: 0,
};

type userActionsType = {
  type: "SET_NAME",
  name: string,
} | {
  type: "SET_AGE",
  age: number,
}

const userReducer = (state = initState, action: userActionsType ) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.age,
      };
    default:
      return state;
  }
}

export default userReducer;