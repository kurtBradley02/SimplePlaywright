import { test, expect } from '@playwright/test';

test('First Test', async ({ page }) => {

  await page.goto('https://www.google.com/');

// pause here and leave browser open
  await page.pause();
  
});
