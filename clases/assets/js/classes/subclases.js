class Persona {
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
    codigo = "Si codigo",
    frase = "SIn frase"
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.frase = frase;
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice : ${this.frase}`);
  }
}

// la nueva clase heroe hereda las propiedades de la clase persona
//con la palaba privada extends .. si imprimimos en consola spiderman nos saldra la propieda clan
class Heroe extends Persona {
  clan = "sin clan";
  //si ponemos un constructor en una subclase da error
  //para eso llamamos  la clase padre PErsona
  //Pdemos usar los mismos argumentos  que persona
  constructor(nombre, codigo, frase) {
    //llamamos la palabra reservada super para llamar a la clase Persona
    //se debe declara primer el super antes que traer el clan
    super(nombre, codigo, frase);
    this.clan = "sin clan";
  }

  quienSoy() {
    console.log(`soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}
const Spiderman = new Heroe("PEterParker", "Spiderman", "Tu vecino");
// const Superman = new Persona("Kal", "Superman", "Daily");

console.log(Spiderman);
Spiderman.quienSoy();
