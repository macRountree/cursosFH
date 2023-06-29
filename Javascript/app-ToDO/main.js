import "./style.css";
import { App } from "./src/ToDO/app";
import todoStore from "./src/store/todo.store";

todoStore.initStore();
App("#app");
