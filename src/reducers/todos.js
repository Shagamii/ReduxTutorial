import { actionTypes } from '../actionTypes';

const { TODO } = actionTypes;

function initialState() {
  return {
    todo: []
  };
}

function whenAddTodo(state, text) {
  const nextId = Math.random();
  const todos = state.todos;

  todos.push({id : nextId, text, completed: false});

  return { ...state, todos };
}

function whenToggleTodo(state, todos) {
  return { ...state, todos }
}


export default function todoList(state = initialState(), event) {
  switch (event.type) {
    case TODO.ADD_TODO:
      return whenAddTodo(state, event.text);
    case TODO.TOGGLE_TODO:

      break;
    default:

  }
}

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
