import test, { globalHooks } from './base_test';
import { User } from '../../src/constants/users';
import { Sorting } from '../../src/constants/sorting';

globalHooks();

test.describe('Sorting', () => {

    test.beforeEach(async ({ inventoryPage }) => {
        await inventoryPage.openAs(User.STANDARD_USER);
    });

    [ Sorting.NAME_AZ, Sorting.NAME_ZA, Sorting.PRICE_LOHI, Sorting.PRICE_HILO ].forEach(mode => {
        test(`Logged in user is able to sort items using ${mode.label} mode`, async ({ header, inventoryPage }) => {  
            await header.setSorting(mode);
            header.should.haveSortingModeSet(mode);
            await inventoryPage.should.displaySortedItems(mode);
        });
    });
});