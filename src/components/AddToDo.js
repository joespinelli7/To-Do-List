import React from 'react';

class AddToDo extends React.Component {
  state={
    title: ''
  }

  pickClassName = () => {
    if(this.state.title === '') {
      return "btnDisabled"
    } else {
      return "btn"
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitNewToDo = (e) => {
    // preventDefault to prevent page from submitting, instead leaving
    // it up to React to update and submit changes
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitNewToDo} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          style={{flex: '10', padding: '7px'}}
          placeholder="Add New Task"
          value={this.state.title}
          onChange={this.onChangeHandler}
        />
        <input
          type="submit"
          value="Submit"
          className={this.pickClassName()}
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddToDo;
