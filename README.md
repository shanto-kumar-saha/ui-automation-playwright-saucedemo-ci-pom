# Playwright Automation Framework (POM) with CI Integration

An end-to-end automation framework for SauceDemo built using Playwright and JavaScript, following the Page Object Model (POM) design pattern and integrated with Continuous Integration (CI) using GitHub Actions. 

This project covers a complete E2E order flow including login, product selection, checkout, and price validation, aligned with real-world QA automation practices and CI workflow execution.

---

# 👨‍💻 Author Info

* Author: Shanto Kumar Saha
* Project Type: E-Commerce Automation Project with POM & CI Integration

---

# Project Key Features

* Page Object Model (POM) architecture
* CI integration using GitHub Actions
* Clean and scalable folder structure
* Test data separation (data-driven approach)
* End-to-End order flow automation
* Price calculation validation (real QA scenario)
* Automated test execution on push & pull request
* HTML report upload from CI pipeline
* Beginner-friendly and easy to extend

---

# 📁 Project Structure

```bash
Playwright-POM/
│── .github/
│   └── workflows/
│       └── playwright.yml
│
│── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── OverviewPage.js
│   └── CompletePage.js
│
│── tests/
│   ├── login.spec.js
│   └── orderFlow.spec.js
│
│── test-data/
│   └── testData.js
│
│── playwright.config.js
│── package.json
│── README.md
```

---

# 🛒 Test Scenario Covered

## ✅ Full Order Flow (E2E)

* Login with valid user
* Add multiple products to cart
* Navigate to cart & checkout
* Fill customer information
* Validate product total price
* Complete order
* Verify success message

---

# How to Run Tests

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

#  Test Data

Stored in:

```bash
test-data/testData.js
```

### Included:
* User credentials
* Product information
* Customer checkout data

### Benefits:
* Reusable
* Easy to maintain
* Clean data handling

---

#  Validation Covered

* URL validation after login
* Error handling (invalid login)
* Product price calculation validation
* Order success confirmation

---

# 🔄 Continuous Integration (CI) - GitHub Actions

This project is integrated with GitHub Actions CI pipeline for automated test execution.

##  CI Features

* Automated Playwright test execution on every push
* Automated test execution on pull requests
* GitHub Actions workflow integration
* Automatic dependency installation
* Automatic Playwright browser installation
* Retry mechanism for failed tests in CI environment
* HTML report artifact upload
* Headless browser execution in CI pipeline

---

# ⚙️ CI Workflow

```bash
Developer Push Code
        ↓
GitHub Actions Trigger
        ↓
Install Dependencies
        ↓
Install Playwright Browsers
        ↓
Run Playwright Automation Tests
        ↓
Generate HTML Report
        ↓
Upload Test Report Artifact
```

---

#  Why This Project Matters

This project reflects real-world QA automation and CI practices:

* Separation of concerns using POM
* Maintainable automation framework
* Scalable test design
* Data-driven testing
* Business logic validation
* Automated CI pipeline execution
* Cloud-based automation execution workflow

---

# 🧰 Tech Stack

* Playwright
* JavaScript (Node.js)
* Git & GitHub
* GitHub Actions (CI)
* NPM
* @playwright/test

---

# 📸 Udemy Course Complete Certificate

![Playwright Automation Framework With JavaScript](https://github.com/shanto-kumar-saha/Playwright_WebAutomation1/assets/122052172/a86a3335-6811-41df-a8e3-972675f4ceb5)

<!-- ---

# 🎯 Future Improvements

* Cross-browser execution
* API testing integration
* Environment-based execution
* Docker integration
* Jenkins CI integration
* Allure reporting
* Parallel execution optimization

--- -->

Developed ❤️ by Shanto Kumar Saha
