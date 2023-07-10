/*=============PRINCIPIO SEGREGACION DE INTERFACES==========


> Como tucan y colibri tienen los mismos metodos se presta a crear una interfaz

> si creamos Aveztrus estaremos violentando su metodo porque no vuelan y estara obligado a usar la interfaz Bird de fly

> tambien violentamos la interface con la clase peguin porque  ellos nadan y estamos obligados a agregar el metodo swim en la interface
y por consiguiente a las demas clases aunque las demas aves no vuelen

>debemos empezar a segregar los metodos... el metodo eat no lo segremamos prque todas las aves comen
lo que si segregamos seria fly de avestrus y penguin
o run de ucan o colibri

> creamos una clase donde solo estara el metodo fly()
> otra donde solo estara el swim otro de run

> ahora el codigo es mas tolerante al cambio
*/

(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): number;
  }
  interface RunningBird {
    run(): void;
  }
  interface SwimmingBird {
    swim(): void;
  }
  class Tucan implements Bird, FlyingBird {
    public fly() {
      return 100;
    }
    public eat() {}
    public run() {}
    public swim() {}
  }

  class Huminbird implements Bird {
    public fly() {}
    public eat() {}
  }

  class Aveztrus implements Bird, RunningBird {
    // public fly() {}
    public eat() {}
    public run() {}
  }
  class pinguino implements Bird, SwimmingBird {
    // public fly() {}
    public eat() {}

    public swim() {}
  }
})();
