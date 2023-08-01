<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <user-list :users="users">
      <h1>holamundo</h1>
    </user-list>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span> Página: {{ currentPage }}</span>
</template>

<script>
import UserList from "@/components/UserList.vue";
import useUsers from "../composables/useUsers";
export default {
  components: {
    UserList,
  },
  setup() {
    const { currentPage, errorMessage, isLoading, nextPage, prevPage, users } =
      useUsers();

    return {
      isLoading,
      errorMessage,
      users,
      prevPage,
      nextPage,
      currentPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>
