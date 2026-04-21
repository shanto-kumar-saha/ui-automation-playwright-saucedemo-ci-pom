// pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('.error-button');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  // Reusable method
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async closeError() {
    await this.errorCloseButton.click();
  }
}

module.exports = LoginPage;