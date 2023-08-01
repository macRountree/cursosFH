<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>
    <div class="row q-mb-md text-center">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-secondary">2</div>
      <div class="col col-4 bg-accent">3</div>
    </div>
    <div class="row q-mb-md text-center justify-center">
      <div class="col col-4 bg-primary">1</div>
      <div class="col col-4 bg-secondary">2</div>
    </div>

    <q-separator spaced />
    <div class="row q-mb-md text-center justify-between">
      <div class="col-12 col-sm-6 col-md-4 bg-primary">1</div>
      <div class="col-12 col-sm-6 col-md-4 bg-secondary">2</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-evenly">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">1</div>
      <div class="square-box bg-accent">1</div>
    </div>
    <q-separator spaced />

    <div class="column q-mb-md items-center justify-around bg-dark">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">1</div>
      <div class="square-box bg-accent">1</div>
    </div>
    <q-separator spaced />

    <div class="column custom-high q-mb-md items-center justify-evenly bg-dark">
      <div class="square-box bg-primary">1</div>
      <div class="square-box bg-secondary">1</div>
      <div class="square-box bg-accent">1</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlexVue",
});
</script>

<style scoped>
.col,
.col-4,
.col-6,
.col-12 {
  height: 50px;
  width: 50px;
}

.square-box {
  height: 50px;
  width: 50px;
}

.custom-high {
  height: 250px;
}
</style>
