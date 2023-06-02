class ProductItem {
    constructor(product) {
      this.product = product;
    }
  
    render() {
      const li = document.createElement('li');
      li.innerHTML = `
        <div id='product'>
        <div class=product-details>
          <h2>${this.product.title}</h2>
          <img src=${this.product.image} alt="No picture"/>
          <h2>Price: $${this.product.price}</h2>
          <button class="add-to-cart" data-id="${this.product.id}">Add to Cart</button>
        </div>
          </div>
      `;
  
      const addToCartButton = li.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', () => {
        Shop.addToCart(this.product);
      });
  
      return li;
    }
  }