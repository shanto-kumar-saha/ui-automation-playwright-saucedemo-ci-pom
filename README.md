# Playwright Automation Framework (POM) 

A high-standard End-to-End automation framework for SauceDemo built using Playwright and JavaScript, following the Page Object Model (POM) design pattern.

This project demonstrates a complete E2E order flow, including login, product selection, checkout, and price validation, aligned with real-world QA automation practices.

---

## 👨‍💻 Author Info:

* 𝗔𝘂𝘁𝗵𝗼𝗿: 𝑺𝒉𝒂𝒏𝒕𝒐 𝑲𝒖𝒎𝒂𝒓 𝑺𝒂𝒉𝒂
* 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐓𝐲𝐩𝐞: "𝑬-𝑪𝒐𝒎𝒎𝒆𝒓𝒄𝒆" 𝑨𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒐𝒏 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 𝒘𝒊𝒕𝒉 𝑷𝒂𝒈𝒆 𝑶𝒃𝒋𝒆𝒄𝒕 𝑴𝒐𝒅𝒆𝒍 (𝑷𝑶𝑴) 𝑫𝒆𝒔𝒊𝒈𝒏.

---

## 📌 Project Key Features:

*  Page Object Model (POM) architecture
*  Clean and scalable folder structure
*  Test data separation (data-driven approach)
*  End-to-End order flow automation
*  Price calculation validation (real QA scenario)
*  Beginner-friendly and easy to extend

---

## 📁 Project Structure:

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

## 🛒 Test Scenario Covered:

###  Full Order Flow (E2E)

* Login with valid user
* Add multiple products to cart
* Navigate to cart & checkout
* Fill customer information
* Validate product total price
* Complete order
* Verify success message

---

##  How to Run Tests:


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

## Test Data:

Stored in:
test-data/testData.js

✔ Users, products, and customer info  
✔ Easy to maintain, reusable, and clean  

---

## ✅ Validation Covered:

* ✔ URL validation after login
* ✔ Error handling (invalid login)
* ✔ Product price calculation validation
* ✔ Order success confirmation

---

## 📝 Why This Project Matters:

This project reflects **real-world QA automation practices**:

* Separation of concerns (POM)
* Maintainable test structure
* Scalable design
* Data-driven testing
* Business logic validation (price check)

---
## 🧰 Tech Stack:

*  Playwright
*  JavaScript (Node.js)
*  NPM
*  @playwright/test

---

<h2>📸 Udemy Course Complete Certificate</h2>

![Playwright Automation Framework With JavaScript](https://github.com/shanto-kumar-saha/Playwright_WebAutomation1/assets/122052172/a86a3335-6811-41df-a8e3-972675f4ceb5)


𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘥 ❤️ 𝘣𝘺 𝘚𝘩𝘢𝘯𝘵𝘰 𝘒𝘶𝘮𝘢𝘳 𝘚𝘢𝘩𝘢
