/**
 * !adaptadores sirven  para adaptar una funcionalidad externa de mi codigo..un puente entre la clase y mi paquete de código
 */

import axios from 'axios';

// Para el principio de  sustitucion en este caso del metodo get (y nos pueda funcionar los adaptadores)
// creamos una interface

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}
export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}
export class PokeapiAdapter implements HttpAdapter {
  private readonly axios = axios;
  //   !la <T> es el generico por defecto ... tambien podemos declarar el get como : promise<T>
  async get<T>(url: string) {
    // !peticion get
    const {data} = await axios.get<T>(url);
    return data;
  }
  async post(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string) {}
}
