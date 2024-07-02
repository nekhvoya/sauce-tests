import { BrowserContext, Page } from "@playwright/test";
import { BasePage } from "./base_page";

export class CartPage extends BasePage {

    constructor(context: BrowserContext, page: Page) {
        super(context, page, page.locator('[data-test=cart-contents-container]'), "Cart");
    }

    async clickCheckoutButton() {
        await this.pageElement.locator('[data-test=checkout]').click();
    }
}