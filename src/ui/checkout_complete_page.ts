import { BrowserContext, Page } from "@playwright/test";
import { BasePage } from "./base_page";

export class CheckoutCompletePage extends BasePage {

    constructor(context: BrowserContext, page: Page) {
        super(context, page, page.locator('[data-test=checkout-complete-container]'), "Checkout Complete");
    }
}