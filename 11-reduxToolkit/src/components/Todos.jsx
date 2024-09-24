import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-zinc-800 text-white py-3 px-4 mt-2 w-[80%] mx-auto rounded-sm"
          >
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
