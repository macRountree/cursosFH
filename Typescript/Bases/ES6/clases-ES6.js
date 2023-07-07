(() => {
  class Avenger {
    name;
    power;

    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flyng;

    constructor(name, power) {
      //tenemos  llamar a la clase padre con super
      super(name, power);
      this.flyng = true;
    }
  }
  const hulk = new Avenger("Hulk", 9000);
  const falcon = new FlyingAvenger("falcon", 50);
  console.log(hulk);
  console.log(falcon);
})();
