import { createContext, ReactNode, useContext, useState } from "react";

// Create context
// Provider
// Consumer

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  checkboxChanged: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const initialTodosContext: TodosContextType = {
  todos: [],
  handleAddTodo: () => {},
  checkboxChanged: () => {},
  deleteTodo: () => {},
};

export const todosContext = createContext<TodosContextType>(initialTodosContext);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      task: task,
      completed: false,
      createdAt: new Date(),
    };
    localStorage.setItem("todos",JSON.stringify(newTodo));
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };
  const checkboxChanged = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos",JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const deleteTodo = (idToDelete: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((todo) => todo.id !== idToDelete);
      localStorage.setItem("todos",JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodo, checkboxChanged, deleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const useTodo = () => {
  const todosConsumer = useContext(todosContext);
  return todosConsumer;
};
