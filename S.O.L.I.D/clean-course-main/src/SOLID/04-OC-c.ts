// import axios from "axios";
export class httpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);

  //   // console.log({ status });
  //   return { data, status };
  // }

  //Ahora que el axios ya no está .. debemos implementar el codigo

  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: 500 };
  }
}

/*

 =====VIOLACIONES DE OPC ===========0
  > Los cambios afectan nuestra clase o modulo 
  > Cuando una clase o modulos afecta a muchas capas (presentacion,almacenamiento),
  Posiblemente esa clase tiene demasiadas responsabilidades
  >

*/
