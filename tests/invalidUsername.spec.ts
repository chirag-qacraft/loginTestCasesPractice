import {test,expect} from "@playwright/test";
import {InvalidUsername} from "../pages/invalidUserName"

test('Invalid User TC 2', async ({ page }) => {

    const invalidUserObj = new InvalidUsername(page);
    await invalidUserObj.openWebsiteMethod();

    await expect(invalidUserObj.LoginButton).toHaveText("Login");

    await invalidUserObj.loginMethod();

    await expect(invalidUserObj.invalidMsg).toHaveText("Your username is invalid!");

    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
    
});