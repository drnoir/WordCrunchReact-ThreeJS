import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import three from three;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>WordCrunch 3D</h1>
          <p>Add a word or phrase into the form below and then press transform to trasnform the letters into a 3D Object</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
