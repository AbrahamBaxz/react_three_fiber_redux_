import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Object1 = (props) => {
  console.log(
    '%c 🗾: props ',
    'font-size:16px;background-color:#45ddca;color:black;',
    props
  );
  const mesh = useRef(null);
  useFrame(
    () => (mesh.current.rotation.x = mesh.current.rotation.y += props.speedNow)
  );

  return (
    <mesh castShadow ref={mesh}>
      {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
      <sphereBufferGeometry
        attach="geometry"
        args={[3, 4, 2, 0, 6.3, 0, 3.1]}
      />

      <meshStandardMaterial
        attach="material"
        color={props.colorNow}
        normalMap={props.textureNow}
      />
    </mesh>
  );
};

export default Object1;
