import { test, expect } from '../fixtures/baseTest';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Cart Tests', () => {

  test('Add product to cart', async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);
    await inventoryPage.goto();
    await inventoryPage.addFirstProductToCart();
  });

});
