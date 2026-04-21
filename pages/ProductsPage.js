// pages/ProductsPage.js

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProduct(addButton) {
    await this.page.locator(addButton).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = ProductsPage;