class Shop {
    static addToCart(product) {
      App.shoppingCart.addToCart(product);
      App.renderTotal();
    }
  }
  
  Shop.shoppingCart = new ShoppingCart();