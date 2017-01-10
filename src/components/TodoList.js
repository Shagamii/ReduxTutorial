import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.Object.isRequired,
    onTodoClick: PropTypes.func.isRequired
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return(
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            />
        )}
      </ul>
    )
  }

}
