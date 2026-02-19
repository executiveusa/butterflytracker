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

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-12">
        <div className="w-full max-w-4xl space-y-10 text-morpho-900">
          <header className="space-y-4 rounded-2xl bg-white/80 p-6 text-center shadow-lg backdrop-blur">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-up" style={{ animationDelay: '150ms' }}>
              Informe estratégico: Morpho Butterfly
            </h1>
            <p
              className="text-lg md:text-xl text-morpho-800 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              Resumen ejecutivo: consolidamos evidencia científica, requisitos operativos y alianzas clave para
              impulsar la conservación y la crianza responsable de mariposas Morpho, con énfasis en cumplimiento
              legal, sostenibilidad financiera e impacto educativo regional.
            </p>
            <ul className="list-disc space-y-1 pl-5 text-left text-morpho-800">
              <li>Priorizamos territorios con alto valor ecológico y potencial de restauración.</li>
              <li>Establecemos estándares de crianza responsables con trazabilidad.</li>
              <li>Articulamos financiamiento, tecnología y educación para escalar el impacto.</li>
            </ul>
          </header>

          <section className="space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Análisis de biodiversidad</h2>
              <p className="text-morpho-800">
                Evaluamos corredores ecológicos, especies hospederas y riesgos climáticos para priorizar zonas de
                restauración y monitoreo continuo.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Inventarios participativos y mapeo de hábitats críticos.</li>
                <li>Indicadores de salud del ecosistema y amenazas emergentes.</li>
                <li>Protocolos de monitoreo con comunidades locales.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Requerimientos de crianza</h2>
              <p className="text-morpho-800">
                Establecemos estándares de bioseguridad, nutrición y bienestar para garantizar ciclos de vida sanos y
                trazables.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Condiciones de temperatura, humedad y fotoperiodo.</li>
                <li>Plan de alimentación con plantas hospederas certificadas.</li>
                <li>Registro sanitario y control de enfermedades.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Cumplimiento legal</h2>
              <p className="text-morpho-800">
                Revisamos normativa ambiental, permisos de fauna y requisitos de exportación para asegurar
                operaciones transparentes.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Gestión de licencias y reportes ante autoridades ambientales.</li>
                <li>Protocolos de trazabilidad y documentación CITES cuando aplique.</li>
                <li>Políticas internas de ética y bienestar animal.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Equipamiento y proveedores</h2>
              <p className="text-morpho-800">
                Definimos el kit operativo mínimo y una red de suministros resiliente para asegurar continuidad.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Invernaderos, módulos de incubación y laboratorios móviles.</li>
                <li>Proveedores locales de insumos biológicos y control ambiental.</li>
                <li>Lineamientos de compra responsable y reducción de residuos.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Subvenciones</h2>
              <p className="text-morpho-800">
                Identificamos fondos públicos y privados para investigación aplicada, infraestructura y formación
                comunitaria.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Calendario de convocatorias internacionales y locales.</li>
                <li>Argumentario de impacto para donantes y fondos climáticos.</li>
                <li>Modelo de cofinanciamiento con actores territoriales.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Organizaciones aliadas</h2>
              <p className="text-morpho-800">
                Fortalecemos alianzas con ONG, universidades y comunidades para ampliar el alcance científico y
                educativo.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Convenios de investigación y pasantías.</li>
                <li>Programas de educación ambiental y turismo responsable.</li>
                <li>Mesas de trabajo con autoridades regionales.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6 rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Infraestructura digital/educativa</h2>
              <p className="text-morpho-800">
                Desarrollamos una plataforma digital para seguimiento de datos, aprendizaje abierto y comunicación
                con aliados.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-morpho-800">
                <li>Tableros de monitoreo y repositorios de investigación.</li>
                <li>Aulas virtuales con contenidos para escuelas y voluntariado.</li>
                <li>Biblioteca multimedia para divulgación científica.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl bg-morpho-900/90 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-semibold">Cierre y llamado a la acción</h2>
            <p className="text-white/90">
              Súmate a nuestra red de conservación. Buscamos voluntarios, aliados financieros y expertos en
              biodiversidad para consolidar el programa.
            </p>
            <ul className="list-disc space-y-3 pl-5 text-white/85">
              <li>
                <h3 className="text-lg font-semibold text-white">Voluntariado</h3>
                <p>Participa en monitoreo, educación y restauración de hábitats.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-white">Donación</h3>
                <p>Aporta a infraestructura, investigación y becas comunitarias.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-white">Contacto</h3>
                <p>Escríbenos para alianzas estratégicas o programas educativos.</p>
              </li>
            </ul>
            <div className="pt-2">
              <EmailForm />
            </div>
          </section>
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
