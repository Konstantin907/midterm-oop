class ProductList {
    constructor(products) {
      this.products = products;
    }
  
    render() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
  
      this.products.forEach((product) => {
        const productItem = new ProductItem(product);
        productList.appendChild(productItem.render());
      });
    }
  }