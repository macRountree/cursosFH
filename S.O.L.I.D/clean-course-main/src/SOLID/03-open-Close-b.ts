// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from "axios";
import { httpClient } from "./04-OC-c";

//Nuestra app tiene fuerte dependecia a axios
//el metodo get puede cambiar en el futuro
export class TodoService {
  /*
  como ya tenemos una clase en otro archiv de nuestro http
    creamos un constructor en cada clase con su arg http tipado con la clase HTtt Client
    asi nos desacemos con la dependencia de axios y si hay algun cambio
    solo modficamos el archivo en donde tenemos alojado nuestra clase HTTTPclient
*/
  constructor(private http: httpClient) {}
  async getTodoItems() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private http: httpClient) {}
  async getPosts() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private http: httpClient) {}
  async getPhotos() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
