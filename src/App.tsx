import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Heart,
  Target,
  Compass,
  Award,
  ChevronRight,
  Book,
  Scale,
  Brain,
} from "lucide-react";

const App = () => {
  const [selectedCompetencia, setSelectedCompetencia] = useState<number | null>(
    null
  );
  const [showDefiniciones, setShowDefiniciones] = useState(false);

  const definiciones = [
    {
      termino: "Educación Emocional",
      definicion:
        "Proceso educativo, continuo y permanente que pretende potenciar el desarrollo de las competencias emocionales como elemento esencial del desarrollo humano, con objeto de capacitarle para la vida y con la finalidad de aumentar el bienestar personal y social.",
    },
    {
      termino: "Competencias Emocionales",
      definicion:
        "Conjunto de conocimientos, capacidades, habilidades y actitudes necesarias para comprender, expresar y regular de forma apropiada los fenómenos emocionales.",
    },
    {
      termino: "Inteligencia Emocional",
      definicion:
        "Habilidad para percibir, valorar y expresar emociones con exactitud, la habilidad para acceder y/o generar sentimientos que faciliten el pensamiento; la habilidad para comprender emociones y el conocimiento emocional y la habilidad para regular las emociones promoviendo un crecimiento emocional e intelectual.",
    },
    {
      termino: "Conciencia Emocional",
      definicion:
        "Capacidad para tomar conciencia de las propias emociones y de las emociones de los demás, incluyendo la habilidad para captar el clima emocional de un contexto determinado.",
    },
    {
      termino: "Regulación Emocional",
      definicion:
        "Capacidad para manejar las emociones de forma apropiada. Supone tomar conciencia de la relación entre emoción, cognición y comportamiento; tener buenas estrategias de afrontamiento; capacidad para autogenerarse emociones positivas.",
    },
  ];

  const competenciasSocioemocionales = [
    {
      id: 1,
      nombre: "Conciencia Emocional",
      definicion:
        "Capacidad para reconocer e identificar las propias emociones y las de otros, comprendiendo su impacto en el comportamiento y las relaciones interpersonales.",
      conceptosClave: [
        "Autoconciencia emocional",
        "Conciencia emocional social",
        "Reconocimiento de emociones",
        "Vocabulario emocional",
        "Expresión emocional apropiada",
      ],
      beneficios: [
        "Mejora la toma de decisiones",
        "Fortalece las relaciones interpersonales",
        "Reduce conflictos y malentendidos",
        "Aumenta la empatía",
        "Desarrolla la inteligencia emocional",
      ],
      comoPracticar: [
        "Llevar un diario emocional diario",
        "Practicar mindfulness y meditación",
        "Observar las reacciones corporales ante emociones",
        "Nombrar las emociones cuando las experimentes",
        "Reflexionar sobre situaciones emocionales del día",
      ],
    },
    {
      id: 2,
      nombre: "Autorregulación Emocional",
      definicion:
        "Habilidad para gestionar y controlar las propias emociones de manera apropiada, adaptándose a diferentes situaciones y contextos.",
      conceptosClave: [
        "Control de impulsos",
        "Gestión del estrés",
        "Flexibilidad emocional",
        "Tolerancia a la frustración",
        "Estrategias de afrontamiento",
      ],
      beneficios: [
        "Mejora el rendimiento académico",
        "Reduce la ansiedad y el estrés",
        "Fortalece la resiliencia",
        "Mejora las relaciones sociales",
        "Aumenta la autoestima",
      ],
      comoPracticar: [
        "Técnicas de respiración profunda",
        "Ejercicios de relajación muscular",
        "Pausar antes de reaccionar",
        "Identificar desencadenantes emocionales",
        "Desarrollar rutinas de autocuidado",
      ],
    },
    {
      id: 3,
      nombre: "Empatía",
      definicion:
        "Capacidad para comprender y compartir los sentimientos de otras personas, poniéndose en su lugar y respondiendo de manera apropiada.",
      conceptosClave: [
        "Comprensión emocional",
        "Perspectiva social",
        "Compasión",
        "Sensibilidad interpersonal",
        "Respuesta empática",
      ],
      beneficios: [
        "Fortalece vínculos sociales",
        "Mejora la comunicación",
        "Reduce comportamientos agresivos",
        "Desarrolla liderazgo positivo",
        "Fomenta la cooperación",
      ],
      comoPracticar: [
        "Escuchar activamente a otros",
        "Observar lenguaje corporal",
        "Hacer preguntas sobre sentimientos",
        "Practicar la perspectiva de otros",
        "Realizar actos de bondad",
      ],
    },
    {
      id: 4,
      nombre: "Habilidades Sociales",
      definicion:
        "Conjunto de comportamientos y destrezas que facilitan la interacción efectiva y armoniosa con otros en diferentes contextos sociales.",
      conceptosClave: [
        "Comunicación asertiva",
        "Resolución de conflictos",
        "Trabajo en equipo",
        "Liderazgo colaborativo",
        "Negociación",
      ],
      beneficios: [
        "Mejora las relaciones interpersonales",
        "Aumenta la confianza social",
        "Facilita el trabajo colaborativo",
        "Reduce la timidez",
        "Desarrolla habilidades de liderazgo",
      ],
      comoPracticar: [
        "Participar en actividades grupales",
        "Practicar conversaciones",
        "Resolver conflictos de manera pacífica",
        "Colaborar en proyectos",
        "Expresar ideas con claridad",
      ],
    },
    {
      id: 5,
      nombre: "Toma de Decisiones Responsable",
      definicion:
        "Capacidad para hacer elecciones constructivas y éticas sobre el comportamiento personal y social, considerando las consecuencias para uno mismo y otros.",
      conceptosClave: [
        "Pensamiento crítico",
        "Evaluación de consecuencias",
        "Valores éticos",
        "Responsabilidad personal",
        "Solución de problemas",
      ],
      beneficios: [
        "Mejora la autonomía personal",
        "Desarrolla el pensamiento crítico",
        "Fortalece la integridad",
        "Reduce comportamientos de riesgo",
        "Aumenta la confianza en sí mismo",
      ],
      comoPracticar: [
        "Analizar pros y contras de decisiones",
        "Considerar múltiples perspectivas",
        "Reflexionar sobre valores personales",
        "Evaluar consecuencias a largo plazo",
        "Buscar consejos cuando sea necesario",
      ],
    },
  ];

  const niveles = [
    {
      nivel: "ECO 0",
      grados: "Prejardín y Transición",
      eje: "Reconocimiento sensorial y emocional",
      color: "bg-pink-100 border-pink-300",
      icon: Heart,
      periodos: [
        {
          periodo: "1",
          taller: "Reconozco lo que siento",
          competencias: ["Autoconciencia emocional"],
          habilidades: [
            "Identificar emociones básicas",
            "Nombrar emociones",
            "Comunicar estados emocionales",
          ],
          logro: "Identifica cuándo está alegre, triste, enojado o asustado",
        },
        {
          periodo: "2",
          taller: "Me calmo y aprendo",
          competencias: ["Autorregulación básica"],
          habilidades: [
            "Reconocer señales corporales",
            "Aplicar técnicas de calma",
            "Pedir ayuda",
          ],
          logro: "Aplica respiración, contar o buscar ayuda para calmarse",
        },
        {
          periodo: "3",
          taller: "Me relaciono con los demás",
          competencias: ["Habilidades sociales iniciales"],
          habilidades: [
            "Compartir",
            "Esperar turnos",
            "Escuchar a otros",
            "Respetar diferencias",
          ],
          logro: "Juega cooperativamente y respeta a sus compañeros",
        },
        {
          periodo: "4",
          taller: "Decido bien",
          competencias: ["Toma de decisiones guiada"],
          habilidades: [
            "Elegir entre opciones",
            "Pensar antes de actuar",
            "Seguir reglas",
          ],
          logro: "Toma decisiones simples con ayuda del adulto",
        },
      ],
    },
    {
      nivel: "ECO 1",
      grados: "1°, 2° y 3°",
      eje: "Exploración emocional y social",
      color: "bg-blue-100 border-blue-300",
      icon: Compass,
      periodos: [
        {
          periodo: "1",
          taller: "Exploro mis emociones",
          competencias: ["Conciencia emocional expandida"],
          habilidades: [
            "Identificar emociones complejas",
            "Describir intensidades",
            "Reconocer desencadenantes",
          ],
          logro: "Identifica y nombra al menos 8 emociones diferentes",
        },
        {
          periodo: "2",
          taller: "Controlo mis reacciones",
          competencias: ["Autorregulación progresiva"],
          habilidades: [
            "Estrategias de calma",
            "Control de impulsos",
            "Expresión apropiada",
          ],
          logro: "Usa estrategias para manejar emociones intensas",
        },
        {
          periodo: "3",
          taller: "Entiendo a otros",
          competencias: ["Empatía inicial"],
          habilidades: [
            "Reconocer emociones en otros",
            "Mostrar comprensión",
            "Ofrecer apoyo",
          ],
          logro: "Reconoce cuando otros están tristes o felices y ofrece ayuda",
        },
        {
          periodo: "4",
          taller: "Trabajo en equipo",
          competencias: ["Habilidades sociales cooperativas"],
          habilidades: [
            "Colaboración",
            "Comunicación básica",
            "Resolución simple",
          ],
          logro: "Participa efectivamente en actividades grupales",
        },
      ],
    },
    {
      nivel: "ECO 2",
      grados: "4° y 5°",
      eje: "Desarrollo de competencias emocionales",
      color: "bg-green-100 border-green-300",
      icon: Target,
      periodos: [
        {
          periodo: "1",
          taller: "Conozco mi mundo emocional",
          competencias: ["Autoconocimiento emocional"],
          habilidades: [
            "Autoanálisis",
            "Identificación de patrones",
            "Reflexión emocional",
          ],
          logro: "Reflexiona sobre sus emociones e identifica patrones",
        },
        {
          periodo: "2",
          taller: "Gestiono mis emociones",
          competencias: ["Autorregulación consciente"],
          habilidades: [
            "Técnicas de autorregulación",
            "Planificación emocional",
            "Adaptabilidad",
          ],
          logro: "Aplica técnicas específicas para regular sus emociones",
        },
        {
          periodo: "3",
          taller: "Me conecto con otros",
          competencias: ["Empatía activa"],
          habilidades: [
            "Comprensión perspectiva",
            "Apoyo emocional",
            "Comunicación empática",
          ],
          logro: "Demuestra comprensión y apoyo hacia las emociones de otros",
        },
        {
          periodo: "4",
          taller: "Resuelvo conflictos",
          competencias: ["Habilidades sociales avanzadas"],
          habilidades: [
            "Mediación",
            "Negociación básica",
            "Comunicación asertiva",
          ],
          logro: "Participa en la resolución pacífica de conflictos",
        },
      ],
    },
    {
      nivel: "ECO 3",
      grados: "6° y 7°",
      eje: "Fortalecimiento de la inteligencia emocional",
      color: "bg-yellow-100 border-yellow-300",
      icon: Award,
      periodos: [
        {
          periodo: "1",
          taller: "Maestro de mis emociones",
          competencias: ["Dominio emocional"],
          habilidades: [
            "Metacognición emocional",
            "Autocontrol avanzado",
            "Expresión madura",
          ],
          logro: "Demuestra alto nivel de autocontrol y expresión emocional",
        },
        {
          periodo: "2",
          taller: "Regulación experta",
          competencias: ["Autorregulación sofisticada"],
          habilidades: [
            "Estrategias múltiples",
            "Prevención emocional",
            "Recuperación rápida",
          ],
          logro:
            "Utiliza múltiples estrategias de autorregulación efectivamente",
        },
        {
          periodo: "3",
          taller: "Líder empático",
          competencias: ["Liderazgo empático"],
          habilidades: [
            "Influencia positiva",
            "Motivación de otros",
            "Crear ambiente positivo",
          ],
          logro: "Ejerce liderazgo positivo basado en la empatía",
        },
        {
          periodo: "4",
          taller: "Ciudadano responsable",
          competencias: ["Responsabilidad social"],
          habilidades: [
            "Decisiones éticas",
            "Impacto social",
            "Compromiso comunitario",
          ],
          logro: "Toma decisiones considerando el impacto en la comunidad",
        },
      ],
    },
    {
      nivel: "ECO 4",
      grados: "8° y 9°",
      eje: "Aplicación práctica de competencias socioemocionales",
      color: "bg-purple-100 border-purple-300",
      icon: Users,
      periodos: [
        {
          periodo: "1",
          taller: "Identidad emocional adolescente",
          competencias: ["Autoconocimiento en desarrollo"],
          habilidades: [
            "Gestión de cambios",
            "Identidad personal",
            "Autoestima saludable",
          ],
          logro:
            "Desarrolla una identidad emocional positiva en la adolescencia",
        },
        {
          periodo: "2",
          taller: "Navegando la adolescencia",
          competencias: ["Autorregulación en transición"],
          habilidades: [
            "Manejo de estrés académico",
            "Control de ansiedad",
            "Adaptación social",
          ],
          logro:
            "Gestiona efectivamente los desafíos emocionales de la adolescencia",
        },
        {
          periodo: "3",
          taller: "Relaciones significativas",
          competencias: ["Empatía en relaciones complejas"],
          habilidades: [
            "Amistad saludable",
            "Comunicación profunda",
            "Apoyo mutuo",
          ],
          logro: "Construye y mantiene relaciones interpersonales saludables",
        },
        {
          periodo: "4",
          taller: "Proyecto de vida",
          competencias: ["Decisiones de futuro"],
          habilidades: [
            "Planificación personal",
            "Metas realistas",
            "Valores claros",
          ],
          logro:
            "Desarrolla un proyecto de vida con base en valores y metas claras",
        },
      ],
    },
    {
      nivel: "ECO 5",
      grados: "10° y 11°",
      eje: "Liderazgo emocional y social",
      color: "bg-indigo-100 border-indigo-300",
      icon: BookOpen,
      periodos: [
        {
          periodo: "1",
          taller: "Liderazgo emocional",
          competencias: ["Inteligencia emocional avanzada"],
          habilidades: [
            "Influencia positiva",
            "Motivación grupal",
            "Gestión de equipos",
          ],
          logro: "Ejerce liderazgo emocional efectivo en su entorno",
        },
        {
          periodo: "2",
          taller: "Autorregulación bajo presión",
          competencias: ["Resiliencia avanzada"],
          habilidades: [
            "Manejo de crisis",
            "Toma de decisiones bajo presión",
            "Recuperación emocional",
          ],
          logro: "Mantiene la autorregulación en situaciones de alta presión",
        },
        {
          periodo: "3",
          taller: "Agente de cambio social",
          competencias: ["Empatía transformadora"],
          habilidades: [
            "Impacto social",
            "Activismo constructivo",
            "Transformación comunitaria",
          ],
          logro: "Actúa como agente de cambio positivo en su comunidad",
        },
        {
          periodo: "4",
          taller: "Ciudadano global",
          competencias: ["Responsabilidad global"],
          habilidades: [
            "Pensamiento crítico global",
            "Sostenibilidad",
            "Cooperación internacional",
          ],
          logro: "Demuestra responsabilidad como ciudadano global consciente",
        },
      ],
    },
  ];

  const scrollToSection = (nivel: string) => {
    const element = document.getElementById(nivel);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Proyecto ECO - Educación de Competencias Socioemocionales
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Desarrollo integral de competencias socioemocionales desde
            preescolar hasta media, fundamentado en las Leyes 2491 y 2503 de
            2025
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Compass className="mr-2" />
            Navegación Rápida por Niveles ECO
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {niveles.map((nivel) => (
              <button
                key={nivel.nivel}
                onClick={() => scrollToSection(nivel.nivel)}
                className={`${nivel.color} p-4 rounded-lg border-2 hover:shadow-md transition-all duration-200 text-center`}
              >
                <nivel.icon className="mx-auto mb-2" size={24} />
                <div className="font-semibold">{nivel.nivel}</div>
                <div className="text-sm text-gray-600">{nivel.grados}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Scale className="mr-2" />
              Definiciones Fundamentales (Ley 2503/2025)
            </h2>
            <button
              onClick={() => setShowDefiniciones(!showDefiniciones)}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors mb-4"
            >
              {showDefiniciones ? "Ocultar Definiciones" : "Ver Definiciones"}
            </button>

            {showDefiniciones && (
              <div className="space-y-4">
                {definiciones.map((def, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-400 pl-4 py-2"
                  >
                    <h3 className="font-semibold text-blue-700">
                      {def.termino}
                    </h3>
                    <p className="text-gray-700 text-sm mt-1">
                      {def.definicion}
                    </p>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                  <strong>Fuente:</strong> Ley 2503 de 2025, Artículo 2 -
                  Definiciones. Congreso de la República de Colombia.
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Brain className="mr-2" />
              Competencias Socioemocionales (Ley 2491/2025)
            </h2>
            <div className="space-y-2 mb-4">
              {competenciasSocioemocionales.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() =>
                    setSelectedCompetencia(
                      selectedCompetencia === comp.id ? null : comp.id
                    )
                  }
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span className="font-medium">{comp.nombre}</span>
                  <ChevronRight
                    className={`transform transition-transform ${
                      selectedCompetencia === comp.id ? "rotate-90" : ""
                    }`}
                    size={16}
                  />
                </button>
              ))}
            </div>

            {selectedCompetencia && (
              <div className="bg-blue-50 p-4 rounded-lg">
                {competenciasSocioemocionales
                  .filter((comp) => comp.id === selectedCompetencia)
                  .map((comp) => (
                    <div key={comp.id}>
                      <h3 className="font-bold text-blue-800 mb-2">
                        {comp.nombre}
                      </h3>

                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700">
                          Definición:
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {comp.definicion}
                        </p>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700">
                          Conceptos Clave:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {comp.conceptosClave.map((concepto, idx) => (
                            <li key={idx}>{concepto}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700">
                          Beneficios:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {comp.beneficios.map((beneficio, idx) => (
                            <li key={idx}>{beneficio}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-700">
                          ¿Cómo practicarla?:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {comp.comoPracticar.map((practica, idx) => (
                            <li key={idx}>{practica}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 p-2 bg-white rounded text-xs">
                        <strong>Fuente:</strong> Ley 2491 de 2025, Artículo 5,
                        Parágrafo 5. Congreso de la República de Colombia.
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {niveles.map((nivel, index) => (
            <div key={index} id={nivel.nivel} className="scroll-mt-24">
              <div
                className={`${nivel.color} rounded-xl border-2 overflow-hidden shadow-lg`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <nivel.icon className="mr-3 text-gray-700" size={32} />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {nivel.nivel}
                      </h2>
                      <p className="text-lg text-gray-600">
                        {nivel.grados} - {nivel.eje}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {nivel.periodos.map((periodo, pIndex) => (
                      <div
                        key={pIndex}
                        className="bg-white rounded-lg p-4 shadow-md"
                      >
                        <div className="flex items-center mb-3">
                          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                            <span className="font-bold text-gray-700">
                              {periodo.periodo}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-800">
                            {periodo.taller}
                          </h3>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-blue-700 text-sm mb-1">
                              Competencias:
                            </h4>
                            <ul className="text-xs text-gray-600">
                              {periodo.competencias.map((comp, cIndex) => (
                                <li key={cIndex} className="mb-1">
                                  • {comp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-green-700 text-sm mb-1">
                              Habilidades:
                            </h4>
                            <ul className="text-xs text-gray-600">
                              {periodo.habilidades.map((hab, hIndex) => (
                                <li key={hIndex} className="mb-1">
                                  • {hab}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-purple-700 text-sm mb-1">
                              Logro:
                            </h4>
                            <p className="text-xs text-gray-600 italic">
                              {periodo.logro}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Book className="mr-2" />
            Fuentes Bibliográficas
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              • <strong>Ley 2491 de 2025</strong> - "Por la cual se incorpora a
              los proyectos educativos institucionales el componente de
              competencias socioemocionales en Colombia". Congreso de la
              República de Colombia.
            </p>
            <p>
              • <strong>Ley 2503 de 2025</strong> - "Por medio de la cual se
              crea y se implementa la cátedra de educación emocional en todas
              las instituciones educativas de Colombia". Congreso de la
              República de Colombia.
            </p>
            <p>
              • <strong>Ministerio de Educación Nacional</strong> - Lineamientos
              para el desarrollo de competencias socioemocionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
