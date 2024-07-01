import { Locator, Page} from "@playwright/test";
import { BasePage } from "./base_page";

export class LoginPage extends BasePage {
    
    constructor(page: Page) {
        super(page, page.locator('[data-test=login-container]'), "Login");
    }

    async typeUsername(username: string) {
        await this.pageElement.locator('[data-test=username]').fill(username);
    }

    async typePassword(password: string) {
        await this.pageElement.locator('[data-test=password]').fill(password);
    }

    async clickLoginButton() {
        await this.pageElement.locator('[data-test=login-button]').click();
    }
}