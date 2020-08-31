import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos";
import {v1 as uuid} from 'uuid';

export default function TodoAdd({ setClicked }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("home");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setClicked(false);
    if (task.trim() === "") return null;
    dispatch(
      addTodo({
        id: uuid(),
        task,
        category,
        complete: false
      })
    );
    setTask('');
  };

  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleCategory = (e: any) => {
    setCategory(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="top-space">
      <input className="lg-width height" type="text" placeholder="Enter new Todo" value={task} onChange={handleChange}/>
      <button type="submit" className="left-space xs-width height">Add</button>

      <select value={category} onChange={handleCategory} className="left-space  md-width height">
        <option value="home">Home</option>
        <option value="work">Work</option>
      </select>
    </form>
  );
};