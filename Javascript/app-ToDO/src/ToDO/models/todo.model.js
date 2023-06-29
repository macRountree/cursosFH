import { v4 as uuid } from "uuid";

export class ToDO {
  //trabajamos con clases para hacer  nuevas instancias

  /**
   *
   * @param {String} description
   */
  constructor(description) {
    //propiedades
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createAt = new Date();
  }
}
