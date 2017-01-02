import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import todoList from './todos';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  todoList
});

export default todoApp;
