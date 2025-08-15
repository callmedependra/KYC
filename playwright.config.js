import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    headless: false,
    baseURL: 'https://newkyc.dghub.io/kyc',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    // { name: 'firefox',  use: { browserName: 'firefox' } },
    // { name: 'webkit',   use: { browserName: 'webkit' } },
  ],
});
