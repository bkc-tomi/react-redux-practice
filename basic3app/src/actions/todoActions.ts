let count = 0;

export function addTodo(text: string) {
  return {
    type: "ADD_TODO",
    id: count++,
    text: text,
  };
};

export function deleteTodo(id: number) {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

