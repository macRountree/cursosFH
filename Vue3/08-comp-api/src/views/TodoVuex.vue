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

  <button @click="isOpen = true">crear Todo</button>

  <modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header> <h1>Nuevo ToDo</h1> </template>
    <template v-slot:body
      ><form
        @submit.prevent="
          createTodo(newTodoText);
          isOpen = false;
        "
      >
        <input type="text" placeholder="Nuevo ToDo" v-model="newTodoText" />
        <button type="submit">Crear</button>
      </form>
    </template>
  </modal>
</template>

<script>
import useTodos from "@/composables/useTodos";
import modal from "@/components/Modal.vue";
import { ref } from "vue";

export default {
  components: { modal },
  setup() {
    const {
      all,
      completed,
      pending,
      currentTab,
      getTodosByTab,
      toggleTodo,
      createTodo,
    } = useTodos();

    return {
      all,
      completed,
      pending,
      createTodo,
      currentTab,
      getTodosByTab,
      toggleTodo,
      isOpen: ref(false),
      newTodoText: ref(""),
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
