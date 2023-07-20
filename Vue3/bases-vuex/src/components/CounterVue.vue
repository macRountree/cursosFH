<template>
  <h1>Counter -VUEX</h1>

  <h2>direct access {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <!-- Para utilizar las mutaciones agregamos un listener
  el 'increment no tiene nada que ver con la mutacion'
  increment seria el metodo delcarado en methods -->
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct Getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),

    //se puede hacer de la siuiente manera

    // ...mapState({
    //   count: (state) => state.count,
    //   lastMutation: (state) => state.lastMutation,
    // }),
  },
  methods: {
    increment() {
      //para traernos el increment de la mutacion index.js hacemos un commits
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      //para traernos el increment de la mutacion index.js hacemos un commits
      this.$store.commit("counter/incrementBy", 5);
    },
    //para extraer todas las accioes del modulo lo especificamos en map acction

    ...mapActions("counter", ["incrementRandomInt"]),
    // ...mapActions({
    //   randomInt: "incrementRandomInt",
    // }),

    // incrementRandomInt() {
    //   this.$store.dispatch("incrementRandomInt");
    // },
  },
};
</script>

<style></style>
