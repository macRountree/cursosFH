//OBJETO
const persona = {
  nombre: "Tony",
  apellid: "Stark",
  edad: 45,
  direccion: {
    ciudad: "NY",
    zip: 26565,
    lat: 54654,
    lng: 15615,
  },
};

//Los objetos son pasados por referencia no por valor (cualquier mod se cambia en todas las referenciasss)

const persona2 = { ...persona }; //el operador spread rompe la referencia y mantiene el objeto persona estatico y el nuevo objeto modificado
//spread en objetos se utiliza  (...) ,, el spread en arreglos se utiliza [...]

persona2.nombre = "Peter";
console.log(persona2);

const personaSet = new Set();
console.log(persona);
console.log(personaSet);
