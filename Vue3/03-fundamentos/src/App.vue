<template>
  <Indecision />
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <!-- //componente importado de hellowordl.vue -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <CounterVue title="Entraron" /> -->
  <!-- //ambos counter son independientes a menos que cambiemos el nombre-->

  <!-- <CounterVue :start="101" /> -->
</template>

<script>
// import CounterVue from "./components/Counter.vue";
import Indecision from "./components/indecision.vue";

// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // name es un nombre que le damos a la app.. solo se vera en la consola/vue
  name: "App",
  //tenemos que describir los componentes que usaremos
  components: {
    // CounterVue,
    Indecision,
    // HelloWorld,
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
