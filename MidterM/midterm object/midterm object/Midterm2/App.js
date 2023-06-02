class App {
    static async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        App.productList = new ProductList(products);
        App.renderProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    static renderProducts() {
      App.productList.render();
    }
  
    static renderTotal() {
      const totalElement = document.getElementById('total');
      totalElement.textContent = `Total: $${App.shoppingCart.getTotal()}`;
    }
  }
  
  App.shoppingCart = Shop.shoppingCart;
  App.fetchProducts();