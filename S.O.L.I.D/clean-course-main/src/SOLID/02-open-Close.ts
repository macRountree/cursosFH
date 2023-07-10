import { PhotosService, PostService, TodoService } from "./03-open-Close-b";
import { httpClient } from "./04-OC-c";

(async () => {
  //aqui nos da error porque quiere recibir el http
  //creamos  una instancia de http client y lo importamos

  const httpCliente = new httpClient();
  const todoService = new TodoService(httpCliente);
  const postService = new PostService(httpCliente);
  const photosService = new PhotosService(httpCliente);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
