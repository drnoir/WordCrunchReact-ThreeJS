import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import _ from 'lodash';
import * as ReactDOM from 'react-dom';
import { Button, Row, Col } from 'reactstrap';

// varibles for three js Rendering 
// var height = window.innerHeight, width = window.innerWidth;
var height = 700,  width = window.innerWidth;
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
    this.createText = this.createText.bind(this);
  }

  componentDidMount(){
 
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

  createText(word)
  {
    var loader = new THREE.FontLoader();
    loader.load( '/fonts/Baloo Paaji 2_Regular.json', function ( font ) {
        var textGeo = new THREE.TextGeometry(  word  , {
            font: font,
            size: 70, // font size
            height: 70, // how much extrusion (how thick / deep are the letters)
            curveSegments: 12,
            bevelThickness: 1,
            bevelSize: 1,
            bevelEnabled: true
        });
        textGeo.computeBoundingBox();
        var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );
        var mesh = new THREE.Mesh( textGeo, textMaterial );
        mesh.position.x = -100;
        mesh.position.y = 0;
        mesh.position.z = -200;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add( mesh );
    });
  }

returnLetters(e){
    e.preventDefault();
    var rawData =  this.state.Word;
    var RawDataLength = rawData.length;
    var Letters =  _.chunk(rawData,RawDataLength);
    console.log("Letters to output - "+ Letters+rawData,RawDataLength);
     this.setState({returnLetters : Letters},console.log("Letters to output - "+ Letters));
     this.createText(rawData)
  };

  render(){

  renderer.render( scene, camera ); 

  return (
  <div className="Container">
    <header className="App-header">
      <h4>WordCrunch 3D</h4>
      <p>Add a word or phrase into the form below and then press transform to transform the word into a 3D Object</p>
    </header>

<div className='container-fluid'>
  <Row className="m-4">
    <Col>
        <div className="form-group">
         <form onSubmit={this.returnLetters}>
        <label>
          Word:
          <input type="text" value={this.state.Word} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Transform" />
      </form>
      </div>

      <p>User Input is</p>
          <p>{this.state.Word}</p>
      </Col>
</Row>
  
  
      </div>
  </div>
      );
}};
export default App;

