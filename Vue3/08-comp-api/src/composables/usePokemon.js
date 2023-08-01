import axios from "axios";
import { ref } from "vue";

const usePokemon = (pokeonId = 1) => {
  const pokemon = ref();
  const isLoading = ref(false);

  const errorMessage = ref();

  const searchPokemonn = async (id) => {
    if (!id) return;
    isLoading.value = true;
    pokemon.value = null;
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id} `
      );

      pokemon.value = data;
      errorMessage.value = null;

      console.log(data);
    } catch (errorMessage) {
      errorMessage.value = "No se pudo cargar el Pkemon";
    }

    isLoading.value = false;
  };
  searchPokemonn(pokeonId);
  return {
    errorMessage,
    isLoading,
    pokemon,
    searchPokemonn,
  };
};

export default usePokemon;
