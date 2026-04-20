import { test, expect } from '../fixtures/baseTest';

test.describe('Checkout Tests', () => {

  test('Complete checkout flow', async ({ loggedInPage, inventoryPage, checkoutPage }) => {

    // Ürün ekle
    await inventoryPage.addFirstProductToCart();

    // Sepete git
    await inventoryPage.goToCart();

    // Checkout başlat
    await checkoutPage.clickCheckout();

    // Bilgileri doldur
    await checkoutPage.fillInformation('Cansu', 'Test', '12345');

    // Continue
    await checkoutPage.clickContinue();

    // Finish
    await checkoutPage.clickFinish();

    // Success mesajını doğrula
    await expect(checkoutPage.successMessage).toBeVisible();
  });

});
