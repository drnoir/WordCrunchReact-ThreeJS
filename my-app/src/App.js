import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import three from 'three';
import _ from 'lodash';

// const Word = '';
// let Letter = '';
// let Letters = [];

// let WordArray ='';
// let  WordArraySize = WordArray.length;

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
      Word: '',
      data:[]
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.returnLetters = this.returnLetters.bind(this);
  }

  handleChange(event) {

    this.setState({Word: event.target.value});
    console.log("Values Entered");
  }

  // handleSubmit(event) {
  //   alert('New Charecter entered: ' + this.state.Word);
  //   event.preventDefault();
  //   console.log("Input Submitted");
  //   console.log("Hanldesubmit-state is", this.state);
 
  // }

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
          <h1>WordCrunch 3D</h1>
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
      </div>
    );
  }
}

export default App;
