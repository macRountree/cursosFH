

class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;
    constructor(brand: string, type: string){
        this.brand= brand;
        this.doors = 0;
        this.fuelTank= 0;
        this.isRunning= false;
        this.type = type ;
        this.createdAt= 546456;
    }
    //METODOS
    turnOn(){
    if(this.isRunning){
      console.log('Carro Averiado');
      return
    }


    if (this.fuelTank <=0) {
      console.log('El carro no tiene gasolina');
      return
      
    }
    this.isRunning = true;
    console.log('El carro esta encendido');
  }

  filTank(gas:number){

    if ( gas <= 0) {
      console.log('gas debe ser positivo');
      return
    }

    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100){
      this.fuelTank = 100;
    }else{

      this.fuelTank = newFuelTank
      
    }
  }
  }

let myMazda = new Car('Mazda', 'Sedan');

myMazda.brand = 'Mazda';
myMazda.type = 'Sedan'

// console.log(myMazda);

// myMazda.turnOn()

myMazda.filTank(5)
myMazda.filTank(96)
myMazda.turnOn()

console.log(myMazda);