import { FormEvent, useState } from "react";
import { useTodo } from "../store/todos";

const AddTodos = () => {
  const [todo, setTodo] = useState("");
  const {handleAddTodo}=useTodo();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();  
    handleAddTodo(todo);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo((e.target as HTMLInputElement).value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodos;
