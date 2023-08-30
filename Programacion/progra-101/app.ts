

class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;
    constructor(){
        this.brand= 'No Brand';
        this.doors = 0;
        this.fuelTank= 100;
        this.isRunning= false;
        this.type = 'No Type';
        this.createdAt= 546456;
    }
}

let myMazda = new Car();

console.log(myMazda);