import React from 'react';

export default function TodoFilter({handleTodoFilter}) { 
  return (
    <div className="top-space">
      <label>Category:</label>
      <select onChange={(e) => handleTodoFilter(e)} className="left-space lg-width height">
        <option value="all">All</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
      </select>
    </div>
  )
}
