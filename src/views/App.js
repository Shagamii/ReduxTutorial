import React, { Component } from 'react'
import Footer from './components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import * as appActions from '../actions/appActions';

export default class App extends Component {
  render() {
    return(
      <div>
        <AddTodo />
        <VisibleTodoList onClick={this.props.setVisibilityFilter(this.props.filter)} />
        <Footer />
      </div>
    )
  }
}
