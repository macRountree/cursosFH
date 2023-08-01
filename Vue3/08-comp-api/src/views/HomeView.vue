<template>
  <div class="home">
    <h1>Reactive vs ref</h1>

    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">CambiarHulk</button>

    <h3>ironman: {{ ironmansALive }}</h3>
    <h3>hulk : {{ hulksALive }}</h3>

    <button @click="changeStatus">Cambiar Estatus</button>

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/><<< -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",

  setup() {
    //?REF FUNCIONA NO SOLO CON OBJETOS
    const ironman = ref({ name: "Tony", age: 50 });

    //! REACTIVE SOLO FUNCIONA CON OBJETOS
    const hulk = reactive({ name: "Bruce", age: 50 });

    let ironmansALive = reactive(false);
    const hulksALive = ref(true);

    const changeStatus = () => {
      hulksALive.value = !hulksALive.value;
      //no podemos hacerlo con ironman is  porque es reactivo
      // ironmansALive = !ironmansALive;
    };

    return {
      ironman,
      hulk,
      ironmansALive,
      hulksALive,
      changeStatus,

      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce BAnner";
        hulk.age = 45;
      },
    };
  },
  // components: {
  //   HelloWorld
  // }
};
</script>
