import { Locator, Page, expect } from "@playwright/test";

export class HeaderComponent {
    private page: Page;
    private componentElement: Locator;
  
    constructor(page: Page) {
       this.page = page;
       this.componentElement = page.locator('[data-test=header-container]');
    }

    async logout() {
        await this.clickOpenMenuButton();
        await this.clickLogoutButton();
    }

    async clickLogoutButton() {
        await this.componentElement.locator('[data-test=logout-sidebar-link]').click();
    }

    async clickOpenMenuButton() {
        await this.componentElement.locator('#react-burger-menu-btn').click();
    }

    async clickCartIcon() {
        await this.componentElement.locator('[data-test=shopping-cart-link]').click();
    }

    async setSorting(value: string) {
        await this.componentElement.locator('[data-test=product-sort-container]').selectOption({ value : value });
    }
    
    private activeSortingOption() {
        return this.componentElement.locator('[data-test=active-option]');
    }

    should = {
        haveDefaultSortingOption: (option) => {
            expect(this.activeSortingOption(), "Default soerting option was incorrect").toHaveText(option);
        }
    }

}