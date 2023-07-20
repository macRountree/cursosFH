<template>
  <NavbarVue />
  <img alt="Vue logo" src="./assets/logo.png" />

  <router-view />
</template>

<script>
// import NavbarVue from "./modules/shared/components/Navbar.vue";

import { defineAsyncComponent } from "vue";

export default {
  name: "App",
  //Para importar y realizar el lazyloads a componentes ajenos al router.. debemos importar defineAsyncComponents de vue y
  //dclararlo como un metodo con un argumento que sera nuestro import de dicho componente
  components: {
    NavbarVue: defineAsyncComponent(() =>
      import(
        /*webpackChunkName:"NavbarVue */ "./modules/shared/components/Navbar"
      )
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
