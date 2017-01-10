import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import todoList from './todos';

const todoApp = combineReducers({
  visibilityFilter,
  todoList
});

export default todoApp;
