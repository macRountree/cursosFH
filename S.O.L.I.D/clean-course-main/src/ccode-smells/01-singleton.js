//El patron singleton esta de manera global es decir no esta dentro de una funcion
//Singleton todas las instancias ocpan el mismo espacio en memora
//Es dificil de testear
//Tenemos que tratar de evitarlo
//Es dificil de rastrear de donde vienen los cambios

const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object("I am the instance");
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log("Misma instancia? ", instance1 === instance2);
}

main();
