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
  loginPage: async ({ context, page }, use) => {
    const loginPage = new LoginPage(context, page);
    await use(loginPage);
  },
  inventoryPage: async ({ context, page }, use) => {
    const inventoryPage = new InventoryPage(context, page);
    await use(inventoryPage);
  },
  cartPage: async ({ context, page }, use) => {
    const cartPage = new CartPage(context, page);
    await use(cartPage);
  },
  checkoutInfoPage: async ({ context, page }, use) => {
    const checkoutInfoPage = new CheckoutInfoPage(context, page);
    await use(checkoutInfoPage);
  },
  checkoutSummaryPage: async ({ context, page }, use) => {
    const checkoutSummaryPage = new CheckoutSummaryPage(context, page);
    await use(checkoutSummaryPage);
  },
  checkoutCompletePage: async ({ context, page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(context, page);
    await use(checkoutCompletePage);
  },
  header: async ({ page }, use) => {
    const header = new HeaderComponent(page);
    await use(header);
  },
});
