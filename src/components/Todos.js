import React from 'react';

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <h3 key={todo.id}>{todo.title}</h3>
    ))
  }
}

export default Todos;
