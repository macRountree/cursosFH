/*
 > Sustitucion LISKOV
 > Si una clase A es exteds por una clase B  deberiamos
 poder sustituirla sin alterar las propiedades del sistema
*/
export abstract class Vehicle {
  //buscamos que las clases tengan todos los metodos y propiedades
  //   getNumberOfSeats(): number {
  //     throw Error("Aun no implementado");
  //   }

  abstract getNumberOfSeats(): number;
}
export class Tesla extends Vehicle {
  //como cambiamos el metodo.. el constructor nos pedira el super para heredar Vehicle
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
