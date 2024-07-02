import test from './base_test';
import { User } from '../src/constants/users';

test.describe('Checkout', () => {

    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.openAs(User.STANDARD_USER);
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