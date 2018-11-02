import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import three from 'three';
import lodash from 'lodash';

let Word = '';
let Letter = '';
let Letters = [];

let WordArray ='';
let  WordArraySize = WordArray.length;

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A Value was submitted: ' + this.state.value);
    Letters._.chunk(WordArray, [WordArraySize]);
    console.log('Function splite word letters rans');
    console.log(Letters);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WordCrunch 3D</h1>
          <p>Add a word or phrase into the form below and then press transform to trasnform the letters into a 3D Object</p>
          <div className="form-group">
         <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>
        </header>
      </div>
    );
  }
}

export default App;
