// tests/orderFlow.spec.js

const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const OverviewPage = require('../pages/OverviewPage');
const CompletePage = require('../pages/CompletePage');

const { users, customerInfo, products } = require('../test-data/testData');

test('SauceDemo Full Order Flow with Price Validation', async ({ page }) => {

  // Pages
  const login = new LoginPage(page);
  const productPage = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const overview = new OverviewPage(page);
  const complete = new CompletePage(page);

  // 1. Login
  await login.navigate();
  await login.login(users.standardUser.username, users.standardUser.password);

  await expect(page).toHaveURL(/inventory/);

  // 2. Add Products
  await productPage.addProduct(products.backpack.addButton);
  await productPage.addProduct(products.bikeLight.addButton);
  await productPage.addProduct(products.fleeceJacket.addButton);

  await productPage.openCart();

  // 3. Checkout
  await cart.goToCheckout();

  await checkout.fillInfo(
    customerInfo.firstName,
    customerInfo.lastName,
    customerInfo.postalCode
  );

  await checkout.continue();

  // 4. Price Validation 
  const expectedTotal = await overview.calculateExpectedTotal(products);
  const uiTotal = await overview.getUIItemTotal();

  console.log('Expected:', expectedTotal);
  console.log('UI Total:', uiTotal);

  expect(uiTotal).toBeCloseTo(expectedTotal, 2);

  // 5. Finish Order
  await overview.finish();

  // 6. Verify Success
  const successMsg = await complete.verifyOrderSuccess();
  expect(successMsg).toContain('Thank you');

  await complete.goBack();

  await expect(page).toHaveURL(/inventory/);
});