<template>
  <h1>CounterView</h1>

  <h3>{{ counter }}</h3>
  <button>+1</button>
  <button>-1</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Counter",
  props: {},
  emits: [],
  //Lo demas se quedara dentro del setup
  setup() {
    const counter = ref(5);

    return {
      counter,
    };
  },
};
</script>

<style></style>
