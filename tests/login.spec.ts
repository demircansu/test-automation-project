import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

// ========== NEGATİF TESTLER ==========

// 1. Yanlış kullanıcı adı, doğru şifre
test('Invalid username with correct password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'secret_sauce');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match');
});

// 2. Doğru kullanıcı adı, yanlış şifre
test('Correct username with incorrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match');
});

// 3. Her ikisi de yanlış
test('Both username and password are incorrect', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match');
});

// 4. Boş kullanıcı adı, doğru şifre
test('Empty username with valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('', 'secret_sauce');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username is required');
});

// 5. Doğru kullanıcı adı, boş şifre
test('Valid username with empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', '');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Password is required');
});

// 6. Her ikisi de boş
test('Both username and password are empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('', '');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('Username is required');
});

// 7. Kilitlenmiş kullanıcı hesabı (locked_out_user)
test('Locked out user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  await expect(loginPage.getErrorMessage()).toContainText('locked out');
});

// 8. Problem kullanıcısı (performance_glitch_user)
test('Performance glitch user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('performance_glitch_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});
