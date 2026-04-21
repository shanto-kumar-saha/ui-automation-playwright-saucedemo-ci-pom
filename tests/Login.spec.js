// tests/login.spec.js

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const { users } = require('../test-data/testData');

test.describe('Login Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('Login with standard user (valid)', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      users.lockedOutUser.username,
      users.lockedOutUser.password
    );

    const errorText = await loginPage.getErrorMessage();
    await expect(errorText).toContain('locked out');
  });

  test('Login with invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('invalid_user', 'wrong_password');

    const errorText = await loginPage.getErrorMessage();
    await expect(errorText).toContain('do not match');
  });

});