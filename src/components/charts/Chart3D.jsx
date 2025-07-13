import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const Chart3D = () => {
  return (
    <div className="w-full h-[400px] my-8">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Box>
          <meshStandardMaterial attach="material" color="royalblue" />
        </Box>
      </Canvas>
    </div>
  );
};

export default Chart3D;
