import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
    protected page: Page;
    protected pageElement: Locator;
    protected pageName: string;
  
    constructor(page: Page, pageElement: Locator, pageName: string) {
       this.page = page;
       this.pageElement = pageElement;
       this.pageName = pageName;
    }

    isOpened() {
        expect(this.pageElement, `${this.pageName} page should be opened`).toBeVisible();
    }
}