import test from './base_test';
import { User } from '../src/constants/users';

test.describe('Checkout', () => {
    test.beforeEach(async ({ context, page }) => {
        await context.addCookies([{ name: 'session-username', value: User.STANDARD_USER.username, domain: 'www.saucedemo.com', path: '/' }]); 
        await page.goto("https://www.saucedemo.com/inventory.html");
        await page.waitForLoadState('networkidle');
    });

    test('Logged in user is able to order first available item', async ({ inventoryPage, header, cartPage, checkoutInfoPage, checkoutSummaryPage, checkoutCompletePage }) => {  
        await inventoryPage.should.haveItems();
        await (await inventoryPage.items())[0].clickAddToCartButton();
        await header.clickCartIcon();
        cartPage.isOpened();
        await cartPage.clickCheckoutButton();
        checkoutInfoPage.isOpened();
        await checkoutInfoPage.fillInRandomUser();
        await checkoutInfoPage.clickContinueButton();
        checkoutSummaryPage.isOpened();
        await checkoutSummaryPage.clickFinishButton();
        checkoutCompletePage.isOpened();
    });
});