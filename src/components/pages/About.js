import React from 'react';

const about = () => {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is the To-Do List app v1.6.9.</p>
    </React.Fragment>
  )
}

// when you don't need element in DOM such as a div, you can use React.Fragment to wrap your JSX

export default about;
