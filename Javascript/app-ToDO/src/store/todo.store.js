import { ToDO } from "../ToDO/models/todo.model";
//definimos el estado global demi app
//*SI NO HACEMOS la export de cada funcion... se quedaran como privados
export const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};
const state = {
  todos: [
    //uuid pondra varios ids creados desde todo.model.js
    //al final esto se puede borrar ya que al empezar no queremos estos datos por default
    // new ToDO("Piedra del Alma"),
    // new ToDO("Piedra del Infinito"),
    // new ToDO("Piedra del tiempo"),
    // new ToDO("Piedra del Poder"),
    // new ToDO("Piedra del Sex"),
  ],

  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("Init Store");
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;
  //destructuramos el objeto
  const { todos = [], filter = Filters.All } = JSON.parse(
    localStorage.getItem("state")
  );

  state.todos = todos;
  state.filter = filter;
};
const saveLocalStorage = () => {
  //JSON stringify es un metodo del objeto JSON que serializa cn un string el state en este caso
  localStorage.setItem("state", JSON.stringify(state));
};
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => todo.done);

    default:
      throw new Error(`Opcion ${filter} no es valida`);
  }
};
//forma de instertar un nueto toDO
//podemos recibir la instancia creadadel obojeto state (ToDO) o
// solo la descripcion de la clase toDo importada de todo.model.js

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  //verificamos si description tenga un valor

  if (!description) throw new Error("Descricion es Reqerida");
  state.todos.push(new ToDO(description));
  saveLocalStorage();
};
//hacemos un toggle
const toggleTodo = (todoId) => {
  //regresamos un nuevo arreglo
  //con map barro los todos del arreglo todos es cmo un fr
  state.todos = state.todos.map((todo) => {
    //si el id es igual que el todo id... lo revierte si es tru lo convierte a false y alreves
    if (todo.id === todoId) {
      //si el dodo done estaba True lo convierte a false y viceversa
      todo.done = !todo.done;
    }
    //retornamos todo
    return todo;
  });
  saveLocalStorage();
};

//para borrar todo
const deleteTodo = (todoId) => {
  //tomamos todos los todos que no coincidan con el id
  //y lo borra del listado
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveLocalStorage();
};

//para borrar tod completado
const deleteCompleted = () => {
  //lo mismo que delteTodo solo que verifico si todo.done sea true
  state.todos = state.todos.filter((todo) => !todo.done);
  saveLocalStorage();
};

//para establecer el filtro

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveLocalStorage();
};

//Algo que me permita saber el filtro seleccionada
//?LO HACemos para no exponer el objeto state

const getCurrentFilter = () => {
  return state.filter;
};

//Declaramos un export para que la gente q revise e codigo lo vea o
//consuma
export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  saveLocalStorage,
  setFilter,
  toggleTodo,
};
