
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { MonarchFlock } from '@/components/Butterfly';
import { EmailForm } from '@/components/EmailForm';
import { useLanguage } from '@/lib/i18n';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { language, setLanguage, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.out' })
          .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
          .fromTo('.hero-form', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');

    // Scroll-triggered journey sections
    const sections = gsap.utils.toArray('.journey-section');
    sections.forEach((section: any, index) => {
      gsap.fromTo(section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stagger child elements
      const children = section.querySelectorAll('.stagger-item');
      gsap.fromTo(children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-b from-migration-100 via-monarch-50 to-endangered-50 overflow-hidden">
        <div className="absolute inset-0">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} />
            <MonarchFlock />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
          <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-migration-900 shadow-sm backdrop-blur-sm">
            <span className="sr-only">{t.languageSelectorLabel}</span>
            <div role="group" aria-label={t.languageSelectorLabel} className="flex gap-2">
              <button
                type="button"
                onClick={() => setLanguage('es')}
                aria-pressed={language === 'es'}
                className={`rounded-full px-3 py-1 transition ${
                  language === 'es' ? 'bg-monarch-500 text-white' : 'bg-transparent text-migration-900'
                }`}
              >
                {t.languageOptionEs}
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-full px-3 py-1 transition ${
                  language === 'en' ? 'bg-monarch-500 text-white' : 'bg-transparent text-migration-900'
                }`}
              >
                {t.languageOptionEn}
              </button>
            </div>
          </div>

          <div className="text-center mb-12 space-y-6 max-w-4xl">
            <h1 className="hero-title text-6xl md:text-8xl font-bold text-monarch-600 drop-shadow-lg">
              {t.heroTitle}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-migration-800 max-w-2xl mx-auto leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="hero-form mt-8">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Sections */}
      <main ref={journeyRef} className="bg-white">
        {/* Life Cycle Section */}
        <section className="journey-section min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="stagger-item text-4xl md:text-6xl font-bold text-monarch-600 mb-6">
                {t.lifeCycleTitle}
              </h2>
              <p className="stagger-item text-lg text-gray-700 leading-relaxed">
                {t.lifeCycleContent}
              </p>
            </div>
            <div className="stagger-item bg-monarch-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-monarch-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    🥚
                  </div>
                  <p className="text-sm font-medium">Huevo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-monarch-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                    🐛
                  </div>
                  <p className="text-sm font-medium">Larva</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-monarch-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                    🛡️
                  </div>
                  <p className="text-sm font-medium">Pupa</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-monarch-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white">
                    🦋
                  </div>
                  <p className="text-sm font-medium">Adulto</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Section */}
        <section className="journey-section min-h-screen flex items-center py-20 px-4 bg-migration-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="stagger-item">
              <h2 className="text-4xl md:text-6xl font-bold text-migration-600 mb-6">
                {t.migrationTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t.migrationContent}
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-2xl font-bold text-migration-600">4,000 km</p>
                <p className="text-sm text-gray-600">Distancia recorrida anualmente</p>
              </div>
            </div>
            <div className="stagger-item">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-monarch-500 rounded-full"></div>
                    <span className="text-sm">Canadá & EE.UU. del Norte</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded">
                    <div className="w-3/4 h-full bg-gradient-to-r from-monarch-400 to-migration-400 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-migration-500 rounded-full"></div>
                    <span className="text-sm">México - Bosques de Oyamel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threats Section */}
        <section className="journey-section min-h-screen flex items-center py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="stagger-item text-4xl md:text-6xl font-bold text-endangered-600 mb-8">
              {t.threatsTitle}
            </h2>
            <p className="stagger-item text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              {t.threatsContent}
            </p>
            <div className="stagger-item bg-endangered-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-3xl font-bold text-endangered-600 mb-2">{t.extinctionStats}</p>
              <p className="text-sm text-gray-600">Datos de la crisis de la mariposa monarca</p>
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="journey-section min-h-screen flex items-center py-20 px-4 bg-monarch-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="stagger-item text-4xl md:text-6xl font-bold text-monarch-600 mb-6">
                {t.conservationTitle}
              </h2>
              <p className="stagger-item text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t.conservationContent}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="stagger-item bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-monarch-600 mb-4">{t.actionsTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-monarch-500 rounded-full flex items-center justify-center text-white text-sm mt-0.5">1</div>
                    <p className="text-gray-700">{t.action1}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-monarch-500 rounded-full flex items-center justify-center text-white text-sm mt-0.5">2</div>
                    <p className="text-gray-700">{t.action2}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-monarch-500 rounded-full flex items-center justify-center text-white text-sm mt-0.5">3</div>
                    <p className="text-gray-700">{t.action3}</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-monarch-500 rounded-full flex items-center justify-center text-white text-sm mt-0.5">4</div>
                    <p className="text-gray-700">{t.action4}</p>
                  </li>
                </ul>
              </div>

              <div className="stagger-item">
                <EmailForm />
                <p className="text-center text-gray-600 mt-4">{t.footerText}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
