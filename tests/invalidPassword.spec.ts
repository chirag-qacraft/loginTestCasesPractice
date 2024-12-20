import {test,expect} from "@playwright/test";
import {InvalidPassword} from "../pages/invalidPassword"

test('Invalid Password TC 3', async ({ page }) => {

    const invalidPasswrodObj = new InvalidPassword(page);
    await invalidPasswrodObj.openWebsiteMethod();

    await expect(invalidPasswrodObj.LoginButton).toHaveText("Login");

    await invalidPasswrodObj.loginMethod();

    await expect(invalidPasswrodObj.invalidMsg).toHaveText("Your password is invalid!");

    await expect(page).toHaveURL("https://practice.expandtesting.com/login");
    
});