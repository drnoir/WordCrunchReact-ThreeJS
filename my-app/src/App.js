import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import _ from 'lodash';
import * as ReactDOM from 'react-dom';

// varibles for three js Rendering 
var height = window.innerHeight, width = window.innerWidth;
var scene = new THREE.Scene(); // Creates a new scene

var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 ); // Creates a camera and passes (field of view, aspect ratio, near clipping plane, far clipping plane)
      camera.position.set(0, 0, 5);// moves the camera back some so we won't be inside of the cube
      camera.lookAt( scene.position ); // makes the camera always point toward the scene
      scene.add(camera);

var light = new THREE.PointLight( 0xFFFF00 );
      light.position.set( 10, 0, 10 );
      scene.add(light);

var renderer = new THREE.WebGLRenderer();
      renderer.setSize( width, height ); // sets size of render to the screen size
      document.body.appendChild( renderer.domElement); // Renders a canvas tag to the DOM

var geometry = new THREE.BoxGeometry( 2, 2, 2); // give the cube it's dimensions (width, height, depth)
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: false} ); // creates material and gives it a color
material.wireframe = false;
var cube1 = new THREE.Mesh( geometry, material ); // crates the cube using the geometry and the material
var cube2 = new THREE.Mesh( geometry, material );
      cube2.position.set(5, -2, -5);
var cube3 = new THREE.Mesh( geometry, material );
      cube3.position.set(-5, -2, -5);
        // Resize Three.js scene on window resize
// window.addEventListener( 'resize', onWindowResize, false );

var loader = new THREE.FontLoader();

scene.add( loader,cube1, cube2, cube3); // adds the cube to the scene

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
  };

  onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
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

  render(){

    // requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
    cube1.rotation.z += 0.05;
    cube1.rotation.x += 0.05;
    cube1.rotation.y += 0.05;  // Runs every frame giving it the animation
    
    cube2.rotation.x += 0.05; 
    
    cube3.rotation.y += 0.05;
    
    renderer.render( scene, camera ); 

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
        <div className='container'>
          <p>User Input</p>
          <p>{this.state.Word}</p>
      </div>
      </div>
      );
}};
export default App;

