(() => {
  //Principio de responsabilidad unica se aplica a que esa fuuncion haga con su nombre

  type Gender = "M" | "F";
  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;  En lugar de declarar aqui podemos hacerlo en el construtcto

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,

      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredential() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,

      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, role, email, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "Mac@gmil.com",
    "Admin",
    "Mac",
    "M",
    new Date("165454")
  );

  console.log(userSettings);
})();
