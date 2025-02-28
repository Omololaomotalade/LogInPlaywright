import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://business.kongapay.com/login');
  await page.getByPlaceholder('e.g. johndoe123').fill(process.env.email);
  await page.getByPlaceholder('Password').fill(process.env.password);
  await page.getByRole('button', { name: 'Login' }).click();
});