// test-data/testData.js

const users = {

  standardUser:
   {
    username: 'standard_user',
    password: 'secret_sauce'
  }
};

const customerInfo = {
  firstName: 'QA',
  lastName: 'Test',
  postalCode: '32'
};

// Product data (for validation + reuse)
const products = {
  backpack: {
    name: 'Sauce Labs Backpack',
    price: 29.99,
    addButton: '[data-test="add-to-cart-sauce-labs-backpack"]'
  },
  bikeLight: {
    name: 'Sauce Labs Bike Light',
    price: 9.99,
    addButton: '[data-test="add-to-cart-sauce-labs-bike-light"]'
  },
  fleeceJacket: {
    name: 'Sauce Labs Fleece Jacket',
    price: 49.99,
    addButton: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
  }
};

module.exports = { users, customerInfo, products };