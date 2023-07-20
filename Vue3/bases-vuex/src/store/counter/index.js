import state from "./state";

import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
const counterStore = {
  //TODO: falta aLGO tenemos que poner el NAMESPAcE EN TRU

  namespaced: true,
  state: state,
  mutations: mutations,
  //mutaciones son como metodos que sirven para hacer cambios en el state DEBEN SER SINCRONAS
  //NO ASICNRONAS

  //actions si pueden ser asyncronas.. son depatch
  actions: actions,
  getters: getters,
};

export default counterStore;
