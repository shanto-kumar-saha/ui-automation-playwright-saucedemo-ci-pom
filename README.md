# Playwright Automation Framework (POM) – SauceDemo

A beginner-friendly yet **industry-standard Playwright automation framework** built using **JavaScript** and **Page Object Model (POM)** design pattern.

This project demonstrates a **complete E2E order flow** including login, product selection, checkout, and **price validation**.

---

## 👨‍💻 Author Info

* 𝗔𝘂𝘁𝗵𝗼𝗿: Shanto Kumar Saha
* 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐓𝐲𝐩𝐞: "E-Commerce" Automation Project with Page Object Model (POM) Design.

---

## 📌 Project Highlights

*  Page Object Model (POM) architecture
*  Clean and scalable folder structure
*  Test data separation (data-driven approach)
*  End-to-End order flow automation
*  Price calculation validation (real QA scenario)
*  Beginner-friendly and easy to extend

---

## 📁 Project Structure

```
Playwright-POM/
│── pages/                # Page Object files
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── OverviewPage.js
│   └── CompletePage.js
│
│── tests/                # Test files
│   ├── login.spec.js
│   └── orderFlow.spec.js
│
│── test-data/            # Test data files
│   └── testData.js
│
│── playwright.config.js
│── package.json
│── README.md
```

---

##  Test Scenario Covered

### 🛒 Full Order Flow (E2E)

* Login with valid user
* Add multiple products to cart
* Navigate to cart & checkout
* Fill customer information
* Validate product total price
* Complete order
* Verify success message

---

##  How to Run Tests


```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/orderFlow.spec.js

# Run with browser UI (headed mode)
npx playwright test --headed

# Debug mode
npx playwright test --debug
```

---

## Test Data

Stored in:
test-data/testData.js

✔ Users, products, and customer info  
✔ Easy to maintain, reusable, and clean  

---

## Validation Covered

* ✔ URL validation after login
* ✔ Error handling (invalid login)
* ✔ Product price calculation validation
* ✔ Order success confirmation

---

##  Why This Project Matters

This project reflects **real-world QA automation practices**:

* Separation of concerns (POM)
* Maintainable test structure
* Scalable design
* Data-driven testing
* Business logic validation (price check)

---
## 🧰 Tech Stack

*  Playwright
*  JavaScript (Node.js)
*  NPM
*  @playwright/test

---

