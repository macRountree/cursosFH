//====IMPORTACIONES===
import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./usecasses/render-todo";

//para que nuestro id no sea muy volatil creamos una variable

const ElementsId = {
  TodoList: ".todo-list",
  newTodoInput: "#new-todo-input",
  clearCompleted: ".clear-completed",
  TodoFilters: ".filtro",
};
/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  // traemos los todos y  los renderizamos
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementsId.TodoList, todos);
  };

  //autoinvocacion de una funcion
  //Lo realizamos asi .. porque aqui se crea todo

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);

    displayTodos();
  })();

  //==========REFERENCIAS HTML

  const newDescriptions = document.querySelector(ElementsId.newTodoInput);
  const todoList = document.querySelector(ElementsId.TodoList);
  const clearCompleto = document.querySelector(ElementsId.clearCompleted);
  const filtersLIs = document.querySelector(ElementsId.TodoFilters);
  //LISTENERS

  newDescriptions.addEventListener("keyup", (evento) => {
    if (evento.keyCode !== 13) return;
    if (evento.target.value.trim().length === 0) return;

    todoStore.addTodo(evento.target.value);
    displayTodos();
    evento.target.value = "";
  });

  todoList.addEventListener("click", (evento) => {
    const element = evento.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });
  todoList.addEventListener("click", (evento) => {
    const Destruir = evento.target.className === "destroy";
    const element = evento.target.closest("[data-id]");

    if (!element || !Destruir) return;
    todoStore.deleteTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  clearCompleto.addEventListener("click", (e) => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  //FiltesUl no tiene listener porq es un arreglo
  //se opta usar forEach

  filtersLIs.forEach((element) => {
    element.addEventListener("click", (element) => {
      filtersLIs.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }

      displayTodos();
    });
  });
};
