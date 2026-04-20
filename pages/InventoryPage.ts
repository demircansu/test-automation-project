import { Page } from '@playwright/test';

export class InventoryPage {
  async goToCart() {
    await this.clickCart();
  }
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async addFirstProductToCart() {
    await this.page.click('.inventory_item:first-child .btn_inventory');
  }

  async removeFirstProductFromCart() {
    await this.page.click('.inventory_item:first-child .btn_inventory');
  }

  async clickCart() {
    await this.page.click('.shopping_cart_link');
  }
}
