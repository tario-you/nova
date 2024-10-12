// import logo from './logo.svg';
// import './App.css';

import SetupForm from "./components/SetupForm/SetupForm.jsx";

function App () {
  return (<SetupForm></SetupForm>);
}

// const fs = require('fs');
// const THREE = require('three');
// const { OBJLoader } = require('three-obj-loader');
// const { createCanvas } = require('canvas');

// OBJLoader(THREE); // Register OBJLoader to work with THREE

// // Create a Three.js scene
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ canvas: createCanvas(800, 600) });

// // Set up lighting
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 1, 1).normalize();
// scene.add(light);

// // Load the OBJ file
// const loader = new THREE.OBJLoader();

// fs.readFile('./path/to/your/model.obj', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading OBJ file:', err);
//     return;
//   }

//   const object = loader.parse(data);
//   scene.add(object);

//   // Optional: Scale or adjust the object as needed
//   object.scale.set(0.5, 0.5, 0.5);
  
//   // Set the camera position
//   camera.position.z = 5;

//   // Render the scene (you can save this to an image file if needed)
//   renderer.render(scene, camera);
  
//   // Example: Save the rendered output as an image
//   const out = fs.createWriteStream('./output.png');
//   const stream = renderer.domElement.createPNGStream();
//   stream.pipe(out);
//   out.on('finish', () => console.log('Rendered image saved to output.png'));
// });


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Nova fit</p>
//       </header>
//     </div>
//   );
// }

export default App;
