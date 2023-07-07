(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunctions: addTwoNumbers;
  // debemos poner como argumento los numeros y su restriccion de tipo en la funcion
  addNumbersFunctions = (a: number, b: number) => {
    return 10;
  };
})();
