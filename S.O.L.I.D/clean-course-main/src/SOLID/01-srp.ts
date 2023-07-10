(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "Oled Tv" });
    }

    saveProduct(product: Product) {
      // private httpAdapter: Object;
      console.log("Guardando en Base de Datos", product);
    }
  }

  class Mailer {
    private masterEmail: string = "Macroun@gmail.om";
    //Notificar clientes

    sendEmail(emailList: string[], template: "to-client" | "to-admins") {
      console.log("Enviando correo a clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }
    //
    loadProduct(id: number) {
      this.productService.getProduct(id);

      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
    // notify clients nodeberia estar aqui
    //Podemos crearnos otra clase/modulo para que especificamente notifique a los clientes

    notifyClients() {
      this.mailer.sendEmail(["mac@g.com"], "to-client");
    }
    // Aqui podriamos crear otra clase sola mente para añadir al carrito
    //  onAddToCart(productId: number) {
    //     Agregar al carrito de compras
    //    console.log("Agregando al carrito ", productId);
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }
  //como hicimos nuevas clases necesitamos instanciarlos y mandarlos como argumento al product bloc
  const mailer = new Mailer();
  const productService = new ProductService();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCart(10);
  //=========VIOLACIONES SRP
  /*
  Nombrar clases y modulos demasiado genericos
  Cambios en el codigo suelen afectar a la clase/modulo
  la clase involucra multiples capas
  numero elevado de importaciones
  cantidad elevadas de metodos publicos
  
  */
})();
