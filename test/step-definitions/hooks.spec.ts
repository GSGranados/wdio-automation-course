import { After, AfterAll, AfterStep, Before } from "@wdio/cucumber-framework";

Before(async function () {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
        const usernameInput = await $('input[data-test="username"]');
        await usernameInput.setValue('standard_user');
        const passwordInput = await $('#password');
        await passwordInput.setValue('secret_sauce');
        const loginButton = await $('#login-button');
        await loginButton.click();
        await browser.pause(3000);
        const shoppingCartIcon = await $('a[data-test="shopping-cart-link"]');
        expect(shoppingCartIcon.elementId).toBeTruthy()
        const webPageUrl = await browser.getUrl();
        expect(webPageUrl).not.toEqual("https://www.saucedemo.com/")
});
