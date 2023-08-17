import { useTodo } from "../store/todos";
import { useSearchParams } from "react-router-dom";
const Todos = () => {
  const { todos, checkboxChanged, deleteTodo} = useTodo();
  let allTodos = todos;
const [searchParams] = useSearchParams();
let todoData = searchParams.get("todo");

if (todoData === "active") {
  allTodos = allTodos.filter((task) => !task.completed);
} else if (todoData === "completed") {
  allTodos = allTodos.filter((task) => task.completed);
} 

  return (
    <>
      <ul className="main-task">
        {allTodos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={()=>checkboxChanged(todo.id)}
              />
              <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              {todo.completed && (
                <button 
                onClick={()=>deleteTodo(todo.id)} 
                type="button">
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
