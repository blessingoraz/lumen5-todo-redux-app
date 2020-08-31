import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from "../actions/todos";

export default function TodoList({todos}) {
  const dispatch = useDispatch();
  const handleToggleTodo = (id) => {
    dispatch(
      toggleTodo(id)
    );
  };
  return (
    <div>
      {todos.map((todo: any) => {
        return (
          <div key={todo.id} className="top-space">
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.complete}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.task}<br/>
          </div>
        )
      })}
    </div>
  )
}
