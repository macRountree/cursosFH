import { computed, ref } from "vue";
import { useStore } from "vuex";
const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

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
    createTodo: (text) => store.commit("createTodo", text),
  };
};

export default useTodos;
