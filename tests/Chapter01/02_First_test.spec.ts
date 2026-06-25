//Import playwright modules

import { test, expect } from '@playwright/test';

//Write a test

test('My first test', async ({ page }) => {
    //Go to URL
   await page.goto('https://www.youtube.com');

    await page.getByPlaceholder('Search')
              .fill('Playwright by Testers Talk');

    await page.keyboard.press('Enter');
    //click on playlist

    await page.getByRole('link', {
  name: 'Playwright by Testers Talk ✅'
}).click();

    //Validate web page

    await expect(page).toHaveTitle(/Playwright by Testers Talk - YouTube/);
})

test('My Second test', async ({ page }) => {
    //Go to URL
   await page.goto('https://www.youtube.com');

    await page.getByPlaceholder('Search')
              .fill('Take U Forward');

    await page.keyboard.press('Enter');
    //click on playlist
    
    
    //Validate web page

    await expect(page).toHaveTitle(/Take U Forward/);



})









