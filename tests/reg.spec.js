import { test, expect } from '@playwright/test';

test.describe('@smoke @critical KYC reg Flow', () => {
  test('Login and verify dashboard', async ({ page }) => {
    await test.step('1. Visit reg Page', async () => {
    await page.goto('https://newkyc.dghub.io/kyc/kyc/home');
    });
  });
});
