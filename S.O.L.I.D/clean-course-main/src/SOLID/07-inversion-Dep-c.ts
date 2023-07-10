/*
    =============INVERSION DE DEPENDENCIAS============00000

    >moduls de alto nivel no deben depender de los bajos nivel  capas superiores no dependen de componenetes menos importantes
    > frontend no deben dictar de reglas de negocios
    >Ambs deben dedepender de abstracciones
    > Los detalles deberian de depender de abstraccions y no viceversa

  > inversion de dependencias  debemos usar clases abstractas para poder usarlos en otros archivos
*/
import localPost from "../data/local-database.json";
import { Post } from "./07-inversion-Dep-b";

export abstract class PostProvider {
  abstract getPost(): Promise<Post[]>;
}
export class LocalDataBaseService implements PostProvider {
  constructor() {}

  async getPost() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];
  }
}

//podemos crearnos tro proveedor

export class JSONdataBaseService implements PostProvider {
  async getPost() {
    return localPost;
  }
}

//webAPIPOst service
// https://jsonplaceholder.typicode.com/posts
export class WebApiPostService implements PostProvider {
  // jsonUrl = "https://jsonplaceholder.typicode.com/posts#";
  async getPost(): Promise<Post[]> {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

    return await resp.json();

    // return post;
  }
}
