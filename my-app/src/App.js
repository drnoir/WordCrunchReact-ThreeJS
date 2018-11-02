import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as three from 'three';
import _ from 'lodash';
import ThreeScene from './ThreeScene';


class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
      Word: '',
      data:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.returnLetters = this.returnLetters.bind(this);
  }
//functrions for form data array manip
  handleChange(event) {

    this.setState({Word: event.target.value});
    console.log("Values Entered");
  }

  returnLetters(e){
    e.preventDefault();
    var rawData =  this.state.Word;
    var RawDataLength = rawData.length;
    var Letters =  _.chunk(rawData,RawDataLength);
    console.log("Letters to output - "+ Letters+rawData,RawDataLength);
   
     this.setState(
      {returnLetters : Letters},
      console.log("Letters to output - "+ Letters)
     );
  };

  

  render() {
 
    return (

      <div className="App">
        <header className="App-header">
          <h4>WordCrunch 3D</h4>
          <p>Add a word or phrase into the form below and then press transform to trasnform the letters into a 3D Object</p>
          <div className="form-group">
         <form onSubmit={this.returnLetters}>
        <label>
          Name:
          <input type="text" value={this.state.Word} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>
        </header>
        <ThreeScene />
      </div>
    );
  }
}

export default App;
