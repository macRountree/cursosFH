function printToConsole(construction: Function) {
  console.log(construction);
}
//Los decoradores pueden cambiar la funcionalida de una clase
const printConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

//Este decorador evita que se expandan ciertas propiedades o metodos en una clase
const blockPrototipo = function (constructor: Function) {
  //   Object.seal(constructor);
  //   Object.seal(constructor.prototype);
};

function checkValidPkmnId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error(
          "El id del popkemon debe ser menor a 800 y mayor a 1"
        );
      } else {
        return originalMethod(id);
      }
    };
    // descriptor.value = () => {
    //   console.log("HOlamundo");
    // };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    // console.log({ target, propertyKey, descriptor });

    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);

        return "Mac";
      },
      set(this, value) {
        // console.log(this, value);

        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

//decorador es una funcion que se ejecuta en la transpilacion del code

@blockPrototipo
@printConditional(false)
export class Pokemon {
  @readOnly(true)
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @checkValidPkmnId()
  savePokemontoDB(id: number) {
    console.log(`Pokemon guardado en DB!! ${id}`);
  }
}
