<template>
  <img v-if="img" :src="img" alt="bg" />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta" />
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      answer: null,
      img: null,

      //queremos validar esta pregunta por lo que sera default false
      isValidQuestion: false,
    };
  },
  //watch observa los cambios de una propiedad
  //en este caso los cambios que hago con la propiedad question
  methods: {
    async getAnswer() {
      this.answer = "...Pensando";

      //HAcemos la peticion  http de la api usar await, y podemos desestructurar data
      //por las propiedades del objeto json que son answer y data

      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );

      //igualamos el answer de la propiedad con el del fetch
      //aqui mismo podemos evaluar si queremos cambiar el idioma con un ternario
      //el yes ya viene en el fetch y condicionamos al español
      this.answer = answer === "yes" ? "SI!" : "NO";
      this.img = image;
    },
  },
  watch: {
    question(value, oldValue) {
      //empezara como false la validacion hasta que identifique el ?
      this.isValidQuestion = false;
      //identificamos el signo de ?
      if (!value.includes("?")) return;
      this.isValidQuestion = true;
      this.getAnswer();
      //No es buena practica llenar de codigo aqui es mejor realizar un metodo
    },
  },
};
</script>

<style>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
