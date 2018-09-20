import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './Rating';

const formatName = (user) => {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to eNPS</h1>
        </header>

        <h1>Hello, {formatName(user)}!</h1>

        <Rating />
      </div>
    );
  }
}

export default App;
