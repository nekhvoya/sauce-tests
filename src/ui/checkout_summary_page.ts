import { Page } from "@playwright/test";
import { BasePage } from "./base_page";

export class CheckoutSummaryPage extends BasePage {

    constructor(page: Page) {
        super(page, page.locator('[data-test=checkout-summary-container]'), "Checkout Summary");
    }

    async clickFinishButton() {
        await this.pageElement.locator('[data-test=finish]').click();
    }
}