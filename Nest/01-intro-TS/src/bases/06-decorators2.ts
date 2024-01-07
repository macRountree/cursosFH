const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

class newPokemon {
  constructor(public readonly id: number, public name: string) {}
  screan() {
    console.log(` NO`);
  }
  speak() {
    console.log(` Si`);
  }
}
const MyDecorator = () => {
  return (target: Function) => {
    return newPokemon;
  };
};
//
@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}
  screan() {
    console.log(` ${this.name.toUpperCase()}`);
  }
  speak() {
    console.log(` ${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.screan();
charmander.speak();
