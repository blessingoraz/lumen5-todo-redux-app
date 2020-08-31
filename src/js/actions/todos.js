import ActionTypes from '../constants/actionTypes';

export function addTodo(todo) {
  return {
    type: ActionTypes.ADD_TODO,
    todo
  };
}

export function toggleTodo(id) {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
}