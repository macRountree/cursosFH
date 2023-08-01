import { computed } from "vue";
import { useStore } from "vuex";

const useUI = () => {
  const store = useStore();

  return {
    //Side Menu Option
    //podemos establecer setters y getters en una misma funcion
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/isSideMenuOpen"];
      },
      set(val) {
        console.log(val);

        store.commit("ui/toggleSideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};

export default useUI;
