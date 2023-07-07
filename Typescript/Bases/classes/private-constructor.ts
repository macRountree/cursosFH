(() => {
  class Apocalipsis {
    static intance: Apocalipsis;
    //si colocamos private controlaremos el llamado del constructor solo dentro de la clase (apocalipsis)
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Solo soy yo");
      }

      return Apocalipsis.intance;
    }

    changeName(newName: string) {
      // this.name.newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  // apocalipsis1.changeName("Xavier");
  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

  // const apocalipsis = new Apocalipsis("Soy Apokalipsis");
  // const apocalipsis2 = new Apocalipsis("Soy Apokalipsis");
  // const apocalipsis3 = new Apocalipsis("Soy Apokalipsis");

  // console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
