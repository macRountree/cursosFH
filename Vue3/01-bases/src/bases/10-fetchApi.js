// console.log("HOlamunde");

const apiKey = "136KlehFlyU2fv1f4mtrUu57gMXwskdN";

// https://api.giphy.com/v1/gifs/random?api_key=136KlehFlyU2fv1f4mtrUu57gMXwskdN

//
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`).then((resp) =>
  resp.json().then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement("img"); //<img> </img>

    img.src = url;
    document.body.append(img);
  })
);
