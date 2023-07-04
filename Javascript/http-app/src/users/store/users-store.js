import { loadUsersByPage } from "../use-casses/load-users-ByPage";

//no queremos export el state para que nadie lo manipule
const state = {
  currentPages: 0,
  users: [],
};

//metodo que carga la siguiente pagina
//solicita a un caso de uso donde carga a los usuarios dela pagina solicitada
const loadNextPage = async () => {
  //llamamos nuestro load userBypages seleccionamos el objeto con el current page con la primera pagina
  const user = await loadUsersByPage(state.currentPages + 1);
  //si nuestra pagina de usuarios esta vacia entonces se sume el currentPage +1
  //en este case el state.users sera igual al user que declaramos arriba
  if (user.length === 0) return;
  state.currentPages += 1;
  state.users = user;
};

//carga pagina anterior
const loadPreviousPage = async () => {
  //primero verificamos que no estemos en una pagina que no sea la 1
  if (state.currentPages === 1) return;
  //cargamos la pagina

  const users = await loadUsersByPage(state.currentPages - 1);
  state.users = users;
  state.currentPages -= 1;
};

//

const onUserChanged = () => {
  throw new Error("Falta implementar");
};

//
const reloadPage = async () => {
  throw new Error("Falta implementar");
};

export default {
  loadNextPage,
  reloadPage,
  onUserChanged,
  loadPreviousPage,

  //saber cuales son los usuarios
  //usamos el spread para esparcir cada user
  getUsers: () => [...state.users],
  //obtener la pagina actual
  //no pasa por referencia por ser primitivo
  getCurrentPage: () => state.currentPages,
};
