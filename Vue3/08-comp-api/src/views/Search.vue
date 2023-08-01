<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="# de Pokemon"
      v-model="pokemonId"
      ref="txtSearchId"
    />
  </form>

  <span>Presione enter para</span>
</template>

<script>
import { ref, onActivated } from "vue";

import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const pokemonId = ref(1);
    const txtSearchId = ref();

    onActivated(() => {
      txtSearchId.value.select();
    });

    return {
      pokemonId,
      txtSearchId,
      //disparamos el evento para que dispare el submit

      onSubmit: () => {
        console.log("Pokemon a buscar: ", pokemonId.value);

        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
      },
    };
  },
};
</script>

<style></style>
