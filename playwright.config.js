// playwright.config.js

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Test folder
  testDir: './tests',

  // Parallel execution
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Worker count
  workers: process.env.CI ? 1 : undefined,

  // HTML Report
  reporter: 'html',

  use: {

    // Base URL
    baseURL: 'https://www.saucedemo.com/',

    // Run browser in background (important for GitHub Actions)
    headless: true,

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video on failure
    video: 'retain-on-failure',

    // Trace on retry
    trace: 'on-first-retry',
  },

  // Browser Project
  projects: [
    {
      name: 'Firefox Browser',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
  ],

});