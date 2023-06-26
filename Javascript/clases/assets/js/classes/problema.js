const mac = {
  nombre: "mac",
  edad: 30,
  imprimir() {
    console.log(`nombre ${this.nombre} -edad ${this.edad}`);
  },
};
const sex = {
  nombre: "sex",
  edad: 9,
};
const litro4 = {
  nombre: "4",
  edad: 6,
};

mac.imprimir();

/*upperCamelCase */

function Persona(nombre, edad) {
  console.log("Linea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`nombre ${this.nombre} -edad ${this.edad}`);
  };
}
//creamos una nueva instancia con new
//maria es un objeto
const maria = new Persona("Maria", 20);
const marasdia = new Persona("adsa", 20);

console.log(maria);
marasdia.imprimir();
maria.imprimir();
