/*
 > Sustitucion LISKOV
 > Si una clase A es exteds por una clase B  deberiamos
 poder sustituirla sin alterar las propiedades del sistema
*/

import { Tesla, Audi, Toyota, Honda, Vehicle } from "./05-liskov-b";

(() => {
  //Se violenta Liskov porque no puedo sustituir una clase de carros o bien agregar otro auto
  //Ya que creamos la clase abstracta Vehicle la importamos y la tipamos en cars
  // hecho esto esta funcion ya es tolerable si queremos agregar otro auto
  //violamos el principio OPEN/close ya que iolentamos el if agregando el nuevo carro
  const printCarSeats = (cars: Vehicle[]) => {
    //en lugar de barrer los carros con un for/if podemos usar el forEach
    //ya que barremos cada carro de un arreglo (vehicle[]) y llamamos el name con car.constructor.name y car.getnumber
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log("Tesla", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log("Audi", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log("Toyota", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log("Honda", car.getNumberOfSeats());
    //     continue;
    //   }
    // }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
