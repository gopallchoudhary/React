import { useEffect, useState } from "react";
import { useUID } from "react-uid";
import "./App.css";
import { TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);
  const id = useUID();

  const addTodo = (id, todo) => {
    setTodos((prev) => [{ id: Date.now, ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo ? prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))

  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <h1 className="text-3xl text-orange-500 font-bold line-through">
        Gopal top level Programmer
      </h1>
    </TodoProvider>
  );
}

export default App;
