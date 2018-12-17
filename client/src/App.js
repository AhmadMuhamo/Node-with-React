import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello</p>
          <a className="App-link" href="/auth/google" rel="noopener noreferrer">
            Click to sign in with google!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
