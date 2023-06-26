class Persona {
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info : ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "mac",
  apellido = "Rountree",
  pais = "Mx";

//creamos un objeto pero no se puede realizar una instancia de este objeto Fher
//tampoco podemos crear 2 constructores en una misma clase
// lo que se puede hacer es crear un metodo static y pasarle los argumentos
//retornar la instancia como en la linea 3
//Despues declaramos la clase persona2 trayendo el metodo porObjeto con el objeto creado
const Fernando = {
  nombre: "fer",
  apellido: "herrera",
  pais: "Costarica",
};
const persona1 = new Persona(nombre1, apellido, pais);
const persona2 = Persona.porObjeto(Fernando);
persona1.getInfo();
persona2.getInfo();
