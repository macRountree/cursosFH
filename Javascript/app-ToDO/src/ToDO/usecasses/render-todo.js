//Ocupamos el elemento para insertar mediante el id,
//y ocupamos los todos

import { ToDO } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

let element;
/**
 *
 * @param {String} elementId
 * @param {ToDO} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) {
    element = document.querySelector(elementId);
  }

  if (!element) throw new Error(`Element ${elementId}no se encontro`);

  element.innerHTML = "";
  todos.forEach((todos) => {
    element.append(createTodoHTML(todos));
  });
};
