<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h1>HOlamundo</h1>
    </li> -->

    <slot v-for="user in users" :key="user.id"></slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
