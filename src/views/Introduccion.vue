<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    figure.mb-5
      img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')  
    p.mb-5 Una de las herramientas que permite determinar un diagnóstico claro de procesos y procedimientos institucionales en los diferentes servicios es la autoevaluación, la cual determina los parámetros para la creación y aplicaciones de planes de mejora logrando siempre la excelencia institucional.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
