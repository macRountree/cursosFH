//toda la lógica del setup de counter lo movemos a composables (const, metodos, return)

import { ref } from "vue";

const useCounter = (initValue = 5) => {
  //los metodos creados .. en este caso para incrementar o disminuir  se crea aqui no se ocupara la data
  const counter = ref(initValue);
  // const increase = () => {
  //   counter.value++;
  // };
  // const decrease = () => {
  //   counter.value--;
  // };

  //para que nuestro counter del h3 sea visible... debemos retornar un objeto con la variable counter

  return {
    //?Lo que queramos que se visualize lo pondremos aqui
    counter,

    //como exportamos el decrease y el increase... podemos realizar las funciones por aqui en lugar del setup
    decrease: () => counter.value--,
    increase: () => counter.value++,
  };
};

export default useCounter;
