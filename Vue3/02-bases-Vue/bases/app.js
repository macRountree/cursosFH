const app = Vue.createApp({
  // template: `<h1>Hola mundo</h1> <p>{{true?'Activo':'Inactivo'}}</p>`,

  data() {
    //message es un objeto reactivo
    return { quote: "soy batman", author: "Bruce Wayne" };
  },
  methods: {
    changeQuote(event) {
      console.log("HOlamundo", event);
      //si queremos cambiar el quote (author) nos traemos
      //el author de la data con this y asignamos nuevo author

      this.author = "Mac";
      //si queremos traernos este metodo lo hacemos con this y ()
      this.capitalize();
    },
    capitalize() {
      //si queremos capitalizar la sintaxis es la siguiente
      //despues mandamos a llamar el metodo en change quote
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount("#myApp");
