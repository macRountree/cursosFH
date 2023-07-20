import giphyApi from "./bases/11-axios";

// console.log("hola ");

const getImage = async () => {
  //como puede fallar nuestra peticion podemos usar trycatch
  try {
    //llamamas giphy

    const { data } = await giphyApi.get("/random");
    const { url } = data.data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log("Error en la peticion", error);
    throw error;
  }
};

getImage();
