<style lang="sass" scoped></style>
<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Proceso de autoevaluación
    .row.mb-5
      .col-lg-6
        p En el desarrollo del proceso de autoevaluación es importante reconocer cada grupo de estándares para poder precisar durante la aplicación de la herramienta si cumple o no y su aplicabilidad, partiendo de los servicios que tenga habilitados para la prestación de los servicios de salud.
          br
          br
          |En la revisión se hará énfasis en la acreditación de Instituciones prestadoras de salud (IPS) que prestan servicios ambulatorios y hospitalarios ya que se aplicarán los estándares encontrados en el “manual de acreditación en salud ambulatorio y hospitalario de Colombia” que encuentra en el material de apoyo, sin perder de vista que dependiendo de los servicios habilitados se aplicarán los estándares específicos del manual para cada uno de ellos.
      .col-lg-6
        figure
          img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen' style='width: 650px') 
    br
  
    #t_1_1.titulo-segundo
      .h4 1.1 Concepto
    p.mb-4 La autoevaluación consiste en la comparación de los procesos de atención, contra los estándares del manual de acreditación aplicable, con el fin de implementar acciones de mejoramiento y aprendizaje organizacional, verificar el nivel de cumplimiento de los estándares y consolidarlos en un informe de autoevaluación describiendo los resultados del proceso, la calificación del estándar y del grupo, sus fortalezas y oportunidades de mejoramiento y el plan correspondiente.
      br
      br
      |Actualmente se cuenta con manuales para:
    ul.lista-ul.mb-4
        li 
          i.fas.fa-angle-right
          | Manual de acreditación para empresas administradoras de planes de beneficios.
        li 
          i.fas.fa-angle-right
          | Manual de acreditación para los laboratorios clínicos.
        li 
          i.fas.fa-angle-right
          | Manual de acreditación para Instituciones que prestan servicios de imagenología.

        li 
          i.fas.fa-angle-right
          | Manual de acreditación para Instituciones que ofrecen servicios de habilitación y rehabilitación.

        li 
          i.fas.fa-angle-right
          | Manual de acreditación en salud ambulatorio y hospitalario.
    p.mb-5 Inicialmente, se verifican los estándares mínimos de habilitación (puerta de entrada) por lo que, a continuación se identifica el proceso para su cumplimiento y actualización.
    figure.mb-5
      img(src='@/assets/curso/img3.svg', alt='Texto que describa la imagen')
      figcaption Proceso de habilitación.
    p.mb-5 Con la siguiente figura interprete el mapa de procesos de habilitación requeridos en la acreditación
    figure.mb-5
      img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen')
      figcaption Mapa de procesos habilitación.

    br.
    br.
    #t_1_2.titulo-segundo
      .h4 1.2 Metodologías para la autoevaluación
    p.mb-5 Antes de realizar la autoevaluación es necesario reconocer el ciclo de la acreditación y apropiar cada uno de los pasos que deben realizar las instituciones que van a iniciar el proceso de 
      b Acreditación en Salud. 
      b-none En la siguiente gráfica, puede analizar dicho ciclo.
    figure.mb-5
      img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
      figcaption Ciclo de la acreditación.
    p.mb-5 El proceso de acreditación comprende la preparación y planeación del proceso de autoevaluación, la conformación de los equipos del mismo, según los grupos de estándares y servicios habilitados y la calificación de los estándares correspondientes que se puede realizar de dos formas:
    figure.mb-5
      img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen').mb-5
      figcaption Calificación de estándares.
    p.mb-5 Para identificar y apropiar la escala de calificación, es necesario remitirse al artículo 7 de la resolución 2082 de 2014 y al artículo 8, reglas y categorías para el otorgamiento de la acreditación ya que dentro de la metodología es importante reconocerlas, revise la tabla a continuación. 

    .tabla-a.color-primario.mb-5 
      table
        caption Escala de calificación.
        tbody
          tr.text-center
            td VARIABLE /ESCALA DE VALORACIÓN 
            td 1
            td 2
            td 3
            td 4
            td 5
          tr.table-title
            <th colspan="6"> ENFOQUE </th>
          tr
            td.td
              p 
                b Enfoque Sistémico: 
                b-none ejercicio de aplicación disciplinado que abarca todos los procesos y el contenido del estándar; que hace una visión de conjunto de la institución; que contempla un ciclo PHVA
            td.td El enfoque es esporádico, no está presente en todos los servicios o procesos, no es sistémico y no se relaciona con el direccionamiento estratégico.
            td.td Comienzo de un enfoque sistémico para los propósitos básicos del estándar y empieza a estar presente en algunos servicios o procesos. El enfoque y los procesos a través de los cuales se despliega está documentado.
            td.td El enfoque es sistémico, alcanzable para lograr los propósitos de estándar que se desea evaluar en procesos clave.
            td.td El enfoque  sistémico tiene buen grado de integración que responde a todos los propósitos del estándar en la mayoría de los procesos. Relacionado con el direccionamiento estratégico.
            td.td El enfoque es explícito y se aplica de manera organizada en todos los procesos, responde a los distintos criterios del estándar y está relacionado con el direccionamiento estratégico.
          tr
            td.td 
              b Enfoque proactivo:  
              b-none grado en el que el enfoque es preventivo y se adelanta a la ocurrencia del problema de calidad, a partir de la gestión del riesgo.
              td.td Los enfoques son mayoritariamente reactivos, la información presentada es anecdótica y desarticulada, sin evidencia de la gestión del riesgo.
              td.td Etapas iniciales de transición de la reacción a la prevención de problemas. Etapas iniciales de la gestión del riesgo.
              td.td Enfoque mayoritariamente preventivo hacia el manejo y control de los procesos aun cuando existen algunos en donde se actúa reactivamente. Se identifican herramientas de la gestión del riesgo.
              td.td El enfoque es mayoritariamente práctico y preventivo en todos los procesos y se evidencian resultados parciales de la gestión del riesgo.
              td.td El enfoque es proactivo y preventivo en todos los procesos. Hay evidencia de la gestión del riesgo. 
          tr
            td.td 
              b Enfoque evaluado y mejorado: 
              b-none forma en que se evalúa y mejora el enfoque y su asimilación.
            td.td  La información presentada es anecdótica y desarticulada, no hay evidencias (hechos y datos).
            td.td  La evidencia de un proceso de evaluación y mejoramiento del enfoque es limitada. Esbozo de algunos hechos y datos, desarticulados.
            td.td  El proceso de mejoramiento está basado en hechos y datos (acciones específicas realizadas y registradas) sobre procesos claves que abarcan la mayoría de productos y servicios.
            td.td  Existe un proceso de mejoramiento basado en hechos y datos como herramienta básica de dirección.
            td.td  Existen ciclos sistemáticos de evaluación, la información recogida es consistente y válida, oportuna y se emplea para la evaluación y definir acciones de mejoramiento.
          tr.text-center
            td VARIABLE
            td 1
            td 2
            td 3
            td 4
            td 5
          tr.table-title
            <th colspan="6"> IMPLEMENTACIÓN </th>
          tr
            td.td  Despliegue en la institución.
            td.td  El enfoque se ha implementado en algunas áreas pero se refleja su debilidad.
            td.td  La implementación del enfoque se da en algunas áreas operativas principales y existen brechas muy significativas en procesos importantes.
            td.td  La implementación está más avanzada en áreas claves y no existen grandes brechas con respecto a otras áreas.
            td.td  Existe un enfoque bien desplegado en todas las áreas, con brechas no significativas en áreas de soporte.
            td.td  La implementación del enfoque se amplía continuamente para cubrir nuevas áreas en forma integral y responde al enfoque definido en todas las áreas claves.
          tr
            td.td Despliegue al cliente interno y/o externo (según la naturaleza y propósito del estándar).
            td.td El enfoque no se despliega hacia los clientes.
            td.td Hay evidencias de despliegue a unos pocos clientes pero este no es consistente.
            td.td Hay evidencias de implantación parcial del enfoque tanto en clientes internos como externos con un grado mínimo de consistencia.
            td.td El enfoque se despliega a la mayoría de los usuarios y es medianamente consistente.
            td.td El enfoque se despliega a la totalidad de los usuarios y es totalmente consistente.
          tr.text-center
            td VARIABLE
            td 1
            td 2
            td 3
            td 4
            td 5
          tr.table-title
            <th colspan="6"> RESULTADOS </th>
          tr
            td.td
              b  Pertinencia
            td.td  Los datos presentados no responden a los factores, productos o servicios claves del estándar.
            td.td  Los datos presentados son parciales y se refieren a unos pocos factores, productos o servicios claves solicitados en el estándar.
            td.td  Los datos presentados se refieren al desempeño de algunas áreas claves, factores, productos y/o servicios solicitados.
            td.td  La mayoría de los resultados referidos se relacionan con el área, factores, productos y/o servicios solicitados en el estándar, alcanzando los objetivos y metas propuestas.
            td.td  Todos los resultados se relacionan con el área o punto del estándar a evaluar y alcanzan los objetivos y metas propuestas.
          tr
            td.td 
              b Consistencia
            td.td  Solo existen ejemplos anecdóticos de aspectos poco relevantes y no hay evidencia de que sean resultado de la implementación del enfoque.
            td.td  Se comienzan a obtener resultados todavía incipientes de la aplicación del enfoque.
            td.td  Existe evidencia de que algunos logros son causados por el enfoque implementado y por las acciones de mejoramiento.
            td.td  La mayoría de los resultados responden a la implementación del enfoque y a las acciones de mejoramiento.
            td.td  Todos los resultados son causados por la implementación de enfoques y a las acciones sistemáticas de mejoramiento.
          tr
            td.td 
              b Avance de la medición
            td.td  No existen indicadores que muestren tendencias en la calidad y el desempeño de los procesos. La organización se encuentra en una etapa muy temprana de medición.
            td.td  Existen algunos indicadores que muestran el desempeño de procesos. La organización se encuentra en una etapa media del desarrollo de la medición.
            td.td  Existen indicadores que monitorean los procesos y muestran ya tendencias positivas de mejoramiento en algunas áreas claves, factores, productos y/o servicios solicitados en el estándar. Algunas áreas reportadas pueden estar en etapas recientes de medición.
            td.td  Existen procesos sistemáticos de medición para la mayoría de las áreas y factores claves de solicitados en el estándar.
            td.td Los resultados son monitoreados directamente por los líderes de todos los niveles de la organización y la información se utiliza para la toma de decisiones y el mejoramiento de los procesos. 
          tr
            td.td 
              b Tendencia
            td.td 
            td.td  Se muestran resultados muy recientes que no permiten tener suficientes bases para establecer tendencias.
            td.td  Se presentan tendencias de mejoramiento de algunos factores claves del estándar.
            td.td  La mayoría de los indicadores alcanzan niveles satisfactorios y muestran firmes tendencias de mejoramiento de las áreas claves, factores, productos y/o servicios, lo cual se refleja en que van de bueno a excelente.
            td.td  Se observan tendencias positivas y sostenidas de mejoramiento de todos los datos a lo largo del tiempo.
          tr
            td.td
              b  Comparación
            td.td 
            td.td  No existen políticas ni prácticas de comparación de los procesos de la organización con los mejores.
            td.td  Se encuentra en etapa temprana de comparación con las mejores prácticas de algunos procesos, productos y servicios solicitados en el estándar.
            td.td  Se encuentra en etapa madura de comparación con las mejores prácticas a nivel nacional de áreas, productos, factores y/o servicios claves solicitados en el estándar.
            td.td  Los resultados son comparados con referentes nacionales e internacionales y se ubican en niveles cercanos a las tendencias de clase mundial. Cuenta con un sistema de evaluación y mejora de los sistemas de comparación.
    
    //todo------- AÑADIR ARCHIVO AL LLAMADO A LA ACCION!

    .tarjeta.gradient.text-white.p-3.mb-5
      .row.justify-content-around.align-items-center.p-3
        .col-4.col-sm-2.col-lg-2
          img(src="@/assets/curso/img7.svg" style="width: 171px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Guía práctica - Autoevaluación en salud.
              p En el material complementario, puede revisar la guía práctica de preparación para la autoevaluación en salud para la aplicación de los estándares de acreditación.
            .col-sm-auto
              a.boton.boton--c(:href="obtenerLink('downloads/Guia-de-preparacion-para-acreditacion.pdf')" target="_blank")
                span Ir a Material coplementario 
                i.fas.fa-file-download
    br
    br
    #t_1_3.titulo-segundo
      .h4 1.3 Herramientas para la autoevaluación
    .row
      .col-lg-6 
        p Según la Ruta Crítica, la Institución que se va acreditar determina una planeación en la cual hay que tener en cuenta: los recursos, la agenda de reuniones para la preparación de la autoevaluación, los formatos necesarios, los equipos, las listas de chequeo de los estándares correspondientes, entre otros.
          br
          br
          |En el material complementario puede ubicar los links para obtener los formatos que se trabajan en este proceso: ruta crítica, guía práctica de preparación para la autoevaluación en salud, formatos de autoevaluación de la entidad acreditadora, sistema de reporte de seguridad (incidentes eventos adversos) y análisis, en la unidad de cuidados intensivos, paciente trazador.
      .col-lg-6 
        figure.mb-3
          img(src='@/assets/curso/img8.jpg', alt='Texto que describa la imagen ' style='width: 536px')
    p.mb-5 Otros criterios para seleccionar un paciente y hacer el trazador en los servicios de hospitalización, son: paciente que lleve más de cinco (5) días hospitalizado, paciente que haya sido atendido en tres (3) o más servicios, paciente con comorbilidades, pacientes críticos, paciente con una de las primeras causas de morbilidad de la institución y del servicio, entre otras. Se puede adaptar un formato donde incluya y priorice estándares asistenciales y criterios, siguiendo el proceso y flujo de atención:
    .row.mb-5
      .col-lg-3
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img9.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Paciente trazador.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img10.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Ejecución del tratamiento.
      .col-lg-3
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img11.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Acceso, registro e ingreso.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img12.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Evaluación de la atención.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img13.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Información al usuario y familia.
      .col-lg-3
        .tarjeta-Avatar.mb-lg-2.mb-sm-4.mb-xs-4
          img(src='@/assets/curso/img14.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-3
            .p.text-center 
              b Evaluación de necesidades al ingreso.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img15.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Salida y seguimiento.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img16.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Gestión de lista de chequeo.
      .col-lg-3
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img17.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Planeación de la atención.
        .tarjeta-Avatar.mb-4
          img(src='@/assets/curso/img18.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-palido.p-4
            .p.text-center 
              b Referencia y contrarreferencia.
    .tarjeta.color-acento-botones.px-5.py-3.mb-5.border-radius
      .row
        .col-2
            img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen' style='height: 187px')
        .col-10.my-auto.pe-5
          .h2.mb-0 Asuma el reto
          p.pe-5 Identifique procesos, servicios o áreas con brechas de mejoramiento, realice plan de referenciación interna o externa, verifique experiencias exitosas que puedan ser adaptadas y adoptadas en la institución, impleméntelas y evalúe resultados.

    br
    br
    #t_1_4.titulo-segundo
      .h4 1.4. Abordaje de los estándares
    p.mb-5 En la siguiente figura, puede analizar el grupo de estándares del Manual de acreditación en salud ambulatorio y hospitalario.
    .row.mb-3
      .col-lg-6 
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto_
              .h5 Direccionamiento
              p Es el trabajo que se ha de realizar por parte de la organización frente a su proceso de planeación estratégica y el papel de los órganos de gobiernos de la organización.
          hr.hr.mx-auto
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img21.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto_
              .h5 Gerencia de la Información
              p Se enfoca en la integración de todas las áreas asistenciales y administrativas en relación con la información clínica y administrativa y su uso para la toma de decisiones en cualquier nivel de la organización.
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img22.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto_
              .h5 Gerencia
              p Es el trabajo de las unidades funcionales y organismos de gobierno de la institución frente a las diferentes áreas y funciones clave que debe desarrollar permanentemente la institución.
          hr.hr.mx-auto
      .col-lg-6 
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img23.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto
              .h5 Ambiente Físico
              p Incluye las decisiones y procesos que deben ser tenidos en cuenta en la organización para que la funcionalidad de la estructura colabore con el adecuado funcionamiento de los procesos asistenciales.
          hr.hr.mx-auto
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img24.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto
              .h5 Gerencia del Talento Humano
              p Se enfoca en la gestión del talento humano, desde su planeación hasta su retiro, y su proceso de mejoramiento continuo.
          hr.hr.mx-auto
        .contenedor
          hr.hr.mx-auto
          .recuadro_imagen.px-5
            img(src='@/assets/curso/img25.svg', alt='Texto que describa la imagen').m-auto.me-5
            .recuadro_texto
              .h5 Gestión de Tecnología
              p Se enfoca en la gestión integral de todos los recursos tecnológicos, desde su planeación hasta su renovación, y el análisis de los efectos de su utilización.
          hr.hr.mx-auto
    figcaption.mb-3 Grupo de estándares
    p.mb-5.fst-italic Nota: Tomado de
      a.link(:href="obtenerLink('downloads/manual-acreditacion-salud-ambulatorio.pdf')" target="_blank") 
        | https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/manual-acreditacion-salud-ambulatorio.pdf
    .row.mb-5
      .col-lg-6
        p El equipo de autoevaluación de integrantes asignados deben iniciar la lectura del total del grupo de estándares correspondiente, para entender la globalidad y facilitar el proceso de autoevaluación y autocalificación posterior del estándar individual.
          br
          br
          |En caso necesario debe buscar aclaración a través de los miembros del equipo o el instructor, quien le guiará según pertinencia.
          br
          br
          |Es necesario que se consulte en el material complementario los conceptos y definiciones requeridos para la aplicación del 
          a.link(:href="obtenerLink('downloads/manual-acreditacion-salud-ambulatorio.pdf')" target="_blank") 
            b Manual de Acreditación en Salud Ambulatorio y Hospitalario de Colombia Versión 3.1. 
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/img26.jpg', alt='Texto que describa la imagen' style='width: 536px' )
    .h5 Datos cualitativos
    p.mb-5 Una vez haya abordado los estándares y aclarado el significado de cada uno, registre las fortalezas que el equipo considere que se relacionan. La redacción de las fortalezas debe ser guiada por el equipo y debe centrarse en la declaración de cada estándar individual.
      br
      br
      |Una vez discutidas todas las fortalezas de la organización hay que determinar los soportes y evidencias con que cuente la organización. La(s) persona(s) asignadas deben recolectar, ordenar y consolidar todos los soportes.
    .row.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/img27.jpg', alt='Texto que describa la imagen' style='width: 536px' )
      .col-lg-6
        p Posteriormente, se deben redactar todas las oportunidades de mejoramiento (debilidades) del servicio e institución frente al estándar. El texto de la declaración del estándar individual es la guía para el equipo de autoevaluación.
          br
          br
          |La respuesta a las oportunidades de mejora consiste en definir acciones de mejoramiento. Estas acciones de mejora serán fuente para el posterior plan de mejoramiento del grupo de estándares y del plan de mejoramiento institucional.
    .h5 Indicadores
    p.mb-5 Los indicadores se utilizan para medir y monitorear el desempeño institucional y la calidad. Las organizaciones cuentan con indicadores específicos para los procesos y servicios y los contemplados en los estándares.
      br
      br
      |Identifique, defina y describa los indicadores administrativos, asistenciales, clínicos y de calidad que le aplican.
      br
      |Consulte los indicadores obligatorios de la Resolución 256 de 2016, así como los solicitados por la entidad acreditadora en el material complementario.
    .h5 Datos cuantitativos y calificación
    p.mb-5 El proceso de calificación de los estándares debe ser explícito y desarrollarse integralmente, para verificar y calificar el grado del logro alcanzado.
      br
      br
      |La calificación específica del cumplimiento del estándar se realiza para identificar los aspectos críticos y adelantar acciones de mejoramiento. El cumplimiento y calificación cuantitativa individual y de grupo, aporta al diagnóstico institucional y permite ajustar las estrategias y actividades para su plan de mejoramiento durante el ciclo de preparación para la acreditación, al permitir identificar las brechas respecto del cumplimiento de las dimensiones y variables establecidas en la escala de calificación. 
      br
      br
      |En la siguiente tabla puede observar cómo se estructura la escala de calificación, la cual comprende tres dimensiones con sus respectivas variables.
    
    figure.mb-5
          img(src='@/assets/curso/img29.svg', alt='Texto que describa la imagen')
          figcaption Estructura de la escala de calificación.
    figure.mb-5
          img(src='@/assets/curso/img28.jpg', alt='Texto que describa la imagen')
    p.mb-3 Los dos (2) niveles de calificación comprenden dos procesos de agregación: 
      b el primero 
      b-none valora el cumplimiento de las diez (10) variables de la escala de calificación obteniendo una única calificación por cada estándar y 
      b el segundo
      b-none , tiene en cuenta la calificación individual de cada estándar para obtener la del grupo de estándares. El puntaje de cada grupo de estándares y su sumatoria para estimar el puntaje global de la totalidad de estándares, permite la comparación con las 
      b “Reglas y categorías para el otorgamiento de la acreditación”, definidas en la Resolución 2082 de 2014
      b-none , para la toma de decisiones en el proceso de otorgamiento de la acreditación.
      br
      br
      |Para la calificación individual de cada estándar, se debe:
    ol.lista-ol--cuadro.mb-5
        li 
          .lista-ol--cuadro__vineta
            span 
              b 1.
          b Ubicar en la escala y en cada una de las 10 variables a calificar.
        li 
          .lista-ol--cuadro__vineta
            span 
              b 2.
          b Situarse en el numeral 3 de cada una (estándar con un grado medio de desarrollo de la variable).

        li 
          .lista-ol--cuadro__vineta
            span 
              b 3.
          b Leer cada una de las variables y comparar el estándar, proceso, servicio e institución con las características del numeral 3. 

        li 
          .lista-ol--cuadro__vineta
            span 
              b 4.
          b Evaluar si corresponde a este numeral, si corresponde a este, calificarlo como 3. Si no corresponde al numeral 3, porque se considera que la organización supera lo descrito en este numeral, desplazarse hacia el numeral 4, si está acorde con este numeral, escriba 4. 

        li 
          .lista-ol--cuadro__vineta
            span 
              b 5.
          b Si considera que la organización tiene un grado de madurez menor que el numeral 3, desplazarse hacia el numeral 2, si está acorde con este numeral, califique 2.
        li 
          .lista-ol--cuadro__vineta
            span 
              b 6.
          b Así sucesivamente siga hacia arriba o hacia abajo.
        li 
          .lista-ol--cuadro__vineta
            span 
              b 7.
          b Al final de la calificación de cada una de las 10 variables, se debe establecer la medida de tendencia central a utilizar para la calificación final del estándar (promedio, mediana o moda) o el menor valor.
    p.mb-5 Para los primeros ejercicios de autoevaluación se recomienda utilizar el menor valor, moda o mediana que le ayudará a la institución a implementar mejoras para cerrar brechas y cumplir con el estándar; el promedio se recomienda para ejercicios posteriores y cuando hay evidencias de mejora y cumplimiento del estándar; por otra parte, el promedio es la medida para la presentación ante la entidad acreditadora. 
      br
      br
      |En todo caso hay que tener en cuenta que la calificación de los estándares, se realizará por consenso del equipo y   que el texto de la declaración del estándar individual es la guía para el equipo de autoevaluación. La calificación individual y de los grupos de estándares, debe reflejar la realidad institucional y el grado de entendimiento del estándar.

    //todo------- AÑADIR ARCHIVO AL LLAMADO A LA ACCION!

    .tarjeta.gradient.text-white.p-3.mb-5
      .row.justify-content-around.align-items-center.p-3
        .col-4.col-sm-2.col-lg-2
          img(src="@/assets/curso/img7.svg" style="width: 171px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Guía práctica - Autoevaluación en salud.
              p Se indica que en el material complementario puede consultar la Guía práctica de preparación para la autoevaluación en salud.
                br
                br
                |Así mismo, el formato del Informe de autoevaluación estándares IPS hospitalarias – Parte 1. Perfil de la institución – Visita de otorgamiento. Como también, el formato para el Informe de autoevaluación Visita de otorgamiento acreditación en salud Estándares IPS hospitalarias – Parte 2.
            .col-sm-auto
              a.boton.boton--c(:href="('https://acreditacionensalud.org.co/ips-hospitalarias/')" target="_blank")
                span Ir a Material coplementario 
                i.fas.fa-file-download
  
  
    .h5 Interpretación
    p.mb-5 Con base en la siguiente tabla, se debe registrar el puntaje (1 - 500) para cada grupo de estándares, teniendo en cuenta la siguiente ponderación y rangos:
    
    table.mb-5
      caption Ponderación
      thead
        tr
          <th colspan="3" class="encabezado-morado"> PONDERACIÓN PUNTAJES Y RANGOS GRUPOS DE ESTÁNDARES</th>
          
      tbody.text-center
        tr
          td GRUPOS DE ESTÁNDARES
          td NÚMERO DE ESTÁNDARES
          td PUNTAJES
        tr.encabezado-gris-noborde
          td 
            b ASISTENCIAL
          td 
          td 
      tbody.text-center
        tr
          td Proceso de atención al cliente asistencial
          td 1 - 75
          td 200
      tbody.text-center
        tr
          td Mejoramiento de la calidad
          td 156 – 160
          td 50
      tbody.text-center
        tr
          td SUBTOTAL
          td 
          td 250
        tr.encabezado-gris-noborde
          td 
            b APOYO
          td 
          td 
        tr.text-center
          td Direccionamiento
          td 76 – 88
          td 42
        tr.text-center
          td Gerencia
          td 89 – 103
          td 25
        tr.text-center
          td Gerencia del talento humano
          td 104 – 120
          td 42
        tr.text-center
          td Gerencia del ambiente físico
          td 121 – 131
          td 30
        tr.text-center
          td Gestión de tecnología
          td 132 – 141 
          td 25
        tr.text-center
          td Gerencia de la información
          td 142 – 155
          td 36
        tr.text-center
          td Mejoramiento de la calidad
          td 156 – 160 
          td 50
        tr.text-center
          td SUBTOTAL
          td 
          td 250
        tr.encabezado-gris-noborde
          td 
            b TOTAL
          td 
          td 500
      p.fst-italic.my-2 Nota: Tomado de Min Salud
    p.mb-5 Para registrar la calificación (1 a 5) para cada grupo de estándares, se debe tener en cuenta la tabla de ponderación y rangos; al final de cada grupo de estándares se debe registrar la calificación correspondiente. 
      br
      br
      |Luego correlacionar, los puntajes obtenidos de 1 a 500 con la siguiente tabla de las reglas para la toma de decisiones de otorgamiento de acreditación.
    table.mb-5
      caption Reglas para la toma de decisiones de otorgamiento de acreditación.
      thead
        tr
          <th colspan="3" class="encabezado-morado"> REGLAS PARA LA TOMA DE DECISIONES DE OTORGAMIENTO DE ACREDITACIÓN</th>
          
      tbody
        tr
          <th colspan="1" class="encabezado-gris-oscuro"> CATEGORÍA DE ACREDITACIÓN   </th>
          <th colspan="2" class="encabezado-gris-claro"> REGLAS DE DECISIÓN   </th>
      tbody
        tr
          <td rowspan="4">Acreditado con excelencia (en una escala de 500 puntos, si obtiene 400 puntos en adelante). </td>
        tr
          <td colspan="2"> <b>Regla 1:</b> ninguna calificación en cualquiera de los grupos de estándares puede ser menor que tres.</td>
        tr
          <td colspan="2" class="encabezado-gris-claro-nocenter"> <b>Regla 2:</b> la totalidad de estándares de la sección de mejoramiento de la calidad debe tener la calificación mínima de cuatro.</td>
        tr
          <td colspan="2"> <b>Regla 3:</b> la institución aporta evidencia de los resultados de calidad alcanzados en el control de los riesgos y en el comportamiento de sus indicadores de calidad en niveles de excelencia.</td>
      tbody
        tr
          <td rowspan="6">Acreditado (en una escala de 500 puntos, si obtiene 280 y 399 puntos). </td>
        tr
          <td colspan="2" class="encabezado-gris-claro-nocenter"> <b>Regla 1:</b> ninguna calificación en cualquiera de los grupos estándares puede ser menor que dos..</td>
        tr
          <td colspan="2"> <b>Regla 2:</b> los estándares de la sección de mejoramiento de la calidad no deben tener calificación menor que dos en ninguno de los grupos.</td>
        tr
          <td colspan="2"  class="encabezado-gris-claro-nocenter"> <b>Regla 3:</b> en ningún grupo de estándares debe existir un número mayor de tres o más estándares individuales por debajo de dos.</td>
        tr
          <td colspan="2"> <b>Regla 4:</b> sumados los estándares individuales con calificación menor de dos, no podrán ser más de 5. De darse las condiciones de las reglas 3 o 4, la acreditación podrá ser condicionada independientemente del puntaje obtenido.</td>
        tr
          <td colspan="2"  class="encabezado-azul-claro"> <b>NOTA:</b> cuando esto ocurriese la máxima instancia del ente acreditador analizará si esta situación genera un riesgo para la calidad de la atención que brinda la institución y tendrá la discrecionalidad, de acuerdo con sus conclusiones de asignar una decisión de acreditación diferente.</td>
      tbody
        tr
          <td rowspan="3">Acreditado (en una escala de 500 puntos, si obtiene 200 y 279 puntos).</td>
        tr
          <td colspan="2" ><b>Regla 1:</b> más de 279 puntos por no cumplir la totalidad de las exigencias de las categorías superiores.</td>
        tr
          <td colspan="2"  class="encabezado-azul-claro"> <b>NOTA:</b> la acreditación condicionada no le permite a la institución disfrutar de ninguno de los incentivos para las instituciones acreditadas y solamente implica que la institución dispondrá de un período adicional de diez (10) meses para mejorar su desempeño y alcanzar la categoría de acreditado. Si esto no ocurriera, se le asignará la categoría de “No Acreditado”.</td>
      tbody
        tr
          <td rowspan="2">No Acreditado.</td>
        tr
          <td colspan="2" ><b>Regla:</b> las instituciones que no hayan obtenido la acreditación luego de ser evaluadas por el ente acreditador, solo pueden aplicar de nuevo al proceso de acreditación después de cumplido un año de haber sido evaluadas.</td>
    p.mb-5 Consultar la Resolución 2082 de 2014, por la cual se dictan disposiciones para la operatividad del Sistema Único de Acreditación en Salud en material complementario se relaciona el enlace de consulta.
    a.anexo.mb-5.mb-lg-5(:href="obtenerLink('downloads/Resolucion-2082-de-2014.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Enlace web. 
            b-none Consultar la Resolución 2082 de 2014.
    
    #t_1_5.titulo-segundo
      .h4 1.5 Integralidad con equipos
    p.mb-5 Para la acreditación es muy importante integrar a todos los niveles de la organización en la autoevaluación que se realiza previa a la evaluación de los estándares de calidad, de esta manera se trabaja en equipo para identificar oportunidades de mejora (debilidades) y fortalezas. 
      br
      br
      |Se conforman los equipos dependiendo de los servicios que se encuentren habilitados y la organización de los mismos, por ejemplo: equipos por área, por unidades funcionales, por operación, entre otros. En todo caso los integrantes deben conformar los equipos de autoevaluación de estándares, equipos primarios de mejoramiento y equipo de mejoramiento institucional.
    //todo------- AÑADIR ARCHIVO AL LLAMADO A LA ACCION!

    .tarjeta.gradient.text-white.p-3.mb-5
      .row.justify-content-around.align-items-center.p-3
        .col-4.col-sm-2.col-lg-2
          img(src="@/assets/curso/img7.svg" style="width: 171px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Formato para el Informe de autoevaluación
              p Para mayor información, ver páginas 9 a 16 del Formato para el Informe de autoevaluación Visita de otorgamiento acreditación en salud Estándares IPS  hospitalarias – Parte 2.
            .col-sm-auto
              a.boton.boton--c(:href="obtenerLink('/downloads/F-PS-048-INFORME-DE-AUTOEVALUACIÓN-VISITA-DE-OTORGAMIENTO-VERSIÓN-3.1-PARTE-2-IPS-HOSPITALARIA.docx')" target="_blank")
                span Ir a Material coplementario 
                i.fas.fa-file-download
    p.mb-5 También se debe establecer el equipo líder, que apoye y realice el análisis de los resultados previos y direccione el proceso.     
      br
      br
      |Se debe tener en cuenta la selección de los integrantes de cada equipo, la estructura y composición según los servicios habilitados, el apoyo por parte del equipo líder, plantear reglas claras en cuanto al funcionamiento, responsabilidad y los roles de sus miembros, para asegurar el éxito del cumplimiento de las tareas y alcanzar las metas en los tiempos propuestos. 
</template>

<script></script>

<style lang="sass" scoped></style>
