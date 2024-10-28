import * as THREE from 
'https://unpkg.com/three@0.154.0/build/three.module.js';

//Creando una escena y una camara en la pagina web (Renderizar)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Una caja con 3 dimenciones
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material ); //Objeto principal
scene.add( cube );

camera.position.z = 5;

//
function animate() {
    //justo antes de que se renderice
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
