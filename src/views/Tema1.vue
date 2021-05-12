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
      .h3 Proceso de autoevaluación.
    .row
      .col-lg-6
        p Una de las herramientas que permite determinar un diagnóstico claro de procesos y procedimientos institucionales en los diferentes servicios es la autoevaluación, 
          b la cual determina los parámetros para la creación y aplicaciones de planes de mejora logrando siempre la excelencia institucional.
          b-none  En el desarrollo del proceso de autoevaluación es importante reconocer cada grupo de estándares para poder precisar durante la aplicación de la herramienta si cumple o no y si su aplicabilidad, partiendo de los servicios que tenga habilitados para la prestación de los servicios de salud.
      .col-lg-6
        figure.mb-5
          img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen') 
    p.mb-5 En la revisión se hará énfasis en la acreditación de Instituciones prestadoras de salud (IPS) que prestan servicios ambulatorios y hospitalarios ya que se aplicarán los estándares encontrados en el “manual de acreditación en salud ambulatorio y hospitalario de Colombia” que encuentra en el material de apoyo, sin perder de vista que dependiendo de los servicios habilitados se aplicarán los estándares específicos del manual para cada uno de ellos
  
  
    #t_1_1.titulo-segundo
      .h4 1.1 Concepto. 
    p.mb-4 La autoevaluación consiste en la comparación de los procesos de atención, contra los estándares del manual de acreditación aplicable, con el fin de implementar acciones de mejoramiento y aprendizaje organizacional, verificar el nivel de cumplimiento de los estándares y consolidarlos en un informe de autoevaluación describiendo los resultados del proceso, la calificación del estándar y del grupo, sus fortalezas y oportunidades de mejoramiento y el plan correspondiente.
      br
      br
      |Actualmente se cuenta con manuales para:
    ul.lista-ul.mb-4
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
    p.mb-5 El proceso de acreditación comprende la preparación y planeación del proceso de autoevaluación, la conformación de los equipos del mismo, según los grupos de estándares y servicios habilitados y la calificación de los estándares correspondientes que se puede realizar de dos formas:
    figure.mb-5
      img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
      figcaption Calificación de estándares.

  
    #t_1_2.titulo-segundo
      .h4 1.2 Metodologías para la autoevaluación.
    p.mb-5 Antes de realizar la autoevaluación es necesario reconocer el ciclo de la acreditación y apropiar cada uno de los pasos que deben realizar las instituciones que van a iniciar el proceso de acreditación en salud. En la siguiente gráfica, puede analizar dicho ciclo.
    figure.mb-5
      img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen').mb-5
      figcaption Ciclo de la acreditación.
    p.mb-5 Para identificar y apropiar la escala de calificación, es necesario remitirse al artículo 7 de la resolución 2082 de 2014 y al artículo 8, reglas y categorías para el otorgamiento de la acreditación ya que dentro de la metodología es importante reconocerlas, revise la tabla a continuación. 

    .tabla-a.color-primario.mb-5 
      table
        caption Escala de calificación.
        tbody
          tr.text-center
            td VARIABLE
            td 1
            td 2
            td 3
            td 4
            td 5
          tr.table-title
            <th colspan="6"> ENFOQUE </th>
          tr
            td.td 
              b Enfoque Sistémico: 
              b-none Ejercicio de aplicación disciplinado que abarca todos los procesos y el contenido del estándar; que hace una visión de conjunto de la institución; que contempla un ciclo PHVA
            td.td El enfoque es esporádico, no está presente en todos los servicios o procesos, no es sistémico y no se relaciona con el direccionamiento estratégico.
            td.td Comienzo de un enfoque sistémico para los propósitos básicos del estándar y empieza a estar presente en algunos servicios o procesos. El enfoque y los procesos a través de los cuales se despliega está documentado.
            td.td El enfoque es sistémico, alcanzable para lograr los propósitos de estándar que se desea evaluar en procesos clave.
            td.td El enfoque es sistémico tiene buen grado de integración que responde a todos los propósitos del estándar en la mayoría de los procesos. Relacionado con el direccionamiento estratégico.
            td.td El enfoque es explícito y se aplica de manera organizada en todos los procesos, responde a los distintos criterios del estándar y está relacionado con el direccionamiento estratégico.
          tr
            td.td 
              b Enfoque proactivo:  
              b-none Grado en el que el enfoque es preventivo y se adelanta a la ocurrencia del problema de calidad, a partir de la gestión del riesgo.
              td.td Los enfoques son mayoritariamente reactivos, la información presentada es anecdótica y desarticulada, sin evidencia de la gestión del riesgo.
              td.td Etapas iniciales de transición de la reacción a la prevención de problemas. Etapas iniciales de la gestión del riesgo.
              td.td Enfoque mayoritariamente preventivo hacia el manejo y control de los procesos aun cuando existen algunos en donde se actúa reactivamente. Se identifican herramientas de la gestión del riesgo.
              td.td El enfoque es mayoritariamente práctico y preventivo en todos los procesos y se evidencian resultados parciales de la gestión del riesgo.
              td.td El enfoque es proactivo y preventivo en todos los procesos. Hay evidencia de la gestión del riesgo. 
          tr
            td.td 
              b Enfoque evaluado y mejorado: 
              b-none Forma en que se evalúa y mejora el enfoque y su asimilación.
            td.td  La información presentada es anecdótica y desarticulada, no hay evidencias (hechos y datos).
            td.td  La evidencia de un proceso de evaluación y mejoramiento del enfoque es limitada. Esbozo de algunos hechos y datos, desarticulados.
            td.td  El proceso de mejoramiento está basado en hechos y datos (acciones específicas realizadas y registrada) sobre procesos claves que abarcan la mayoría de productos y servicios.
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
            td.td Hay evidencias de despliegue a unos pocos clientes pero éste no es consistente.
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
            <th colspan="6"> IMPLEMENTACIÓN </th>
          tr
            td.td
              b  Pertinencia.
            td.td  Los datos presentados no responden a los factores, productos o servicios claves del estándar.
            td.td  Los datos presentados son parciales y se refieren a unos pocos factores, productos o servicios claves solicitados en el estándar.
            td.td  Los datos presentados se refieren al desempeño de algunas áreas claves, factores, productos y/o servicios solicitados.
            td.td  La mayoría de los resultados referidos se relacionan con el área, factores, productos y/o servicios solicitados en el estándar, alcanzando los objetivos y metas propuestas.
            td.td  Todos los resultados se relacionan con el área o punto del estándar a evaluar y alcanzan los objetivos y metas propuestas.
          tr
            td.td 
              b Consistencia.
            td.td  Solo existen ejemplos anecdóticos de aspectos poco relevantes y no hay evidencia de que sean resultado de la implementación del enfoque.
            td.td  Se comienzan a obtener resultados todavía incipientes de la aplicación del enfoque.
            td.td  Existe evidencia de que algunos logros son causados por el enfoque implementado y por las acciones de mejoramiento.
            td.td  La mayoría de los resultados responden a la implementación del enfoque y a las acciones de mejoramiento.
            td.td  Todos los resultados son causados por la implementación de enfoques y a las acciones sistemáticas de mejoramiento.
          tr
            td.td 
              b Avance de la medición.
            td.td  No existen indicadores que muestren tendencias en la calidad y el desempeño de los procesos. La organización se encuentra en una etapa muy temprana de medición.
            td.td  Existen algunos indicadores que muestran el desempeño de procesos. La organización se encuentra en una etapa media del desarrollo de la medición.
            td.td  Existen indicadores que monitorean los procesos y muestran ya tendencias positivas de mejoramiento en algunas áreas claves, factores, productos y/o servicios solicitados en el estándar. Algunas áreas reportadas pueden estar en etapas recientes de medición.
            td.td  Existen procesos sistemáticos de medición para la mayoría de las áreas y factores claves de solicitados en el estándar.
            td.td Los resultados son monitoreados directamente por los líderes de todos los niveles de la organización y la información se utiliza para la toma de decisiones y el mejoramiento de los procesos. 
          tr
            td.td 
              b Tendencia.
            td.td 
            td.td  Se muestran resultados muy recientes que no permiten tener suficientes bases para establecer tendencias.
            td.td  Se presentan tendencias de mejoramiento de algunos factores claves del estándar.
            td.td  La mayoría de los indicadores alcanzan niveles satisfactorios y muestran firmes tendencias de mejoramiento de las áreas claves, factores, productos y/o servicios, lo cual se refleja en que van de bueno a excelente.
            td.td  Se observan tendencias positivas y sostenidas de mejoramiento de todos los datos a lo largo del tiempo.
          tr
            td.td
              b  Comparación.
            td.td 
            td.td  No existen políticas ni prácticas de comparación de los procesos de la organización con los mejores.
            td.td  Se encuentra en etapa temprana de comparación con las mejores prácticas de algunos procesos, productos y servicios solicitados en el estándar.
            td.td  Se encuentra en etapa madura de comparación con las mejores prácticas a nivel nacional de áreas, productos, factores y/o servicios claves solicitados en el estándar.
            td.td  Los resultados son comparados con referentes nacionales e internacionales y se ubican en niveles cercanos a las tendencias de clase mundial. Cuenta con un sistema de evaluación y mejora de los sistemas de comparación.
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
              a.boton.boton--c(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Ir a Material coplementario 
                i.fas.fa-file-download

  
    #t_1_3.titulo-segundo
      .h4 1.3 Herramientas para la autoevaluación.
    
  
  
    #t_1_4.titulo-segundo
      .h4 1.4. Abordaje de los estándares.
  
  
    .h5 1.4.1. Datos cualitativos. 
  
    
    .h5 1.4.2. Indicadores.
  
  
    .h5 1.4.3. Datos cuantitativos y calificación.
  
  
    .h5 1.4.4. Interpretación.
  
  
    #t_1_4.titulo-segundo
      .h4 1.5. Integralidad con equipos.
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
