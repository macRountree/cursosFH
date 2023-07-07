(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }
  // Si queremos crear una clase  con las mismas caracteristicas
  // que la interface o las heredes se utiliza "implements"en lugar de extends
  interface Human {
    age: number;
  }

  // // class Mutant implements Xmen, Human {
  //   public age: number;
  //   public name: string;
  //   public realName: string;

  // mutantPower(id: number) {
  //   return this.name + "--S" + this.realName;
  // }
})();
