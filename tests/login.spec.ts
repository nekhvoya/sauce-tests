import test from './base_test';
import { User } from '../src/constants/users';

test.describe('Login/logout', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.waitForLoadState('networkidle');
    });

    test('Standard user is able to log in and logout', async ({ loginPage, inventoryPage, header }) => {  
        await loginPage.typeUsername(User.STANDARD_USER.username);
        await loginPage.typePassword(User.STANDARD_USER.password);
        await loginPage.clickLoginButton();
        inventoryPage.isOpened();
        await header.logout();
        loginPage.isOpened();
    })
})