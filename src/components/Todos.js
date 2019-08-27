import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  render() {
    return this.props.todos.map(todo => (
      <TodoItem key={todo.id} todoObject={todo} toggleCheckbox={this.props.toggleCheckbox}/>
    ));
  }
}

// PropTypes making sure an array is passed down for prop todos
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
