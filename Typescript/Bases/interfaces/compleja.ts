(() => {
  //LAS INTERFACES NO SIRVEN PARA CREAR INSTANCIAS
  interface Client {
    name: string;
    age?: number;
    //cuando la interfaz se empiece a anidar no es recomendable usarla
    address: Address;
    getFullAddress(id: string): void;
  }
  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  const client: Client = {
    name: "Mac",
    age: 30,
    address: {
      id: 125,
      zip: "HERHEHR",
      city: "Ottawa",
    },
    getFullAddress(id: string): string {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Meliisa",
    age: 30,
    address: {
      city: "Torontpo",
      id: 20,
      zip: "ASDASD",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
