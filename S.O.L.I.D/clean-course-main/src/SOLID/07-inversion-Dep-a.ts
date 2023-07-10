/*
    =============INVERSION DE DEPENDENCIAS============00000

    >moduls de alto nivel no deben depender de los bajos nivel  capas superiores no dependen de componenetes menos importantes
    > frontend no deben dictar de reglas de negocios
    >Ambs deben dedepender de abstracciones
    > Los detalles deberian de depender de abstraccions y no viceversa


*/
import { PostService } from "./07-inversion-Dep-b";
import { JSONdataBaseService, WebApiPostService } from "./07-inversion-Dep-c";

// Main
(async () => {
  //pordemos crear otra instancia del nuevo JSON
  // const provider = new JSONdataBaseService();
  const jsonPlaceholder = new WebApiPostService();
  const postService = new PostService(jsonPlaceholder);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
