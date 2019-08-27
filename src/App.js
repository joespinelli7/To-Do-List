import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
// import uuid from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {
  state={
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res =>
        this.setState({
          todos: res.data
        })
      )
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter((object) => object.id !== id)]
        })
      )
  }

  // add new to-do task
  addToDo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      )
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
