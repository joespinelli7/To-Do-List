import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    verticalAlign: '6.5%'
  }

  return (
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default header;
