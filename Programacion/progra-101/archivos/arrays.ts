import { log } from "console";





let people:string[] = ['Fernando', 'Mac', 'Edi']


let flowers:string[]= ['Rosa','Girasol', 'lirio', 'Valeria']



for ( let flor = 0; flor <= flowers.length-1; flor ++) {
  console.log(flowers[flor]);
}


//TAREA




let employees:string[] =['Fernando', 'Mac', 'Edi']
let salaries:number[] =[1555, 2300, 4545]

for ( let empleado= 0; empleado <= employees.length -1 ; empleado++){
  console.log( `${employees[empleado] } tiene un salario de ${salaries[empleado]}`);

}