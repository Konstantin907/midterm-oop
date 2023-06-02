class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addToCart(product) {
      this.items.push(product);
    }
  
    getTotal() {
      let total = 0;
      this.items.forEach((product) => {
        total += product.price;
      });
      return total.toFixed(2);
    }
  }