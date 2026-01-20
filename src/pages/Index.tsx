
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Butterfly } from '@/components/Butterfly';
import { EmailForm } from '@/components/EmailForm';
import { useLanguage } from '@/lib/i18n';

const Index = () => {
  const { language, setLanguage, t } = useLanguage();

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
        <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm font-semibold text-morpho-900 shadow-sm backdrop-blur-sm">
          <span className="sr-only">{t.languageSelectorLabel}</span>
          <div role="group" aria-label={t.languageSelectorLabel} className="flex gap-2">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
              className={`rounded-full px-3 py-1 transition ${
                language === 'es' ? 'bg-morpho-600 text-white' : 'bg-transparent text-morpho-900'
              }`}
            >
              {t.languageOptionEs}
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`rounded-full px-3 py-1 transition ${
                language === 'en' ? 'bg-morpho-600 text-white' : 'bg-transparent text-morpho-900'
              }`}
            >
              {t.languageOptionEn}
            </button>
          </div>
        </div>
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-5xl font-bold text-morpho-900 animate-fade-up" style={{ animationDelay: '200ms' }}>
            {t.heroTitle}
          </h1>
          <p className="text-xl text-morpho-800 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
            {t.heroDescription}
          </p>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Index;
