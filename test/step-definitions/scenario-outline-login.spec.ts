import { When } from "@wdio/cucumber-framework";

When(/^I put my username: (.*)$/, async function(username:string){
    const usernameInput = await $('input[data-test="username"]');
    await usernameInput.setValue(username);
})

When(/^I put my password: (.*)$/, async function(password:string){
    const passwordInput = await $('#password');
    await passwordInput.setValue(password);
})