import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todoObject.completed ? 'line-through' : 'none'
    }
  }

  render() {
    // const { id, title } = this.props.todo;
    // to call id and title instead of this.props.todo.id
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => this.props.toggleCheckbox(this.props.todoObject.id)}/>{' '}
          {this.props.todoObject.title}
          <button style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todoObject: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '6px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
