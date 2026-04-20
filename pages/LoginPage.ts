import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly hamburgerMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.hamburgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('text=Logout');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async logout() {
    await this.hamburgerMenu.waitFor({ state: 'visible', timeout: 10000 });
    await this.hamburgerMenu.click();
    await this.logoutLink.click();
    await this.page.waitForURL('https://www.saucedemo.com/**');
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
