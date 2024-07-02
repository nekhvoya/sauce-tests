import { BrowserContext, Locator, Page, expect } from "@playwright/test";

export class BasePage {
    protected context: BrowserContext;
    protected page: Page;
    protected pageElement: Locator;
    protected pageName: string;
  
    constructor(context: BrowserContext, page: Page, pageElement: Locator, pageName: string) {
       this.context = context;
       this.page = page;
       this.pageElement = pageElement;
       this.pageName = pageName;
    }

    async isOpened() {
        await expect(this.pageElement, `${this.pageName} page should be opened`).toBeVisible();
    }
}