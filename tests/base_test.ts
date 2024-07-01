import { test as base } from '@playwright/test';
import { LoginPage } from "../src/ui/login_page";
import { HeaderComponent } from '../src/ui/header_component';
import { InventoryPage } from '../src/ui/inventory_page';
import { CartPage } from '../src/ui/cart_page';
import { CheckoutInfoPage } from '../src/ui/checkout_info_page';
import { CheckoutSummaryPage } from '../src/ui/checkout_summary_page';
import { CheckoutCompletePage } from '../src/ui/checkout_complete_page';

export default base.extend<{ 
    loginPage: LoginPage, 
    inventoryPage: InventoryPage, 
    cartPage: CartPage, 
    checkoutInfoPage: CheckoutInfoPage, 
    checkoutSummaryPage: CheckoutSummaryPage, 
    checkoutCompletePage: CheckoutCompletePage,
    header: HeaderComponent }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutInfoPage: async ({ page }, use) => {
    const checkoutInfoPage = new CheckoutInfoPage(page);
    await use(checkoutInfoPage);
  },
  checkoutSummaryPage: async ({ page }, use) => {
    const checkoutSummaryPage = new CheckoutSummaryPage(page);
    await use(checkoutSummaryPage);
  },
  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await use(checkoutCompletePage);
  },
  header: async ({ page }, use) => {
    const header = new HeaderComponent(page);
    await use(header);
  },
});
