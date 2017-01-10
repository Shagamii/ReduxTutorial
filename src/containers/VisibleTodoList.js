import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodoList = (TodoList, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return TodoList
    case 'SHOW_COMPLETED':
      return TodoList.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return TodoList.filter(t => !t.completed)
    default:
      return TodoList;
  }
}

const mapStateToProps = (state) => {
  return {
    TodoList: getVisibleTodoList(state.TodoList, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
