//no queremos export el state para que nadie lo manipule
const state = {
  currentPages: 0,
  users: [],
};

//metodo que carga la siguiente pagina
//solicita a un caso de uso donde carga a los usuarios dela pagina solicitada
const loadNextPage = async () => {
  throw new Error("Falta implementar");
};

//carga pagina anterior
const loadPreviousPage = async () => {
  throw new Error("Falta implementar");
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
