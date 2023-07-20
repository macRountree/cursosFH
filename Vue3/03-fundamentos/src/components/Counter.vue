// usamos un shortcut llamado 'vue' para generar el html

<template>
  <h2>{{ customTitle }}</h2>

  <!-- los componentes se busca que no tengan calculos o procedimientos muy complejos
  los componenetes deben ser lo mas sencillos posibles

  **Podemos llamar metodos dentre del template como (getSquare())
  ** Si queremos hacer calculos es mejor usar propiedades computed y solo llamara el metodo
   -->
  <p>{{ counter }} <sup>2 </sup>= {{ squareCounter }}</p>

  <div>
    <!-- si queremo escuchar eventos (como el click) podemos usar el shortcut @ que
    sustituira al v-on -->
    <button @:click="decreaseCounter">-1</button>
    <button @:click="increaseCounter">+1</button>
  </div>
  <!-- <div>{{ counter }}</div> -->
</template>

<script>
export default {
  // aqui tuilizamos props para traernos el atributo de Counter Vue con el title diferente
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      // required: true,

      //queremos validar que la property sea mayor a 100
      //validator sirve para validar nuestras propiedades
      validator(value) {
        return value > -1;
      },
    },
  },
  // reactivo siginifica que vue va a reaccionar a cualquier cambio de alguna propiedad
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquare() {
      //   console.log("getSquareValue");
      return this.counter * this.counter;
    },

    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },

  computed: {
    squareCounter() {
      //   console.log("Scounter");
      return this.counter * this.counter;
    },
    //si el titulo no viene .. mostrara counter
    customTitle() {
      return this.title ? this.title : "Counter";
      //tambien se puede hacer asi
      // return this.title || "Counter";
    },
  },
};
</script>

<style>
button {
  background-color: rgb(15, 207, 15);
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;

  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: rgba(15, 207, 15, 0.61);
  transition: 0.3s ease-in-out;
}
</style>
