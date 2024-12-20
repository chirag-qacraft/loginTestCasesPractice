import { Locator, Page } from "@playwright/test";

export class SuccessLogin {
    readonly page: Page;
    readonly LoginButton : Locator;
    readonly userNameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly verifySecurePage : Locator;
    readonly logoutButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoginButton = page.locator("//button[text()='Login']");
        this.userNameTextBox = page.locator("//input[@id='username']");
        this.passwordTextBox = page.locator("//input[@id='password']");
        this.verifySecurePage = page.locator("//b[contains(text(),'secure')]");
        this.logoutButton = page.locator("//i[contains(text(),'Logout')]")
    }

    async openWebsiteMethod() {
        await this.page.goto("https://practice.expandtesting.com/login");
    }

    async loginMethod()
    {
        await this.userNameTextBox.fill("practice");
        await this.passwordTextBox.fill("SuperSecretPassword!");
        await this.LoginButton.click();
        
    }

    async logOutMethod()
    {
        await this.logoutButton.click();
    }
}
