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
        caption Leyenda de la tabla
        thead
          tr
            <th colspan="6"> Encabezado 1 </th>
        tbody
          tr
            td VARIABLE
            td Celda 2
            td Celda 3
            td Celda 4
            td Celda 5
            td Celda 5
  
  
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
