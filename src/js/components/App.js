import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

import { getTodosByCategory } from '../lib/utils'

const App = (props) => {
  const [filteredTodos, setTodos] = useState(null);
  const [clicked, setClicked] = useState(false);

  const todos = useSelector(state => state.todos);

  const handleTodoFilter = (e) => {
    const category = e.target.value;
    setClicked(true);
    setTodos(getTodosByCategory(todos, category));
  };

  return(
    <div className="main">
      <h1>Todo List</h1>
      <TodoFilter handleTodoFilter={handleTodoFilter}/>
      <TodoList todos={clicked ? filteredTodos : todos }/>
      <TodoAdd setClicked={setClicked}/>
    </div>
  );
}

export default App;