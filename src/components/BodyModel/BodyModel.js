import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

import './BodyModel.css'; // This pulls the CSS file into your app

// Custom component to load and display the .obj model
function Model({ url }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} scale={[1.8, 1.8, 1.8]} />;
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 5, 5], fov: 75 }}>
      {/* OrbitControls allow zooming, panning, and rotating */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        zoomSpeed={0.8}
        panSpeed={0.5}
        rotateSpeed={0.8}
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />


      {/* Ambient Light: Adds general light to the scene */}
      <ambientLight intensity={0.5} />

      {/* Point Light: Acts like a bulb emitting light in all directions */}
      {/* <pointLight position={[10, 10, 10]} intensity={1} /> */}
      {/* <pointLight position={[20, 20, 20]} intensity={1} /> */}
      
      {/* Directional Light: Like sunlight, illuminating from a direction */}
      <directionalLight 
        position={[0, 10, 5]} 
        intensity={0.8} 
        castShadow={true}  // This will allow for shadows to be cast
      />

      {/* Suspense wraps the model loading to avoid render issues */}

      <Suspense fallback={null}>
        <Model url="lv3_obj.obj" />
      </Suspense>


    </Canvas>
  );
}
