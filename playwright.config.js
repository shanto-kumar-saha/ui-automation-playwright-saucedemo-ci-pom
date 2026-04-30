
// playwright.config.js

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Test folder location
  testDir: './tests',

  // Run tests in parallel (can disable if beginner)
  fullyParallel: true,

  // Fail the build on CI if test.only is left
  forbidOnly: !!process.env.CI,

  // Retry failed tests (useful for stability)
  retries: 1,

  // Number of workers (parallel execution)
  workers: 1, // keep 1 for beginner to avoid confusion

  // Reporter (nice HTML report)
 
  reporter: 'html',

  use: {
    // Base URL (so you don’t repeat URL in every test)
    baseURL: 'https://www.saucedemo.com/',

    // Browser settings
    browserName: 'firefox',

    // Headless mode (false = visible browser)
    headless: true,

    // Slow down execution (good for learning)
    slowMo: 500,

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video recording
    video: 'retain-on-failure',

    // Trace for debugging
    trace: 'on-first-retry',
  },

  // Only Firefox project 
  projects: [
    {
      name: 'Firefox Browser',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

})


// create-playwright@1.17.139
// stage testing
// another Pull testing
