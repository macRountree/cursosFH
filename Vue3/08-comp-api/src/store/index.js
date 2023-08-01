import { createStore } from "vuex";
import { v4 as uuidV4 } from "uuid";

export default createStore({
  state: {
    todos: [
      {
        id: "1",
        text: "Recolectar las piedras ",
        completed: false,
      },
      {
        id: "2",
        text: "piedra del Alma ",
        completed: true,
      },
      {
        id: "3",
        text: "Piedra del Tiempo ",
        completed: true,
      },
      {
        id: "4",
        text: " Piedra de Poder ",
        completed: false,
      },
      {
        id: "5",
        text: "Piedra de  la realidad ",
        completed: false,
      },
    ],
  },
  //creamos el getter el cual regresa todos los todos que NO estan completados
  getters: {
    pendingTodos(state, getters, rootState) {
      // console.log(state, getters, rootState);
      return state.todos.filter((todo) => !todo.completed);
    },
    allTodos(state) {
      return state.todos;
    },

    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    //este getter ... en lugar de retornar un objeto .. retorna una funcion
    getTodosByTab: (state, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;

        case "completed":
          return getters.completedTodos;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },

    createTodo(state, text = "") {
      if (text.length <= 1) return;
      state.todos.push({ id: uuidV4(), completed: false, text });
    },
  },
  actions: {},
  modules: {},
});
