<template>
  <h1>About Page</h1>
  <h2>{{ name }}</h2>

  <button @click="onChangeName">Cambiar Nombre</button>
</template>

<script>
export default {
  data() {
    return { name: "mac" };
  },

  methods: {
    onChangeName() {
      console.log("Cambio fr nomtbr");
      this.name = "Charles";
    },
  },
  //el beforeCreate es antes de que la data se ha creado
  beforeCreate() {
    console.log("beforeCreate");
  },
  create() {
    //aqui se pueden crear peticions http
    this.name = " Carls";
    console.log("Create");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style></style>
