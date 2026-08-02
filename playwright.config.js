const { defineConfig, devices } = require('@playwright/test');
 
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: 'https://demoqa.com',
    // Запускает сайт в английской локали.
    locale: 'en-US',
    viewport: {
      width: 1440,
      height: 900
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      }
    }
  ]
});
 