// pages/CheckoutPage.js

class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
  }

  async fillInfo(first, last, postal) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
  }

  async continue() {
    await this.continueBtn.click();
  }
}

module.exports = CheckoutPage;