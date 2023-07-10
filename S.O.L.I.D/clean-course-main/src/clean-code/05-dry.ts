type Size = "" | "S" | "M" | "L" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public inStock: boolean = true,
    public size: Size = ""
  ) {}

  isProductReady() {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw new Error(`${key} empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw new Error(`${key} is 0`);
          break;
        default:
          throw Error("not suported");
      }
    }
    return true;
  }
  toString() {
    //El objetivo es imprimir la forma string del objeto
    //no hacer las evaluaxiones.... para eso creamos  el metodo isProdcut Ready
    //NO DRY
    // if (this.name.length <= 0) throw new Error("empty");
    // if (this.price <= 0) throw new Error("Price is 0");
    // if (this.size.length <= 0) throw new Error("Size empty");

    //El this es la instancia de la clase
    if (!this.isProductReady) return;
    return `${this.name} ${this.price}${this.inStock} ${this.size} `;
  }
}

(() => {
  const bluePants = new Product("Blue pants large", 10);
  console.log(bluePants.toString());
})();
