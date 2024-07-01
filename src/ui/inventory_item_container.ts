import { Locator } from "@playwright/test";

export class InventoryItemContainer {
    private componentElement: Locator;
    
    constructor(componentElement: Locator) {
       this.componentElement = componentElement;
    }

    async clickAddToCartButton() {
        await this.componentElement.locator('[data-test*=add-to-cart]').click();
    }
}