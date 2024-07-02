import test from './base_test';
import { User } from '../src/constants/users';
import { Sorting } from '../src/constants/sorting';

test.describe('Sorting', () => {
    test.beforeEach(async ({ context, page }) => {
        await context.addCookies([{ name: 'session-username', value: User.STANDARD_USER.username, domain: 'www.saucedemo.com', path: '/' }]); 
        await page.goto("https://www.saucedemo.com/inventory.html");
        await page.waitForLoadState('networkidle');
    });

    test('Logged in user is able to sort items', async ({ header, inventoryPage }) => {  
        await inventoryPage.should.haveItems();
        header.should.haveDefaultSortingOption(Sorting.NAME_AZ.label);
        inventoryPage.should.displaySortedItems(Sorting.NAME_AZ);

        await header.setSorting(Sorting.NAME_ZA.value);
        header.should.haveDefaultSortingOption(Sorting.NAME_ZA.label);
        inventoryPage.should.displaySortedItems(Sorting.NAME_ZA);

        await header.setSorting(Sorting.PRICE_LOHI.value);
        header.should.haveDefaultSortingOption(Sorting.PRICE_LOHI.label);
        inventoryPage.should.displaySortedItems(Sorting.PRICE_LOHI);

        await header.setSorting(Sorting.PRICE_HILO.value);
        header.should.haveDefaultSortingOption(Sorting.PRICE_HILO.label);
        inventoryPage.should.displaySortedItems(Sorting.PRICE_HILO);
    })
})