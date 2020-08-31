import ActionTypes from '../constants/actionTypes';

import { initialState } from '../redux/initialState';

const reducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [ ...state, {...action.todo} ];
    case ActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default reducer;
