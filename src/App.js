import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/pages/About';

class App extends React.Component {
  state={
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Work out',
        completed: false
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/" exact render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} deleteTaskHandler={this.deleteTaskHandler} toggleCheckbox={this.toggleCheckbox}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
