import {test,expect} from "@playwright/test";
import { SuccessLogin } from "../pages/successfulLogin";

test('Success Login TC 1', async ({ page }) => {

    const successLoginObj = new SuccessLogin(page);
    await successLoginObj.openWebsiteMethod();

    await expect(successLoginObj.LoginButton).toHaveText("Login");

    await successLoginObj.loginMethod();

    await expect(successLoginObj.verifySecurePage).toHaveText("You logged into a secure area!");

    await expect(successLoginObj.verifySecurePage).toBeVisible();

    await expect(successLoginObj.logoutButton).toHaveText(" Logout");

    await successLoginObj.logOutMethod();

    
});