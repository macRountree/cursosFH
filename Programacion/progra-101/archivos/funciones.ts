console.log("Hola Mundo");

const greet = (name: string = "Mundo") => {
  console.log(`hola ${name}`);
};

const addTwoNumbers = (num1: number, num2: number) => {
  return console.log(num1 + num2);
};
let total = addTwoNumbers(1, 2);

// let firstName = "Macoy";

// greet(firstName);
console.log(`total es :${total}`);
