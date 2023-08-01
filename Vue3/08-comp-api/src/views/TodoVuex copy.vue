<template>
  <h1>Thanos ToDo list</h1>
  <!-- SI QUEREMOS ve la lista de tareas solamente ingresamos al store.state.todos.length que es el total 
  no es recomendable acceder a los todos de esta maneras ya que si se tiene mucha logica o funcionessera dificil de comprender el template
  -->
  <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->

  <h4>Pendientes: {{ pending.length }}</h4>
  <hr />
  <h4>Todos: {{ all.length }}</h4>
  <hr />
  <h4>Completados: {{ completed.length }}</h4>

  <div class="btn">
    <button
      :class="{ active: currentTab === 'all' }"
      @click="currentTab = 'all'"
    >
      Todos
    </button>
    <button
      :class="{ active: currentTab === 'pending' }"
      @click="currentTab = 'pending'"
    >
      Pendientes
    </button>
    <button
      :class="{ active: currentTab === 'completed' }"
      @click="currentTab = 'completed'"
    >
      Completados
    </button>
  </div>

  <div>
    <ul>
      <!-- Cuando trabajamos con un vfor tenemos que poner un atribut de :key
        si queremso que nuestra clase tache los completados .. le decimos que nuestro
        todo.completed ===true
       -->
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const currentTab = ref("all");
    //commit es para ejecutar mutations
    //dispatch es para despachar acciones

    return {
      //el getter pending sera una funcion computada.. el cual nos traemos desde el store.getters y con corchetes nos traemos el pending todos del getters del store
      pending: computed(() => store.getters["pendingTodos"]),
      all: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),
      currentTab,

      getTodosByTab: computed(() =>
        //Nos traemos la funcion al return y al final mandamos la funcion "()" con el valor del current Tab
        //asi solamente cambiamos  la funcion computada en el v-for de la lista
        store.getters["getTodosByTab"](currentTab.value)
      ),

      // metodos
      toggleTodo: (id) => store.commit("toggleTodo", id),
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  margin-top: 10px;
  cursor: pointer;
}

.btn {
  display: flex;
  justify-content: space-evenly;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
