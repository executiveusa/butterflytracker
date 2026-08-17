import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Database, Map, Microscope, ShieldCheck } from 'lucide-react';
import { SpecimenButterfly } from '@/components/experience/SpecimenButterfly';
import { ObservationDraft } from '@/components/field/ObservationDraft';
import { species } from '@/data/species';
import '@/morphos-experience.css';

const pvSpecies = species.filter((item) => item.evidence === 'pv-observed');

const Index = () => {
  const [activeId, setActiveId] = useState(species[0].id);
  const active = useMemo(() => species.find((item) => item.id === activeId) ?? species[0], [activeId]);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-species-id]')];
    const observer = new IntersectionObserver((entries) => {
      const mostVisible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (mostVisible?.target) setActiveId((mostVisible.target as HTMLElement).dataset.speciesId || species[0].id);
    }, { threshold: [0.3, 0.55, 0.75], rootMargin: '-12% 0px -25% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="morphos-site-shell">
      <header className="morphos-topbar">
        <a className="morphos-wordmark" href="#inicio" aria-label="Morphos y Monarcas, inicio">MORPHOS <i>Y</i> MONARCAS</a>
        <nav aria-label="Principal"><a href="#especies">Especies</a><a href="#mapa">Mapa</a><a href="#observar">Observar</a><a href="#datos">Datos</a></nav>
        <span className="morphos-place-chip">PUERTO VALLARTA · JALISCO</span>
      </header>

      <section id="inicio" className="morphos-hero-experience">
        <div className="morphos-hero-noise" />
        <div className="morphos-hero-copy">
          <p className="morphos-eyebrow morphos-light">ATLAS VIVO · CIENCIA CIUDADANA · CONSERVACIÓN</p>
          <h1>Conocerlas.<br/><em>Verlas.</em><br/>Protegerlas.</h1>
          <p className="morphos-hero-deck">Una experiencia digital para descubrir las mariposas de Puerto Vallarta y convertir observaciones reales en evidencia útil para conservar su hábitat.</p>
          <a className="morphos-hero-action" href="#especies">Entrar al atlas <ArrowDown size={18} /></a>
        </div>
        <div className="morphos-hero-canvas" aria-hidden="true"><Canvas dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}><PerspectiveCamera makeDefault position={[0, 0.5, 5.5]} /><ambientLight intensity={1.3} /><directionalLight position={[4, 5, 5]} intensity={3.2} /><pointLight position={[-3, 1, 2]} intensity={2} color="#7ad0ff" /><SpecimenButterfly species={species[0]} /></Canvas></div>
        <div className="morphos-hero-proof"><div><strong>326</strong><span>especies reportadas históricamente para el municipio por el inventario de Jalisco</span></div><div><strong>606</strong><span>especies en el inventario estatal consultado</span></div><div><strong>{pvSpecies.length}</strong><span>taxón en esta build con evidencia puntual de Puerto Vallarta</span></div></div>
      </section>

      <section className="morphos-manifesto" id="especies"><p>NO ES UNA ENCICLOPEDIA.</p><h2>Es un observatorio público de una ciudad viva.</h2><div className="morphos-manifesto-grid"><p>Las mariposas responden a cambios en vegetación, agua, pesticidas, temperatura y conectividad del hábitat. El atlas debe ayudarnos a notar esas señales antes de que se vuelvan invisibles.</p><p className="morphos-source-note">Cada afirmación local conserva su fuente y nivel de evidencia. Una especie registrada en Jalisco no se presenta automáticamente como observada en Puerto Vallarta.</p></div></section>

      <section className="morphos-specimen-experience">
        <div className="morphos-specimen-stage"><div className="morphos-stage-meta"><span>{String(species.findIndex((item) => item.id === active.id) + 1).padStart(2, '0')} / {String(species.length).padStart(2, '0')}</span><span>{active.family}</span></div><Canvas dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}><PerspectiveCamera makeDefault position={[0, 0.6, 5.2]} /><ambientLight intensity={1.4} /><directionalLight position={[4, 5, 4]} intensity={3} /><pointLight position={[-3, 1, 3]} intensity={1.8} color={active.accent} /><SpecimenButterfly species={active} /></Canvas><p className="morphos-model-disclaimer">Representación 3D interpretativa · no usar como lámina diagnóstica</p></div>
        <div className="morphos-specimen-stories">{species.map((item, index) => <article key={item.id} className="morphos-species-story" data-species-id={item.id}><span className="morphos-species-index">{String(index + 1).padStart(2, '0')}</span><p className="morphos-species-common">{item.commonNameEs}</p><h3>{item.scientificName}</h3><p className="morphos-species-ecology">{item.ecologyEs}</p><div className={`morphos-evidence ${item.evidence}`}><ShieldCheck size={16} /> {item.evidenceLabelEs}</div><a href={item.sourceUrl} target="_blank" rel="noreferrer">Fuente · {item.sourceLabel} <ArrowUpRight size={14} /></a><div className="morphos-research-question"><span>PREGUNTA DE CONSERVACIÓN</span><p>{item.conservationQuestionEs}</p></div></article>)}</div>
      </section>

      <section id="mapa" className="morphos-map-concept"><div className="morphos-map-copy"><span className="morphos-eyebrow">CAPA 02 · TERRITORIO</span><h2>El mapa no muestra puntos.<br/>Muestra <em>preguntas.</em></h2><p>La versión conectada cruzará observaciones verificadas con temporada, plantas hospederas, recursos de néctar, tipo de hábitat e incidentes ambientales.</p><div className="morphos-layer-list"><span>Observaciones</span><span>Estacionalidad</span><span>Plantas hospederas</span><span>Corredores</span><span>Incidentes</span><span>Vacíos de muestreo</span></div></div><div className="morphos-map-visual" aria-label="Concepto del futuro mapa de monitoreo; los elementos de fondo no son datos científicos."><div className="morphos-coast"/><div className="morphos-map-pin verified" style={{left:'58%',top:'43%'}}><span/>Amapas<br/><small>{pvSpecies[0]?.scientificName}</small></div><div className="morphos-map-caption">Solo los puntos con fuente verificable se presentarán como evidencia.</div></div></section>

      <ObservationDraft />

      <section id="datos" className="morphos-government-utility"><div className="morphos-utility-intro"><span className="morphos-eyebrow morphos-light">CAPA 04 · DECISIÓN</span><h2>Una interfaz para enamorar.<br/>Un sistema para decidir.</h2></div><div className="morphos-utility-grid"><article><Database/><span>DATOS ABIERTOS</span><h3>Exportable por diseño</h3><p>CSV, GeoJSON y API forman parte del contrato de producto.</p></article><article><Microscope/><span>CALIDAD</span><h3>Evidencia con procedencia</h3><p>Identificación sugerida, revisión, fuente y confianza son estados distintos.</p></article><article><Map/><span>TERRITORIO</span><h3>Detectar vacíos</h3><p>El valor también está en saber dónde no estamos observando y qué hábitat falta conectar.</p></article></div></section>

      <section className="morphos-closing"><p className="morphos-eyebrow">MORPHOS Y MONARCAS · PUERTO VALLARTA</p><h2>La ciudad también<br/>se puede leer por sus alas.</h2><a href="#observar">Preparar una observación <ArrowUpRight size={18}/></a></section>
      <footer className="morphos-footer"><span>MORPHOS Y MONARCAS</span><p>Producto en desarrollo. Las visualizaciones 3D son interpretativas; los registros científicos conservan su nivel de evidencia y fuente.</p><span>morphosymonarcas.com</span></footer>
    </main>
  );
};

export default Index;
