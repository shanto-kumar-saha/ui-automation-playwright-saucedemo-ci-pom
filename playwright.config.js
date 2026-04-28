
// @ts-check
const {  devices } = require('@playwright/test');
const { trace } = require('console');



const config = {

  //Define all Test cases dircetory folder
  testDir: './tests',
  /* Maximum time one test can run for */
  //30 sec wait for test cases
  timeout: 30 * 1000,

  // 5 sec wait for each await keyword
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    //When headless true not open browswer, 
    //when headless false this will apprar in the browser
    headless : false,
    screenshot :'on',
    
    // When trace is on, every test cases it generate trace.zip file that's why we use "retain-on-failure"
    //retain-on-failure this is use only when test case fail then it generate trace.zip and safe the memory in your system
    trace: 'retain-on-failure', // off, on
  },

  
};
//export Config file
module.exports = config;
 






/*
// playwright.config.js

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Test folder location
  testDir: './tests',

  // Run tests in parallel (can disable if beginner)
  fullyParallel: true,

  // Fail the build on CI if test.only is left
  //forbidOnly: !!process.env.CI,

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

});


// create-playwright@1.17.139

*/