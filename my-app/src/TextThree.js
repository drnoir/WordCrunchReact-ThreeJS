import React, { Component } from 'react';
import * as THREE from 'three';

import { Geometry } from 'three';
import { ExtrudeBufferGeometry } from 'three';

// TextGeometry
class TextThree extends Component{
    componentDidMount(){
    
    function TextGeometry( text, parameters ) {
	Geometry.call( this );
	this.type = 'TextGeometry';

	this.parameters = {
		text: text,
		parameters: parameters
	};

	this.fromBufferGeometry( new TextBufferGeometry( text, parameters ) );
	this.mergeVertices();

}

TextGeometry.prototype = Object.create( Geometry.prototype );
TextGeometry.prototype.constructor = TextGeometry;

// TextBufferGeometry

function TextBufferGeometry( text, parameters ) {

	parameters = parameters || {};

	var font = parameters.font;

	if ( ! ( font && font.isFont ) ) {

		console.error( 'THREE.TextGeometry: font parameter is not an instance of THREE.Font.' );
		return new Geometry();

	}

	var shapes = font.generateShapes( text, parameters.size );

	// translate parameters to ExtrudeGeometry API

	parameters.depth = parameters.height !== undefined ? parameters.height : 50;

	// defaults

	if ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;
	if ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;
	if ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;

	ExtrudeBufferGeometry.call( this, shapes, parameters );

	this.type = 'TextBufferGeometry';

}

TextBufferGeometry.prototype = Object.create( ExtrudeBufferGeometry.prototype );
TextBufferGeometry.prototype.constructor = TextBufferGeometry;

	}
}
export default TextThree;