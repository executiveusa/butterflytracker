
import { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Butterfly } from '@/components/Butterfly';
import { EmailForm } from '@/components/EmailForm';

const speciesTable = [
  {
    species: 'Danaus plexippus (Monarca)',
    status: 'NOM-059: Protección Especial; CITES II (ND)',
    season: 'Migratoria: inverna en México (noviembre) y cría en primavera-verano.',
    hosts: 'Asclepias spp. (algodoncillos, e.g. A. curassavica)',
  },
  {
    species: 'Morpho peleides (Morpho azul)',
    status: 'No evaluado (CITES II mundial)',
    season: 'Tropical: activa principalmente en lluvias (mayo-octubre).',
    hosts: 'Leguminosas: Machaerium seemanii, Lonchocarpus spp. (Fabaceae)',
  },
  {
    species: 'Heliconius charithonia (Cebra)',
    status: 'Común tropical',
    season: 'Todo el año, pico en temporada de lluvias.',
    hosts: 'Passiflora spp. (maracuyás)',
  },
  {
    species: 'Agraulis vanillae (Flamenca)',
    status: 'Común tropical',
    season: 'Todo el año, migraciones locales.',
    hosts: 'Passiflora spp. (maracuyás)',
  },
  {
    species: 'Papilio garamas',
    status: 'Local; sin CITES',
    season: 'Tropical todo el año.',
    hosts: 'Rutáceas (ruda, cítricos y parientes)',
  },
  {
    species: 'Vanessa cardui (Cardo)',
    status: 'Cosmopolita migratoria',
    season: 'Migratoria de paso (primavera-otoño).',
    hosts: 'Variada, generalista.',
  },
];

