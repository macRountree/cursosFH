(() => {
  //Principio de responsabilidad unica se aplica a que esa fuuncion haga con su nombre

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

    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public role: string;
    public email: string;
    public lastAccess: Date;
    constructor({
      email,
      role,

      name,
      gender,
      birthdate,
    }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredential() {
      return true;
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

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;
    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ name, role, email, gender, birthdate });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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
})();
