import { BrowserContext, Page} from "@playwright/test";
import { BasePage } from "./base_page";
import { UserCreds } from "../types/user_creds";

export class LoginPage extends BasePage {
    
    constructor(context: BrowserContext, page: Page) {
        super(context, page, page.locator('[data-test=login-container]'), "Login");
    }

    async open() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }

    async loginAs(user: UserCreds) {
        await this.typeUsername(user.username);
        await this.typePassword(user.password);
        await this.clickLoginButton();
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