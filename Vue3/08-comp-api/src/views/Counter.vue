<template>
  <h1>Counter View</h1>
  <h3>{{ counter }}</h3>
  <button @click="decrease">-1</button> -
  <button @click="increase">+1</button>
</template>

<script>
import useCounter from "@/composables/useCounter";
export default {
  name: "Counter",
  props: {},
  emits: [],
  setup() {
    //el useCounter se puede desestructurar porque el return es un objet
    const { counter, increase, decrease } = useCounter(25);

    //para tener acceso al decrease e increase y usarlos en el template.. retornamos

    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style></style>
