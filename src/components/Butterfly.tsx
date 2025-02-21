
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const Butterfly = () => {
  const butterflyRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!butterflyRef.current) return;
    
    const time = state.clock.getElapsedTime();
    butterflyRef.current.rotation.y = Math.sin(time) * 0.2;
    butterflyRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <mesh ref={butterflyRef} scale={[2, 2, 2]}>
      <boxGeometry args={[1, 0.1, 1]} />
      <meshStandardMaterial color="#1A8CFF" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};
