import React, { Component } from 'react';
import * as THREE from 'three';
// import WordsData from './data/words.json';

class ThreeScene extends Component{
  componentDidMount(){

    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
      //Font Loader for Text
      var loader = new THREE.FontLoader();

      loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
      
        var WordGeo = new THREE.TextGeometry( 'Hello three.js!', {
          font: font,
          size: 80,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelSegments: 5
        } );
    

    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
   
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
    
    WordGeo.computeBoundingBox();
    var centerOffset = - 0.5 * ( WordGeo.boundingBox.max.x - WordGeo.boundingBox.min.x );
    var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );
    var mesh = new THREE.Mesh( WordGeo, textMaterial );
    mesh.position.x = centerOffset;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add( this.mesh );

    //ADD TEXT FROM FORM WORDS
    // console.log(WordsData);

          
this.start()
  });
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
  //  this.cube.rotation.x += 0.01
  //  this.cube.rotation.y += 0.01
  
  //  this.renderScene()
  //  this.frameId = window.requestAnimationFrame(this.animate)

  this.frameId = window.requestAnimationFrame(this.animate)

	this.render();
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div style={{ width: '100%', height: '800px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene