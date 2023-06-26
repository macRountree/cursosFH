//Las clases en JS se parecen a las de JAVA y C
/* la primera letra de la clase se pone en MAyuscula */
/*Usar upperCamelCase */
//*Propiedades estaticas permiten usar metodos y prop sin instanciar la clase */
class Persona {
  /*paso1: constructor es un metodo que se ejecuta cuando se crea una nueva instancia en Persona */
  /*Es el unico objeto una instancia de un objeto y no regresa undefined en consola */
  /** No estamos inicializando variable.. son propiedades de clase
   Ya está implementado el use strict
   */

  //* declarar estas propiedades son opcionales.. si ocupamos otra propiedad pero no se usa marcara error */
  static _conteo = 0;

  static getConteo() {
    return Persona._conteo + "instancia";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Hola a todos");
  }
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sincondigo",
    frase = "SIn frase"
  ) {
    /*codigo= 'abc nos lanzara error porque necesitamos traernos
    la propiedad codigo de persona por lo cual debemos traerla con this.codigo'
    Si no le pasamos argumentos a new PErsona .. imprime undefined */
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
    Persona._conteo++;
  }

  /*Establecer sets y GETS
   
  
  */
  /*el set usualmente solo recibe un argumento, establecen un valor */
  /*los sets no puedn tner el mismo nombre que la propiedad (comida='') */
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    /*siempre es bueno return en gets/*/
    return `La comida de ${this.nombre} es ${this.comida}`;
  }

  /*Los metodos se declaran despues del constructor o de los getters y setters */
  quienSoy() {
    console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    /*Si queremos llamar aquien soy podemos poner el metodo dentr de mi frase */
    this.quienSoy();
    console.log(`${this.codigo} dice : ${this.frase}`);
  }
}
/*instancias de la clase Persona */
const Spiderman = new Persona("PEterParker", "Spiderman", "Tu vecino");
const Superman = new Persona("Kal", "Superman", "Daily");

// console.log(Spiderman, Superman);
/*para ejecutar una instancia con el metodo creado.. se hace la siguiente sintaxis */
Spiderman.miFrase();

Spiderman.setComidaFavorita = "Comida tia May";

// console.log(Spiderman);

// console.log(Spiderman.getComidaFavorita);

//como tenemos 2 instancias (spiderman y superman)
// console.log("Conteo estatico", Persona._conteo);
console.log(Persona._conteo);
Persona.mensaje();
