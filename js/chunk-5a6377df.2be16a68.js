(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6377df"],{"4d7a":function(t,e,n){"use strict";n("6e03")},5270:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header container-fluid"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},["inicio"!=t.$route.name?s("div",{staticClass:"header__menu me-4 me-sm-5",on:{click:function(e){return t.toggleMenu(!t.menuOpen)}}},[s("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[s("div",{staticClass:"line-2"}),s("div",{staticClass:"line-1"}),s("div",{staticClass:"line-3"})]),s("span",[t._v("MENÚ")])]):t._e(),s("img",{staticClass:"header__logo me-4 me-sm-5",attrs:{src:n("9eb5")}}),t.isInicio?s("div",{staticClass:"d-none d-md-flex align-items-center"},[s("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")]),s("a",{attrs:{href:"#creditos"}},[t._v("Créditos")])]):s("div",{staticClass:"header__componente-formativo"},[s("span",[t._v(t._s(t.globalData.componenteFormativo))])])]),t.isInicio?s("div",{staticClass:"col-auto"},[s("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[s("span",{staticClass:"me-1"},[t._v("Iniciar")]),s("i",{staticClass:"fas fa-angle-right"})])],1):t._e()])])},i=[],a=(n("b0c0"),n("ecc5")),o={name:"Header",mixins:[a["a"]],computed:{globalData:function(){return this.$config&&this.$config.global},isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(t){this.$store.dispatch("toggleMenu",t)}}},c=o,r=(n("4d7a"),n("2877")),l=Object(r["a"])(c,s,i,!1,null,"86e641a2",null);e["default"]=l.exports},"6e03":function(t,e,n){},"9eb5":function(t,e,n){t.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"}}]);
//# sourceMappingURL=chunk-5a6377df.2be16a68.js.map