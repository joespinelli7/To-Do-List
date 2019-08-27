import React from 'react';
import './App.css';
import Todos from './components/Todos';

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
        completed: true
      },
      {
        id: 3,
        title: 'Code for 6 hours',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
