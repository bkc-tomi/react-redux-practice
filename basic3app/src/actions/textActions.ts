export function changeText(todoText: string) {
  return {
    type: "CHANGE_TEXT",
    todoText: todoText,
  };
};