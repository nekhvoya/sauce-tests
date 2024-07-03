import test from './base_test';
import { User } from '../../src/constants/users';

test.describe('Login/logout', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
    });

    test('Standard user is able to log in and logout', async ({ loginPage, inventoryPage, header }) => {  
        await loginPage.loginAs(User.STANDARD_USER);
        await inventoryPage.isOpened();
        await header.logout();
        await loginPage.isOpened();
    });
});