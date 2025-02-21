
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Butterfly } from '@/components/Butterfly';
import { EmailForm } from '@/components/EmailForm';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-morpho-100 to-morpho-200">
      <div className="absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Butterfly />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-morpho-900 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Morpho Butterfly
          </h1>
          <p className="text-xl text-morpho-800 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
            Experience the beauty of nature in stunning 3D. Subscribe to learn more about our upcoming collection.
          </p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Index;
