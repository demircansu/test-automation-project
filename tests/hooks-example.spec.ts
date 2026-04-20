import { test, expect } from '@playwright/test';

// 🔹 beforeAll - Tüm testlerden önce bir kere çalışır
test.beforeAll(async () => {
  console.log('🚀 beforeAll: Tüm testler başlamadan önce çalışır');
});

// 🔹 afterAll - Tüm testlerden sonra bir kere çalışır
test.afterAll(async () => {
  console.log('🏁 afterAll: Tüm testler bittikten sonra çalışır');
});

// 🔹 beforeEach - Her testten önce çalışır
test.beforeEach(async ({ page }) => {
  console.log('➡️ beforeEach: Test başlamadan önce çalışır');
  await page.goto('https://www.saucedemo.com/');
});

// 🔹 afterEach - Her testten sonra çalışır
test.afterEach(async ({ page }) => {
  console.log('⬅️ afterEach: Test bittikten sonra çalışır');
});

// 📌 Test 1
test('Test 1 - Başarılı login', async ({ page }) => {
  console.log('   🔍 Test 1 çalışıyor...');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page).toHaveURL(/inventory/);
});

// 📌 Test 2
test('Test 2 - Hatalı login', async ({ page }) => {
  console.log('   🔍 Test 2 çalışıyor...');
  
  await page.fill('#user-name', 'wrong_user');
  await page.fill('#password', 'wrong_pass');
  await page.click('#login-button');
  
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});

// 📌 Test 3
test('Test 3 - Boş alanlar', async ({ page }) => {
  console.log('   🔍 Test 3 çalışıyor...');
  
  await page.click('#login-button');
  
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});
