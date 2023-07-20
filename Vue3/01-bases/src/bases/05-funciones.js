//FUNCIONES =>

const saludar = (xyx) => `Holamundo ${xyx}`;

const nombre = "tony";
//aqui en consola manda el argumento tony es decir en este caso xyx entonces
// en consola sale 'hola mundo' + nombre  = hola mundo tony
// console.log(saludar(nombre));

const getUser = () => {
  return {
    uid: "ABOC",
    user: "tonysex",
  };
};

const heroes = [
  { id: 1, name: "BAtman" },
  { id: 2, name: "Superman" },
];
//some barre los objetos... si heroe.id  es igual a 1 regresa un booleano
const existe = heroes.some((heroe) => heroe.id === 3);
//Find busca un elemente en el arreglo que cumpla la condicion heroee.id ===1
const heroe = heroes.find((heroe) => heroe.id === 1);
// console.log(existe);

console.log(heroe.name);
