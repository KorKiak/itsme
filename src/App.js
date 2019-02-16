import React, { Component } from 'react';
import logo from './img/08.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{marginBottom: "0px"}}>Uh oh</h1>
          <p>
            Development in progress..
          </p>
          <a
            className="App-link"
            href="https://korkiak.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit current website
          </a>
        </header>
      </div>
    );
  }
}

export default App;
