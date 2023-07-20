<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>

  <div v-if="pokemon">
    <!-- Aqui metemos el sprite del pokemon metemos el path del objeto pokemon hasta el sprite mismo 
    No olvidar poner (:) antes de cada atributo-->
    <img :src="pokemon.sprites.front_shiny" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
      // id: this.$route.params.id,
    };
  },

  //ls metodos normalmnte se llaman en el created
  created() {
    // const { id } = this.$route.params;
    // console.log(id);
    // this.id = id;
    // console.log(this.$attrs);

    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        ).then((r) => r.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.router.push("/");
        console.log("Nadas");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>
