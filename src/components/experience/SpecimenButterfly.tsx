import { useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { ButterflySpecies } from '@/data/species';

function wingShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.6, 0.18, 1.45, 0.28, 1.7, 1.05);
  shape.bezierCurveTo(1.9, 1.7, 1.35, 2.15, 0.65, 1.78);
  shape.bezierCurveTo(0.25, 1.52, 0.03, 0.78, 0, 0);
  return shape;
}

function Wing({ side, species }: { side: -1 | 1; species: ButterflySpecies }) {
  const ref = useRef<THREE.Group>(null);
  const shape = useMemo(wingShape, []);
  useFrame((state) => { if (!ref.current) return; const flutter = Math.sin(state.clock.elapsedTime * 2.35) * 0.13; ref.current.rotation.y = side * (0.24 + flutter); });
  return <group ref={ref} scale={[side,1,1]}><mesh rotation={[Math.PI/2,0,0]}><shapeGeometry args={[shape,22]}/><meshPhysicalMaterial color={species.primary} roughness={0.52} metalness={0.05} clearcoat={0.22} side={THREE.DoubleSide}/></mesh><mesh position={[0.68,0.02,0.015]} rotation={[Math.PI/2,0,0]} scale={0.58}><circleGeometry args={[0.56,48]}/><meshStandardMaterial color={species.secondary} transparent opacity={0.88} side={THREE.DoubleSide}/></mesh><mesh position={[1.18,0.55,0.025]} rotation={[Math.PI/2,0,0]} scale={[0.33,0.5,1]}><circleGeometry args={[0.42,32]}/><meshStandardMaterial color={species.accent} side={THREE.DoubleSide}/></mesh></group>;
}

export function SpecimenButterfly({ species }: { species: ButterflySpecies }) {
  return <PresentationControls global polar={[-0.18,0.22]} azimuth={[-0.55,0.55]} config={{ mass:1.5,tension:150 }} snap><Float speed={1.35} rotationIntensity={0.14} floatIntensity={0.35}><group rotation={[-0.08,0.12,0]} scale={1.18}><Wing side={-1} species={species}/><Wing side={1} species={species}/><mesh position={[0,0.55,0]}><capsuleGeometry args={[0.11,1.05,8,18]}/><meshStandardMaterial color="#17120f" roughness={0.72}/></mesh><mesh position={[0,1.17,0]}><sphereGeometry args={[0.17,24,24]}/><meshStandardMaterial color="#15110e" roughness={0.7}/></mesh><mesh position={[-0.07,1.42,0]} rotation={[0,0,-0.28]}><cylinderGeometry args={[0.012,0.012,0.7,8]}/><meshStandardMaterial color="#251b15"/></mesh><mesh position={[0.07,1.42,0]} rotation={[0,0,0.28]}><cylinderGeometry args={[0.012,0.012,0.7,8]}/><meshStandardMaterial color="#251b15"/></mesh></group></Float></PresentationControls>;
}
