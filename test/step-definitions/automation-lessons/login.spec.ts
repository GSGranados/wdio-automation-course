import { Given, Then, When } from "@wdio/cucumber-framework";
import {$} from '@wdio/globals'

Given(/^I open the sauce demo page$/, async function(){
    await browser.url('https://www.saucedemo.com/');
    await browser.maximizeWindow();
})

When(/^I put my username$/, async function(){
    const usernameInput = await $('input[data-test="username"]');
    await usernameInput.setValue('standard_user');
})

When(/^I put my password$/, async function(){
    const passwordInput = await $('#password');
    await passwordInput.setValue('secret_sauce');
    
});

When(/^I click on the login button$/, async function(){
    const loginButton = await $('#login-button');
    await loginButton.click();
    await browser.pause(3000);
});

Then(/^I check for shopping cart icon$/, async function(){
    const shoppingCartIcon = await $('a[data-test="shopping-cart-link"]');
    expect(shoppingCartIcon.elementId).toBeTruthy()
});

Then(/^I should not be in the login page$/, async function(){
    const webPageUrl = await browser.getUrl();
    expect(webPageUrl).not.toEqual("https://www.saucedemo.com/")
});

