(() => {
  //Las clases abstractas sirven para crear otras clases
  //para asegurarnos de que otras clases se pueden utilziar
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo A salvo";
    }
  }

  class Brotherhood extends Mutante {
    concquistarMundo() {
      return "ConquistarMundo";
    }
  }
  const Wolverine = new Xmen("Wolverine", "Logan");
  const Magneto = new Brotherhood("Magneto", "Magnus");

  //   console.log(Wolverine.salvarMundo());
  //   console.log(Magneto.concquistarMundo());
  const printName = (character: Mutante) => {
    // console.log(character.name);
  };

  // printName(Wolverine);
  // printName(Magneto);
})();
