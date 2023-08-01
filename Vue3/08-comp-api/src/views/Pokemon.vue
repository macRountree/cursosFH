<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando.......</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>

    <div>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />

      <router-link :to="{ name: 'pokemon-search' }"> Regresar</router-link>
    </div>
  </template>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../composables/usePokemon";
export default {
  setup() {
    const route = useRoute();

    const { pokemon, isLoading, errorMessage, searchPokemonn } = usePokemon(
      route.params.id
    );
    watch(
      () => route.params.id,
      () => {
        searchPokemonn(route.params.id);
      }
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("Salir ?");

      if (!answer) return false;
    });
    return {
      pokemon,
      errorMessage,
      isLoading,
      searchPokemonn,
    };
  },
};
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 20rem;
}
</style>
