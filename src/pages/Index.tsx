
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
        <div className="w-full max-w-4xl mt-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left border-collapse">
              <caption className="caption-top text-morpho-900 font-semibold text-lg mb-4">
                Resumen de especies destacadas, su estatus y plantas hospedantes principales.
              </caption>
              <thead className="bg-morpho-100 text-morpho-900">
                <tr>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Especie (nombre común)
                  </th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Estatus/CITES
                  </th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Temporada principal
                  </th>
                  <th scope="col" className="px-4 py-3 text-sm font-semibold uppercase tracking-wide">
                    Plantas hospedantes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-morpho-200 text-morpho-900 text-sm md:text-base">
                <tr className="hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Monarca</td>
                  <td className="px-4 py-3">Vulnerable / CITES: No listado</td>
                  <td className="px-4 py-3">Otoño - Invierno</td>
                  <td className="px-4 py-3">Asclepias (algodoncillo)</td>
                </tr>
                <tr className="bg-white/60 hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Morpho azul</td>
                  <td className="px-4 py-3">Sin evaluación / CITES: No listado</td>
                  <td className="px-4 py-3">Primavera - Verano</td>
                  <td className="px-4 py-3">Fabaceae (Inga, Machaerium)</td>
                </tr>
                <tr className="hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Heliconius</td>
                  <td className="px-4 py-3">Sin evaluación / CITES: No listado</td>
                  <td className="px-4 py-3">Todo el año (picos en lluvias)</td>
                  <td className="px-4 py-3">Passiflora (maracuyá)</td>
                </tr>
                <tr className="bg-white/60 hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Agraulis</td>
                  <td className="px-4 py-3">Sin evaluación / CITES: No listado</td>
                  <td className="px-4 py-3">Primavera - Otoño</td>
                  <td className="px-4 py-3">Passiflora (enredaderas)</td>
                </tr>
                <tr className="hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Papilio garamas</td>
                  <td className="px-4 py-3">Sin evaluación / CITES: No listado</td>
                  <td className="px-4 py-3">Verano - Otoño</td>
                  <td className="px-4 py-3">Rutaceae (citrus)</td>
                </tr>
                <tr className="bg-white/60 hover:bg-morpho-50/70">
                  <td className="px-4 py-3 font-medium">Vanessa cardui</td>
                  <td className="px-4 py-3">Preocupación menor / CITES: No listado</td>
                  <td className="px-4 py-3">Primavera - Verano</td>
                  <td className="px-4 py-3">Asteraceae (cardos)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
