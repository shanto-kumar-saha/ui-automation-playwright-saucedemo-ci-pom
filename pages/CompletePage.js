// pages/CompletePage.js

class CompletePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('[data-test="complete-header"]');
    this.backButton = page.locator('[data-test="back-to-products"]');
  }

  async verifyOrderSuccess() {
    return await this.header.textContent();
  }

  async goBack() {
    await this.backButton.click();
  }
}

module.exports = CompletePage;