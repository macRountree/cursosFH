/*
    =============INVERSION DE DEPENDENCIAS============00000

    >moduls de alto nivel no deben depender de los bajos nivel  capas superiores no dependen de componenetes menos importantes
    > frontend no deben dictar de reglas de negocios
    >Ambs deben dedepender de abstracciones
    > Los detalles deberian de depender de abstraccions y no viceversa


*/
import {
  JSONdataBaseService,
  LocalDataBaseService,
  PostProvider,
  WebApiPostService,
} from "./07-inversion-Dep-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProv: PostProvider) {}

  async getPosts() {
    // const jsonDB = new LocalDataBaseService();
    //aqui estamos violentando el princiopio OpenClose .. debemos aplicar el princiiio de inyeccion de dependencias
    // const jsonDB = new JSONdataBaseService();
    const webApi = new WebApiPostService();
    this.posts = await webApi.getPost();

    return this.posts;
  }
}
