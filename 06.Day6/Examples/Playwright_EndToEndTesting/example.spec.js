// @ts-check
const { test, expect } = require('@playwright/test');


/*
test('has title', async ({ page }) => {
 await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

*/



test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test('has title "React App"', async ({ page }) => {
     // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("React App");
  });

  // Fill user id textbox with "admin" value
test('fill user id textbox', async ({ page }) => {
  const txtUserId = page.getByPlaceholder('User Id'); 
  await txtUserId.fill("admin");    
  expect(await page.locator("input#t1").inputValue()).toBe("admin");
});

  // testing login button click event  for valid user
test('login button click for valid user', async ({ page }) => {
  await page.getByPlaceholder('User Id').fill("admin"); 
  await page.getByPlaceholder('Password').fill("admin123"); 
  await page.locator("button#b1").click();
  expect(await page.locator("h3#result").innerText()).toBe('Welcome to Admin');
});

  


