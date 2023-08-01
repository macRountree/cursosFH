<template>
  <h1>Slots</h1>
  <button @click="openModal">Abrir Modal</button>
  <!-- <Modal /> -->
  <modal v-if="isOpen" title="HOla mundo" @on:Close="closeModal">
    <!-- <h3>Titulo</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus.
      Facilis nulla provident fugit,
    </p>

    <button>Cerrar</button> -->

    <template v-slot:header> <h2>titulo del modal</h2> </template>
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Salir</button></template
    >

    <template v-slot:exposed="{ newTitle }">
      <h1>{{ newTitle }}</h1>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
export default {
  components: {
    Modal,
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style></style>
