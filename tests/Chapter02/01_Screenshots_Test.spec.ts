//Import playwright modules

import { test, expect } from '@playwright/test';

//Write a test

test('Capture screenshot in playwright', async ({ page }) => {
    //Go to URL
   await page.goto('https://www.youtube.com/@testerstalk');

    //Element screenshot
    await page.locator('#page-header-banner').screenshot({ path: 'screenshots/element_screenshot.png' });

    //page screenshot

    await page.screenshot({ path: 'screenshots/page_screenshot.png' }); 
    //fullpage screenshot

    await page.screenshot({ path: 'screenshots/fullpage_screenshot.png', fullPage: true });

    


})









