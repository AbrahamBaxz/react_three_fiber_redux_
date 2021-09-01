import '../App.scss';

import { Canvas, useFrame } from 'react-three-fiber';
import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import Object1 from './Object1';

const MainCanvas = (props) => {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />

      {/* light source TODO: ISSUE */}
      {/* <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadowMapWidth={1024}
        shadowMapHeight={1024}
        shadowCameraFar={50}
        shadowCameraLeft={-10}
        shadowCameraRight={10}
        shadowCameraTop={10}
        shadowCameraBottom={-10}
      /> */}

      <pointLight position={[2, 3, 4]} intensity={0.5} color={'#ffffff'} />
      <pointLight position={[-2, 3, 4]} intensity={0.5} color={'#ffffff'} />
      <pointLight position={[2, -3, 4]} intensity={0.5} color={'#ffffff'} />
      <pointLight position={[-2, -3, 4]} intensity={0.5} color={'#ffffff'} />

      {/* <pointLight position={[1, 1, 1]} intensity={2} color={'#ff0000'} />

      <pointLight position={[1, -1, 1]} intensity={2} color={'#00ffff'} /> */}

      {/* TODO: ISSUE the plane to receive theShadow   */}
      {/* <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" />
          <meshStandardMaterial color="#3D3B3B" />
        </mesh>
      </group> */}

      <Object1
        colorNow={props.colorNow}
        speedNow={props.speedNow}
        textureNow={props.textureNow}
      />
      <OrbitControls />
    </Canvas>
  );
};

export default MainCanvas;
