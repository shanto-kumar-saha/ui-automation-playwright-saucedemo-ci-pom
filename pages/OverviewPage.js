// pages/OverviewPage.js

class OverviewPage {
  constructor(page) {
    this.page = page;

    this.finishButton = page.locator('[data-test="finish"]');
    this.itemPrices = page.locator('.inventory_item_price');
    this.totalLabel = page.locator('.summary_total_label');
  }

  async calculateExpectedTotal(products) {
    let total = 0;
    for (const p of Object.values(products)) {
      total += p.price;
    }
    return total;
  }

  async getUIItemTotal() {
    const prices = await this.itemPrices.allTextContents();

    let sum = 0;
    for (let price of prices) {
      sum += parseFloat(price.replace('$', ''));
    }
    return sum;
  }

  async finish() {
    await this.finishButton.click();
  }
}

module.exports = OverviewPage;