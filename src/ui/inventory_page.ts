import { Page, expect } from "@playwright/test";
import { InventoryItemContainer } from "./inventory_item_container";
import { BasePage } from "./base_page";

export class InventoryPage extends BasePage {
  
    constructor(page: Page) {   
        super(page, page.locator('[data-test=inventory-container]'), "Inventory");
    }

    async items() {
        return (await this.itemElements()).map(locator => new InventoryItemContainer(locator));
    }

    private itemElements() {
        return this.pageElement.locator('[data-test=inventory-item]').all();
    }

    should = {
        haveItems: async () => {
            expect(await this.itemElements(), "Inventory items were not found").not.toHaveLength(0);
        }
    }
}