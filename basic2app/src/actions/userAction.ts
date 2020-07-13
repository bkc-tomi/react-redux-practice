export function setName(name: string) {
  return { type: "SET_NAME", name: name};
};

export function setAge(age: number) {
  return { type: "SET_AGE", age: age};
};