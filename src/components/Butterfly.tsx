
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import * as THREE from 'three';

interface MonarchButterflyProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
}

export const MonarchButterfly = ({ position = [0, 0, 0], scale = 1, speed = 1 }: MonarchButterflyProps) => {
  const groupRef = useRef<Group>(null);
  const wingRef = useRef<Mesh>(null);

  // Create monarch wing texture (orange with black veins)
  const wingTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    // Base orange color
    ctx.fillStyle = '#F97316';
    ctx.fillRect(0, 0, 256, 256);

    // Black veins pattern
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(128, 0);
      ctx.quadraticCurveTo(64 + i * 20, 128, 128, 256);
      ctx.stroke();
    }

    // White spots
    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * 200 + 28;
      const y = Math.random() * 200 + 28;
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !wingRef.current) return;

    const time = state.clock.getElapsedTime() * speed;

    // Fluttering motion
    groupRef.current.position.x = position[0] + Math.sin(time * 2) * 0.5;
    groupRef.current.position.y = position[1] + Math.sin(time * 1.5) * 0.3;
    groupRef.current.position.z = position[2] + Math.sin(time * 0.8) * 0.2;

    // Wing flapping
    wingRef.current.rotation.z = Math.sin(time * 8) * 0.3;

    // Gentle rotation
    groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Wings */}
      <mesh ref={wingRef} position={[0, 0.1, 0]}>
        {/* Upper wings */}
        <planeGeometry args={[0.4, 0.6]} />
        <meshStandardMaterial
          map={wingTexture}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Lower wings */}
      <mesh position={[0, -0.1, 0]}>
        <planeGeometry args={[0.3, 0.4]} />
        <meshStandardMaterial
          map={wingTexture}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Antennas */}
      <mesh position={[0.05, 0.15, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[-0.05, 0.15, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  );
};

// Flock of monarchs for the hero
export const MonarchFlock = () => {
  const monarchs = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ] as [number, number, number],
      scale: 0.8 + Math.random() * 0.4,
      speed: 0.8 + Math.random() * 0.4
    }));
  }, []);

  return (
    <>
      {monarchs.map((monarch) => (
        <MonarchButterfly
          key={monarch.id}
          position={monarch.position}
          scale={monarch.scale}
          speed={monarch.speed}
        />
      ))}
    </>
  );
};
