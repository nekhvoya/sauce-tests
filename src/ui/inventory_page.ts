import { BrowserContext, Page, expect } from "@playwright/test";
import { InventoryItemContainer } from "./inventory_item_container";
import { BasePage } from "./base_page";

export class InventoryPage extends BasePage {
  
    constructor(context: BrowserContext, page: Page) {   
        super(context, page, page.locator('[data-test=inventory-container]'), "Inventory");
    }

    async openAs(user) {
        await this.context.addCookies([{ name: 'session-username', value: user.username, domain: 'www.saucedemo.com', path: '/' }]);
        await this.open();
    }

    async open() {
        await this.page.goto('/inventory.html');
        await this.page.waitForLoadState('networkidle');
    }

    async items() {
        return (await this.itemElements()).map(locator => new InventoryItemContainer(locator));
    }

    private itemElements() {
        return this.pageElement.locator('[data-test=inventory-item]').all();
    }

    private itemNames() {
        return this.pageElement.locator('[data-test=inventory-item-name]').allTextContents();
    }

    private async itemPrices() {
        return (await this.pageElement.locator('[data-test=inventory-item-price]').allTextContents()).map(price => parseFloat(price.replace('$', '')));
    }

    should = {
        haveItems: async () => {
            expect(await this.itemElements(), "Inventory items were not found").not.toHaveLength(0);
        },
        displaySortedItems: async (mode) => {
            switch(mode.value) {
                case 'az': 
                    const itemNamesAz = await this.itemNames();
                    expect(itemNamesAz).toEqual(itemNamesAz.sort((a, b) => a.localeCompare(b)));
                    break;
                case 'za':
                    const itemNamesZa = await this.itemNames()
                    expect(itemNamesZa).toEqual(itemNamesZa.sort((a, b) => b.localeCompare(a)));
                    break;
                case 'lohi': 
                    const pricesLoHi = await this.itemPrices();
                    expect(pricesLoHi).toEqual(pricesLoHi.sort((a, b) => a - b));
                    break;
                case 'hilo':    
                    const pricesHiLo = await this.itemPrices();
                    expect(pricesHiLo).toEqual(pricesHiLo.sort((a, b) => b - a));
                    break;
                default:
                    throw new Error(`Sorting mode ${mode} is not supported`);
            }
        }
    }
}