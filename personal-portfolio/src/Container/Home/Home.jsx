import { useState,Suspense } from 'react';
import './Home.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Robot from '../../../public/Robot'
import { AmbientLight } from 'three';

const Home = () => {
  return (
    <div id="home">
      <Canvas>
        <ambientLight intensity={1}/>
        <OrbitControls />
        <Suspense fallback={null}>
           <Robot/>
        </Suspense>
        <Environment preset='sunset'/>
      </Canvas>
    </div>
  )
}

export default Home