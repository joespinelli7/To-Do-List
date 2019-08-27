import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';

class App extends React.Component {
  state={
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Work out',
        completed: false
      },
      {
        id: 3,
        title: 'Code for 6 hours',
        completed: false
      }
    ]
  }

  // toggle checkbox onChange (ToDo item component)
  toggleCheckbox = (id) => {
    this.setState({
      todos: [...this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })]
    })
  }

  // delete to-do task
  deleteTaskHandler = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((object) => object.id !== id)]
    });
  }

  // add new to-do task
  addToDo = (title) => {
    const newToDo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <Todos todos={this.state.todos} deleteTaskHandler={this.deleteTaskHandler} toggleCheckbox={this.toggleCheckbox}/>
        </div>
      </div>
    );
  }
}

export default App;
