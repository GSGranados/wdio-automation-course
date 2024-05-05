import { Given, Then, When } from "@wdio/cucumber-framework";
import { $ } from '@wdio/globals'

Given(/^I add a product to the shopping cart$/, async function () {
    const addToCartButton = await $('button.btn_primary');
    await addToCartButton.click();
})

Then(/^I should see my product in the checkout page$/, async function () {
    await (await $('a[data-test="shopping-cart-link"]')).click();
    const inventoryItem = await $('div[data-test="inventory-item"]');
    expect(inventoryItem.elementId).toBeTruthy();
    const continueShoppingButton = await $('button[data-test="continue-shopping"]');
    await continueShoppingButton.click();
    const addToCartButton = await $('button.btn_secondary');
    await addToCartButton.click();
})

When(/^I remove it from the shopping cart$/, async function () {
    const addToCartButton = await $('button.btn_secondary');
    await addToCartButton.click();
});


Then(/^I see the shopping cart icon goes back to zero$/, async function () {
    const shoppingCartCounter = await $('div[data-test="shopping-cart-badge"]');
    expect(shoppingCartCounter.elementId).not.toBeTruthy();

});

Then(/^I should no longer see it in the checkout page$/, async function () {
    await (await $('a[data-test="shopping-cart-link"]')).click();
    const inventoryItem = await $('div[data-test="inventory-item"]');
    expect(inventoryItem.elementId).not.toBeTruthy();
});