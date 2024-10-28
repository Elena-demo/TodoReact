export function GetTodo(props) {
  const todos = fetch("https://jsonplaceholder.typicode.com/todos").then(
    res => res.json()
    // .then(list => console.log(list))
  );

  return todos;
}
