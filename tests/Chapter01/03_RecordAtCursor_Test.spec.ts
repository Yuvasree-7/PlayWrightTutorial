// //Import playwright modules

// import { test, expect } from '@playwright/test';

// //Write a test

// test('My first test', async ({ page }) => {
//     //Go to URL
//     await page.goto('https://www.youtube.com');

//     await page.getByPlaceholder('Search')
//         .fill('Playwright by Testers Talk');

//     await page.keyboard.press('Enter');
//     //click on playlist

//     await page.getByRole('link', {
//         name: 'Playwright by Testers Talk ✅'
//     }).click();

//     //Validate web page

//     await expect(page).toHaveTitle(/Playwright by Testers Talk - YouTube/);
    
//     await page.goto('https://www.youtube.com/watch?v=2poXBtifpzA&list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM&index=1');
//     await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
//     await expect(page.getByRole('link', { name: '2 #2 Playwright API Testing' })).toBeVisible()

// })


import { test, expect } from '@playwright/test';

test('Record at cursor test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright testers talk channel');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.goto('https://www.youtube.com/watch?v=2poXBtifpzA&list=PLUeDIlio4THFSOUcVo_Cfam8I_IO483mV');
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  await expect(page.getByRole('link', { name: '2 #2 Playwright API Testing' })).toBeVisible();
});