const speciesTableEn = [
  {
    species: 'Danaus plexippus (Monarch)',
    status: 'NOM-059: Special Protection; CITES II (ND)',
    season: 'Migratory: overwinters in Mexico (Nov) and breeds in spring–summer.',
    hosts: 'Asclepias spp. (milkweeds, e.g. A. curassavica)',
  },
  {
    species: 'Morpho peleides (Blue Morpho)',
    status: 'Not assessed (genus CITES II)',
    season: 'Tropical: peaks in rainy season (May–Oct).',
    hosts: 'Legumes: Machaerium seemanii, Lonchocarpus spp. (Fabaceae)',
  },
  {
    species: 'Heliconius charithonia (Zebra longwing)',
    status: 'Common tropical',
    season: 'Year-round, higher in wet season.',
    hosts: 'Passiflora spp. (passionflowers)',
  },
  {
    species: 'Agraulis vanillae (Gulf fritillary)',
    status: 'Common tropical',
    season: 'Year-round, local migrations.',
    hosts: 'Passiflora spp. (passionflowers)',
  },
  {
    species: 'Papilio garamas',
    status: 'Local; no CITES',
    season: 'Year-round (tropical).',
    hosts: 'Rutaceae (rue, citrus relatives)',
  },
  {
    species: 'Vanessa cardui (Painted Lady)',
    status: 'Cosmopolitan migrant',
    season: 'Migratory passage (spring–fall).',
    hosts: 'Generalist on many herbs.',
  },
];

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const content = useMemo(() => {
    if (language === 'en') {
      return {
        title: 'El Jardín MorfoMonarca',
        subtitle:
          'A conservation and education initiative in Puerto Vallarta and Banderas Bay, focused on monarchs, morphos, and native pollinator habitats.',
        summary:
          'This project combines habitat restoration, responsible captive rearing, and community education to protect butterfly biodiversity in the region.',
        sections: [
          {
            id: 'biodiversity',
            heading: '1. Local biodiversity analysis',
            navLabel: 'Biodiversity',
            body: [
              'The Puerto Vallarta and Banderas Bay region hosts over 192 documented butterfly species. Standout natives include Morpho peleides (blue morpho), Heliconius charithonia (zebra longwing), Agraulis vanillae (gulf fritillary), Papilio garamas, and Phoebis sennae, alongside Lycaenidae and Pieridae families.',
              'Seasonal migrants include Danaus plexippus (monarch), which overwinters in Mexico and is listed under NOM-059 as Special Protection. Other migrants such as Vanessa cardui and Danaus gilippus appear during passages.',
            ],
          },
          {
            id: 'species',
            heading: 'Key species near Paso del Guayabo',
            navLabel: 'Key species',
            body: [
              'Representative species, ecological status, active season, and larval host plants are summarized below.',
            ],
            variant: 'table' as const,
          },
          {
            id: 'rearing',
            heading: '2. Breeding requirements (Monarch + Blue Morpho)',
            navLabel: 'Rearing',
            body: [
              'Monarchs require Asclepias host plants for eggs and larvae, stable pupation sites, and nectar-rich adult feeding zones. Ideal rearing conditions are 20–25°C with moderate humidity.',
              'Blue morphos rely on Fabaceae hosts (Machaerium, Lonchocarpus, Mucuna). Rearing benefits from 24–28°C, high humidity, and partial shade, with adults feeding on ripe fruit and nectar.',
            ],
            listTitle: 'Shared care essentials',
            list: [
              'Mesh enclosures with easy-clean access and filtered sunlight.',
              'Daily sanitation to prevent pathogens and parasites.',
              'Separate rearing stages (eggs, larvae, pupae, adults) for monitoring.',
            ],
          },
          {
            id: 'permits',
            heading: '3. Legal compliance and permits',
            navLabel: 'Permits',
            body: [
              'In Mexico, breeding or transporting native butterflies requires UMA registration and SEMARNAT authorization. Monarchs are protected by NOM-059 and Morpho species may fall under CITES II.',
              'International transport requires SEMARNAT-08-009 export/import permits plus U.S. USDA-APHIS authorization and, where applicable, USFWS CITES documentation.',
            ],
          },
          {
            id: 'equipment',
            heading: '4. Equipment, kits, and suppliers',
            navLabel: 'Equipment',
            body: [
              'Education kits and mesh flight cages (50–60 cm) are available via local and online vendors. Recommended equipment includes rearing trays, humidity control, entomological tools, and nectar/fruit feeders.',
              'Key host plants include Asclepias spp., Passiflora spp., and Fabaceae hosts (Mucuna, Lonchocarpus).',
            ],
          },
          {
            id: 'grants',
            heading: '5. Grants, programs, and incentives',
            navLabel: 'Grants',
            body: [
              'Potential funding sources include SEMARNAT/CONANP programs (PROREST, PROCODES), CONAFOR ecosystem services, and state-level conservation funds in Jalisco.',
              'In the U.S., NFWF’s Monarch Butterfly and Pollinators Conservation Fund and NRCS EQIP provide cost-share and grant opportunities.',
            ],
          },
          {
            id: 'partners',
            heading: '6. Partner organizations and precedents',
            navLabel: 'Partners',
            body: [
              'The legacy of Homero Gómez González and networks like Eco-Monarca A.C., Rescate Monarca A.C., and the Red Nacional de Jardines Polinizadores provide regional expertise and collaboration pathways.',
            ],
          },
          {
            id: 'digital',
            heading: '7. Digital and educational infrastructure',
            navLabel: 'Digital',
            body: [
              'The project will offer a bilingual landing page, accessible content, and interactive materials (flipbooks, AR/VR, and mobile experiences) focused on life cycles and migration.',
              'Integrate real-time migration tracking using public datasets (Journey North, Monarch Watch) and telemetry visualizations.',
            ],
          },
        ],
        ctaTitle: 'Get involved',
        ctaBody:
          'Join volunteer days, sponsor host-plant propagation, or support classroom programs. We’ll share updates, events, and ways to help.',
        emailTitle: 'Stay informed',
        emailForm: {
          placeholder: 'Enter your email',
          buttonLabel: 'Subscribe',
          invalidTitle: 'Invalid email',
          invalidDescription: 'Please enter a valid email address.',
          successTitle: 'Success!',
          successDescription: "Thank you for your interest. We'll be in touch soon!",
        },
        quickLinksLabel: 'Jump to section',
      };
    }

    return {
      title: 'El Jardín MorfoMonarca',
      subtitle:
        'Una iniciativa de conservación y educación en Puerto Vallarta y Bahía de Banderas, enfocada en monarcas, morphos y hábitats nativos.',
      summary:
        'El proyecto integra restauración de hábitats, crianza responsable y educación comunitaria para proteger la biodiversidad de mariposas.',
      sections: [
        {
          id: 'biodiversidad',
          heading: '1. Análisis de biodiversidad local',
          navLabel: 'Biodiversidad',
          body: [
            'La región de Puerto Vallarta y Bahía de Banderas alberga más de 192 especies de mariposas diurnas. Destacan Morpho peleides (Morpho azul), Heliconius charithonia (Cebra), Agraulis vanillae (Flamenca), Papilio garamas y Phoebis sennae, junto con familias Lycaenidae y Pieridae.',
            'Entre los migrantes estacionales está Danaus plexippus (Monarca), en categoría de Protección Especial (NOM-059). También se observan migraciones de Vanessa cardui y Danaus gilippus.',
          ],
        },
        {
          id: 'especies',
          heading: 'Especies clave en Paso del Guayabo',
          navLabel: 'Especies',
          body: [
            'Resumen de especies representativas, estatus ecológico, temporada activa y plantas hospedantes larvarias.',
          ],
          variant: 'table' as const,
        },
        {
          id: 'crianza',
          heading: '2. Requerimientos de crianza (Monarca + Morpho azul)',
          navLabel: 'Crianza',
          body: [
            'La Monarca requiere Asclepias para huevos y orugas, sitios estables de pupación y flores nectaríferas para adultos. Condiciones ideales: 20–25°C y humedad moderada.',
            'El Morpho azul utiliza hospederos Fabaceae (Machaerium, Lonchocarpus, Mucuna). En cautiverio necesita 24–28°C, alta humedad y sombra parcial; los adultos prefieren fruta madura y néctar.',
          ],
          listTitle: 'Cuidados compartidos',
          list: [
            'Jaulas de malla con acceso para limpieza y sol filtrado.',
            'Higiene diaria para evitar patógenos y parásitos.',
            'Separación por etapas (huevos, larvas, pupas, adultos).',
          ],
        },
        {
          id: 'permisos',
          heading: '3. Cumplimiento legal y permisos',
          navLabel: 'Permisos',
          body: [
            'En México, la crianza y transporte de mariposas requiere registro UMA y autorización SEMARNAT. La Monarca está protegida por NOM-059 y Morpho spp. puede estar en CITES II.',
            'Para traslados internacionales se necesita permiso SEMARNAT-08-009, autorización USDA-APHIS y, cuando aplique, certificado CITES de USFWS.',
          ],
        },
        {
          id: 'equipamiento',
          heading: '4. Equipamiento, kits y proveedores',
          navLabel: 'Equipamiento',
          body: [
            'Existen kits educativos y mariposarios de malla (50–60 cm). Se recomienda contar con bandejas de crianza, control de humedad, herramientas entomológicas y comederos de néctar/fruta.',
            'Plantas clave: Asclepias spp., Passiflora spp., y hospederos Fabaceae (Mucuna, Lonchocarpus).',
          ],
        },
        {
          id: 'subvenciones',
          heading: '5. Subvenciones, programas e incentivos',
          navLabel: 'Subvenciones',
          body: [
            'Fuentes potenciales: SEMARNAT/CONANP (PROREST, PROCODES), pagos por servicios ambientales de CONAFOR, y fondos estatales de conservación en Jalisco.',
            'En EE.UU., el fondo de NFWF para polinizadores y programas NRCS EQIP ofrecen apoyo financiero.',
          ],
        },
        {
          id: 'aliados',
          heading: '6. Organizaciones aliadas y antecedentes',
          navLabel: 'Aliados',
          body: [
            'El legado de Homero Gómez González y redes como Eco-Monarca A.C., Rescate Monarca A.C. y la Red Nacional de Jardines Polinizadores ofrecen experiencia y colaboración regional.',
          ],
        },
        {
          id: 'infraestructura',
          heading: '7. Infraestructura digital y educativa',
          navLabel: 'Infraestructura',
          body: [
            'El proyecto contará con landing page bilingüe, contenido accesible y materiales interactivos (flipbooks, AR/VR, experiencias móviles) sobre ciclos de vida y migración.',
            'Se integrará seguimiento de migración en tiempo real con datos abiertos (Journey North, Monarch Watch) y visualizaciones científicas.',
          ],
        },
      ],
      ctaTitle: 'Participa',
      ctaBody:
        'Únete como voluntario, apoya la propagación de plantas hospederas o patrocina talleres educativos. Compartiremos eventos y formas de colaborar.',
      emailTitle: 'Mantente informado',
      emailForm: {
        placeholder: 'Ingresa tu correo electrónico',
        buttonLabel: 'Suscribirme',
        invalidTitle: 'Correo inválido',
        invalidDescription: 'Por favor ingresa un correo electrónico válido.',
        successTitle: '¡Gracias!',
        successDescription: 'Tu interés ha sido registrado. Te escribiremos pronto.',
      },
      quickLinksLabel: 'Ir a sección',
    };
  }, [language]);

  const speciesRows = language === 'en' ? speciesTableEn : speciesTable;

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

      <div className="relative z-10 flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <header className="flex flex-wrap items-start justify-between gap-6 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-morpho-900 animate-fade-up">
                {content.title}
              </h1>
              <p className="text-lg md:text-xl text-morpho-800 max-w-2xl mt-3 animate-fade-up">
                {content.subtitle}
              </p>
              <p className="mt-4 text-morpho-900/90 max-w-2xl">{content.summary}</p>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-end">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  aria-pressed={language === 'es'}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    language === 'es'
                      ? 'bg-morpho-700 text-white border-morpho-700'
                      : 'bg-white/70 text-morpho-800 border-morpho-300'
                  }`}
                >
                  Español
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
                    language === 'en'
                      ? 'bg-morpho-700 text-white border-morpho-700'
                      : 'bg-white/70 text-morpho-800 border-morpho-300'
                  }`}
                >
                  English
                </button>
              </div>
              <div className="text-sm text-morpho-700">{content.quickLinksLabel}</div>
              <nav className="flex flex-wrap gap-2">
                {content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-3 py-1 rounded-full bg-white/70 border border-white/80 text-morpho-800 text-xs font-semibold hover:bg-white"
                  >
                    {section.navLabel ?? section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <main className="space-y-10">
            {content.sections.map((section) => (
              <section
                id={section.id}
                key={section.heading}
                className="scroll-mt-24 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-morpho-900 mb-4">{section.heading}</h2>
                <div className="space-y-4 text-morpho-900/90">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.variant === 'table' && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full text-left border-collapse">
                      <caption className="text-sm text-morpho-700 mb-3">
                        {language === 'en'
                          ? 'Key species near Paso del Guayabo and their ecological context.'
                          : 'Especies clave en Paso del Guayabo y su contexto ecológico.'}
                      </caption>
                      <thead>
                        <tr className="border-b border-morpho-200 text-morpho-800">
                          <th className="py-2 pr-4 font-semibold">
                            {language === 'en' ? 'Species' : 'Especie'}
                          </th>
                          <th className="py-2 pr-4 font-semibold">
                            {language === 'en' ? 'Status / CITES' : 'Estatus / CITES'}
                          </th>
                          <th className="py-2 pr-4 font-semibold">
                            {language === 'en' ? 'Main season' : 'Temporada principal'}
                          </th>
                          <th className="py-2 pr-4 font-semibold">
                            {language === 'en' ? 'Larval hosts' : 'Plantas hospedantes'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-morpho-900/90">
                        {speciesRows.map((row) => (
                          <tr key={row.species} className="border-b border-morpho-100">
                            <td className="py-3 pr-4 font-medium text-morpho-900">{row.species}</td>
                            <td className="py-3 pr-4">{row.status}</td>
                            <td className="py-3 pr-4">{row.season}</td>
                            <td className="py-3 pr-4">{row.hosts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.list && (
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-morpho-800 mb-2">{section.listTitle}</h3>
                    <ul className="list-disc list-inside space-y-1 text-morpho-900/90">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </main>

          <section className="mt-12 bg-morpho-800 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{content.ctaTitle}</h2>
            <p className="text-lg text-white/90 max-w-3xl">{content.ctaBody}</p>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-wide text-white/70 mb-2">{content.emailTitle}</p>
              <EmailForm
                placeholder={content.emailForm.placeholder}
                buttonLabel={content.emailForm.buttonLabel}
                invalidTitle={content.emailForm.invalidTitle}
                invalidDescription={content.emailForm.invalidDescription}
                successTitle={content.emailForm.successTitle}
                successDescription={content.emailForm.successDescription}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
