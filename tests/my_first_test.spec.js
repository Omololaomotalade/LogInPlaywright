const {test, expect} = require('@playwright/test')

test('My first test', async ({page}) => {

   await page.goto('https://business.kongapay.com/login')
   await page.pause()
   //await expect(page).toHaveTitle('Login | KongaPay Business Portal')
   //await page.waitForSelector('input[placeholder="e.g. johndoe123"]');
   await page.locator('[placeholder="e.g. johndoe123"]').fill('');
   await page.locator('[placeholder="Password"]').fill('#')
   //await page.waitForSelector('button', { name: 'Login' }, {timeout: 5000})
   await page.getByRole('button', { name: 'Login' }).click();
   await page.goto('https://business.kongapay.com/dashboard');


})
