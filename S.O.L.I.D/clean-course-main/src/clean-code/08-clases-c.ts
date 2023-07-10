(() => {
  //Principio de responsabilidad unica se aplica a que esa fuuncion haga con su nombre
  //EN ESTE ARCHIVO SI LO APLICAMOS
  //Priorizar la composicion frente a la herencia
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date; // En lugar de declarar aqui podemos hacerlo en el construtcto

    constructor({ name, gender, birthdate }: PersonProps) {
      (this.name = name), (this.gender = gender), (this.birthdate = birthdate);
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  //tenemos que evitar usar extends
  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredential() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;

    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  //Para porder utilizar el birthdate email etc creamos una nueva clase
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }
  const userSettings = new UserSettings({
    birthdate: new Date("165454"),
    email: "Mac@gmil.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Mac",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log(userSettings);
  userSettings.user.checkCredential;
})();
