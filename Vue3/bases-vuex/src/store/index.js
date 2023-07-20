//aqui creamos el store de VUEX

import { createStore } from "vuex";
import counterStore from "./counter";
// import getRandomInt from "../helpers/getRandomInt";
export default createStore({
  modules: {
    counter: counterStore,
  },
  //?CORTAMOS TODO Y LO SEPARAMOS POR MODULOS
  // state: {
  //   //count es una propiedad reactivva que vue lo identificara
  //   count: 1,
  //   lastMutation: "none",
  //   isLoading: false,
  //   lastRandomInt: 0,
  //   //las mezclas propiedades de states deben estar en modulosno amontodandos como arriba
  // },
  // //mutaciones son como metodos que sirven para hacer cambios en el state DEBEN SER SINCRONAS
  // //NO ASICNRONAS
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //     state.lastMutation = "increment";
  //   },
  //   //si queremos realizar una operacion de sumar 5 le asignamos un parametro val
  //   // y se l asigams al count para que reciba el argumento en el commit
  //   incrementBy(state, val) {
  //     state.count += val;
  //     state.lastMutation = "incrementBy" + val;
  //     state.lastRandomInt = val;
  //   },
  //   setLoading(state, val) {
  //     state.isLoading = val;
  //     state.lastMutation = "setLoading" + val;
  //   },
  // },
  // //actions si pueden ser asyncronas.. son depatch
  // actions: {
  //   async incrementRandomInt({ commit }) {
  //     commit("setLoading", true);
  //     const randomInt = await getRandomInt();
  //     commit("incrementBy", randomInt);
  //     commit("setLoading", false);
  //     //como las actions no cambian directamente el state... se utiliza un commit para enviarlo a mutations y asi cambiar el state a traves del mutation
  //   },
  // },
  //los getters pueden ser llamadas en cualquier momento
  // getters: {
  //   squareCount(state) {
  //     return state.count * state.count;
  //   },
  // },
});
