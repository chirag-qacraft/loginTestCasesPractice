import { Locator, Page } from "@playwright/test";

export class InvalidUsername {
    readonly page: Page;
    readonly LoginButton : Locator;
    readonly userNameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly invalidMsg : Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoginButton = page.locator("//button[text()='Login']");
        this.userNameTextBox = page.locator("//input[@id='username']");
        this.passwordTextBox = page.locator("//input[@id='password']");
        this.invalidMsg = page.locator("//b[contains(text(),'invalid!')]");
       
    }

    async openWebsiteMethod() {
        await this.page.goto("https://practice.expandtesting.com/login");
    }

    async loginMethod()
    {
        await this.userNameTextBox.fill("wrongUser");
        await this.passwordTextBox.fill("SuperSecretPassword!");
        await this.LoginButton.click();
        
    }

}
