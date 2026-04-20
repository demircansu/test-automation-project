import { test, expect } from '../fixtures/baseTest';
import { LoginPage } from '../pages/LoginPage';

test.describe('Logout Tests @smoke', () => {
  test('Successful logout redirects to login page', async ({ loggedInPage }) => {
    const loginPage = new LoginPage(loggedInPage);
    
    // Logout yap
    await loginPage.logout();
    
    // Login sayfasına yönlendirildiğini doğrula
    await expect(loggedInPage).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.usernameInput).toBeVisible();
  });
});
