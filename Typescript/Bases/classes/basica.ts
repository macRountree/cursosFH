(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;

    //podemos dejar las prop estaticas aqui
    static avgAge: number = 35;
    static getAvgAge() {
      //aqui EStamos retornando el nombre de la clase (Avenger)
      return this.name;
    }
    constructor(
      private name: string,
      private team: string,

      //poner las propiedades opcionales al final
      public realName?: string //si queremos poner propiedades obligatorias debemos inicianizarla
    ) {}

    //debemos definir bio() como publico/private(aunque en Js no conoce el private)
    bio() {
      return `${this.name} ${this.team}`;
    }
  }

  //   const antman: Avenger = new Avenger("Antman", "Cap");

  //   //podemos aaceder a las propiedades globales si referenciamos a la clase
  //   //NO a la instancia (antman)
  //   console.log(Avenger.avgAge);
  //   console.log(antman.bio());

  //   console.log(Avenger.getAvgAge());
})();
