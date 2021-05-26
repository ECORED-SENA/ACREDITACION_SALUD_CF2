export default {
  global: {
    componenteFormativo: 'Proceso de autoevaluación',
    descripcionCurso:
      'El presente contenido pedagógico está dirigido a la apropiación del conocimiento para la autoevaluación de los estándares de acreditación,   aplicando las herramientas colaborativas en cada equipo institucional que participará en el proceso, abordando el ciclo de mejora continua incluyendo las dimensiones de: enfoque, implementación, resultados, evaluación cualitativa y cuantitativa;  implementación de mejoras y el cierre de brechas en los hallazgos, su articulación con metas, indicadores, auto calificación y referencia interna entre procesos - servicios y  competencia. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    //fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de autoevaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodologías para la autoevaluación.',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Herramientas para la autoevaluación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Abordaje de los estándares',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'TIntegralidad con equipos',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Néstor Omar Correa Preciado',
          'Cesar Roberto Ocaña Poveda',
          'Jessica Lozano',
        ],
        cargo: ['Expertos temáticos.', 'Asesores oficina calidad.'],
        centro: 'Ministerio de Salud y Protección Social.',
      },
      {
        nombre: ['María Fernanda Moreno Brand', 'Viviana Ruíz Vergara'],
        cargo: 'Profesionales Especializados SENA',
        centro: 'Centro de Formación de Talento Humano en Salud',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido ',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (5 de febrero de 2016) Resolución 256 de 2016. Recuperado de',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200256%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de salud y Protección social (2014, 29 mayo). Resolución 2085 de 2014. Recuperado de',
      link:
        'https://www.medellin.gov.co/normograma/docs/astrea/docs/R_SMMED_2085_2015.htm',
    },
  ],
  glosario: [
    {
      termino: 'Control de calidad',
      significado:
        'Conjunto de medidas diseñadas para asegurar y verificar la calidad de los productos y servicios, en las diferentes fases de los procesos de atención en salud, mediante el análisis de la estructura, el proceso y los resultados, que rinde cuentas a las partes interesadas.',
    },
    {
      termino: 'Control de calidad externo',
      significado:
        'Procesos mediante los cuales se realiza evaluación de calidad de los resultados, mediante la intervención y control periódico de una tercera parte competente, que pone a prueba la exactitud y comparabilidad en el resultado de los procesos.',
    },
    {
      termino: 'Control de calidad Interno',
      significado:
        'Conjunto de procedimientos aplicados, en el marco de un proceso sistemático, para el control constante de las operaciones y los resultados a fin de decidir si son suficientemente válidos, confiables y fiables para su divulgación. En este control de calidad se comprueba ante todo la veracidad y precisión de los resultados.',
    },
    {
      termino: 'Cultura Organizacional',
      significado:
        'Conjunto de valores, creencias y maneras de hacer las cosas, que se producen como resultado de la interacción y del comportamiento de los miembros de una organización con sus componentes formales (direccionamiento estratégico, estructura, procedimientos, etc.) sus componentes informales, los medios y el estilo de comunicación y su relación con el medio ambiente. La cultura es aquello que caracteriza a una organización y la hace singular y diferente de otra, se expresa en sus actos, costumbres, lenguaje, liderazgo y comunicación. La cultura se modifica a lo largo del tiempo y puede ser objeto de direccionamiento, gerencia, evaluación y mejoramiento.',
    },
  ],
  complementario: [
    {
      texto: 'Indicadores de acreditación y habilitación ',
      tipo: 'Guía',
      link:
        'downloads/F-PS-055 SOLICITUD_DE_INFORMACIÓN_E_INDICADORES_INSTITUCIONALES.xlsm',
    },
    {
      texto: 'Herramientas para la autoevaluación.',
      tipo: 'Documento proceso.',
      link: 'downloads/Ruta-crítica-V8-marzo-2018.pdf',
    },
    //revisar enlace
    {
      texto: 'Metodologías para la autoevaluación.',
      tipo: 'Guía',
      link: 'downloads/Guia-de-preparacion-para-acreditacion.pdf',
    },
    {
      texto: 'Herramientas para la autoevaluación.',
      tipo: 'Guía',
      link: 'https://acreditacionensalud.org.co/ips-hospitalarias/',
    },
    {
      texto: 'Herramientas para la autoevaluación.',
      tipo: 'Formato',
      link: 'https://acreditacionensalud.org.co/ips-hospitalarias/',
    },
    {
      texto: 'Herramientas para la autoevaluación.',
      tipo: 'Guía',
      link: 'downloads/seguridad-unidad-cuidados-intensivos.pdf',
    },
    {
      texto: 'Herramientas para la autoevaluación.',
      tipo: 'Guía',
      link: 'downloads/Monitorear-aspectos-claves-seguridad-paciente.pdf',
    },
    {
      texto: 'Datos cuantitativos y calificación ',
      tipo: 'Guía',
      link: 'downloads/Guia-de-preparacion-para-acreditacion.pdf',
    },
    {
      texto: 'Indicadores ',
      tipo: 'Resolución',
      link: 'downloads/resolucion-0256-2016.pdf',
    },
    {
      texto: 'Autoevaluación',
      tipo: 'Guía',
      link: 'downloads/Guia-de-preparacion-para-acreditacion.pdf',
    },
    {
      texto: 'Interpretación.',
      tipo: 'Resolución',
      link: 'downloads/Resolucion-2082-de-2014.pdf',
    },
    {
      texto: 'Integralidad con equipos.',
      tipo: 'Formato',
      descarga:
        '/downloads/F-PS-048-INFORME-DE-AUTOEVALUACIÓN-VISITA-DE-OTORGAMIENTO-VERSIÓN-3.1-PARTE-2-IPS-HOSPITALARIA.docx',
    },
  ],
}
