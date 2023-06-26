//Singleton es una instancia unica en la clase

class Singleton {
  static instancia;
  nombre = "";
  constructor(nombre = "") {
    // console.log(Singleton.instancia);

    //si ya existe singletn instancia retorna la misma singletn
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;
    // return this;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Hulk");
const instancia3 = new Singleton("Thor");

console.log(`nmbre instancia es: ${instancia1.nombre}`);
console.log(`nmbre instancia es: ${instancia2.nombre}`);
console.log(`nmbre instancia es: ${instancia3.nombre}`);
