<template>
  <q-page class="flex column q-pa-md">
    <!-- El h1 tiene margenes por defecto es recomendable quitarlos -->
    <span class="text-h1">Typografy</span>
    <span class="text-h2">Typografy</span>
    <span class="text-h3">Typografy</span>
    <span class="text-h4">Typografy</span>
    <span class="text-h5">Typografy</span>

    <q-separator />

    <p class="text-body1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
      reprehenderit nemo quod dolores possimus fugit, d vitae.
    </p>

    <p class="text-body2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
      reprehenderit nemo quod dolores possimus fugit, d vitae.
    </p>

    <span class="text-subtitle1">Sub 1</span>
    <span class="text-subtitle2">Sub 2 </span>

    <q-separator />
    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar Menu' : 'Abrir Menu Lateral'"
      class="q-mt-lg"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script>
import useUI from "src/composables/useUI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TypographyVue",
  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();
    return { sideMenuOpen, toggleSideMenu };
  },
});
</script>
