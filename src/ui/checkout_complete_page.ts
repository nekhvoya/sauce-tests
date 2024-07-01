import { Page } from "@playwright/test";
import { BasePage } from "./base_page";

export class CheckoutCompletePage extends BasePage {

    constructor(page: Page) {
        super(page, page.locator('[data-test=checkout-complete-container]'), "Checkout Complete");
    }
}