import { Page } from "@playwright/test";
import { BasePage } from "./base_page";
import { randomAlphaNumberic, randomNumberic } from "../utils/random";

export class CheckoutInfoPage extends BasePage {

    constructor(page: Page) {
        super(page, page.locator('[data-test=checkout-info-container]'), "Checkout Info");
    }

    async fillInRandomUser() {
        await this.typeFirstName(randomAlphaNumberic(5));
        await this.typeLastName(randomAlphaNumberic(5));
        await this.typeZipCode(randomNumberic(4));
    }

    async typeFirstName(firstName: string) {
        await this.pageElement.locator('[data-test=firstName]').fill(firstName);
    }

    async typeLastName(lastName: string) {
        await this.pageElement.locator('[data-test=lastName]').fill(lastName);
    }

    async typeZipCode(zipCode: string) {
        await this.pageElement.locator('[data-test=postalCode]').fill(zipCode);
    }   

    async clickContinueButton() {
        await this.pageElement.locator('[data-test=continue]').click();
    }
}