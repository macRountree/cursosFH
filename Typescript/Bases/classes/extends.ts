(() => {
  class Avenger {
    constructor(public name: string, protected realName: string) {
      // console.log("Const avenger llamado");
    }
    //protected podemos acceder a propiedades y metodos  dentro de clases extendidas (xmen)
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
      // console.log("Const Xmen");
    }
    //para hacer un get debemos hacer un rreturn obligatorio
    get fullName() {
      return `${this.name} ${this.realName} ${this.isMutant}`;
    }
    //SET recibe UN valor (no 2 ni 3) pero no regresa nada
    set fullName(name: string) {
      //podemos aplicar logica en el set
      if (name.length < 3) {
        throw new Error("Debe tener mas de 3 letras");
      }
      this.name = name;
    }

    getFullNameDesdeXmen() {
      // console.log(super.getFullName());
    }
  }

  const Wolverine = new Xmen("Wolverine", "Logan", true);

  //Como el constructor de Xmen no existe .. TS se enfoca en el constructor de Avenger(Clase padre)
  //como ahora

  //   console.log(Wolverine.fullName);

  //   Wolverine.getFullNameDesdeXmen();
  //   Wolverine.fullName = "Mac";
  //   console.log(Wolverine.fullName);

  //   const nuevoAvenger = new Avenger("hola", "mundo");
  // no podremos tener acceso a getfullName si creamos una nueva isntancia
  //porque esta protected... solamente que estemos dentro de la clase protegida podems llamarlo
  //   nuevoAvenger.get;
})();
