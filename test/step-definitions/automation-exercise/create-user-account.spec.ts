//@ts-nocheck
import { When, Then, Given } from "@wdio/cucumber-framework";
import homePage from "../../page-objects/automation-exercise/home.page.js";
import loginPage from "../../page-objects/automation-exercise/login.page.js";
import registrationPage from "../../page-objects/automation-exercise/registration.page.js";
import confirmationPage from "../../page-objects/automation-exercise/confirmation.page.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import randomIntFromInterval from "../../helper/random-number-generator.js";

const randomUsernameEmail = `${constants.testscriptsConstatns.dummyUsername}${randomIntFromInterval(1, 999)}${constants.testscriptsConstatns.dummyDomain}`

When(/^I click on the signup button$/, async function () {
    await homePage.clickOnSignupButton(browser.options.testid);
});

Then(/^I validate the New User Sign up message is visible$/, async function () {
    await loginPage.isSignUpTextVisible(browser.options.testid);
});

When(/^I provide my username and email$/, async function (userData: any) {
    const [name] = userData.rawTable[0];
    await loginPage.typeIntoSingupNameInput(browser.options.testid, name);
    await loginPage.typeIntoSingupEmailInput(browser.options.testid, randomUsernameEmail);
});

When(/^I click on the Signup Button$/, async function () {
    await loginPage.clickOnSignupButton(browser.options.testid);
});

Then(/^the ENTER ACCOUNT INFORMATION should be visible$/, async function () {
    await registrationPage.isAccountInformationTextVisible(browser.options.testid);
});

Given(/^I provide my personal information$/, async function (personalData: any) {
    const [prefix, password, dateOfBirth] = personalData.rawTable[0];
    await registrationPage.selectAccountTitle(browser.options.testid, prefix === "Mr." ? true : false);
    await registrationPage.enterSingupPassword(browser.options.testid, password);
    await registrationPage.enterRegistrationDateOfBirth(browser.options.testid, dateOfBirth)

});

When(/^I click on the signup for newsletter checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageNewsletterCheckbox(browser.options.testid);
});

When(/^I click on the receive offers checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageSpecialOffersCheckbox(browser.options.testid);

});

When(/^I fill the additional details$/, async function (additionalDetailsData: any) {
    const [firstName, lastName, company, address, address2, country, state, city, zip, mobilePhone] = additionalDetailsData.rawTable[0];
    await registrationPage.enterSingupAddressFirstName(browser.options.testid, firstName);
    await registrationPage.enterregistrationPageAddressLastName(browser.options.testid, lastName);
    await registrationPage.enterregistrationPageAddressCompany(browser.options.testid, company);
    await registrationPage.enterregistrationPageAddress(browser.options.testid, address);
    await registrationPage.enterregistrationPageSecondAddress(browser.options.testid, address2);
    await registrationPage.selectregistrationPageCountry(browser.options.testid, country);
    await registrationPage.enterregistrationPageAddressState(browser.options.testid, state);
    await registrationPage.enterregistrationPageAddressCity(browser.options.testid, city);
    await registrationPage.enterregistrationPageAddressZipCode(browser.options.testid, zip);
    await registrationPage.enterregistrationPageAddressMobileNumber(browser.options.testid, mobilePhone);

});

When(/^I click on the create account button$/, async function () {
    await registrationPage.clickOnCreateAccountButton(browser.options.testid)
});

Then(/^I should see the account created success message$/, async function () {
    await confirmationPage.isAccountCreatedTextVisible(browser.options.testid)
});

Given(/^I click on the continue button$/, async function () {
    await confirmationPage.clickOnContinueButton(browser.options.testid)
});

Then(/^I Validate the Logged in as username message is being visible$/, async function () {
    await homePage.isLoggedInAsUsernameVisible(browser.options.testid)
});

When(/^I click on the Logout button$/, async function () {
    await homePage.clickOnLogoutButton(browser.options.testid)
});

Then(/^I Validate the Login to your account message is being visible$/, async function () {
    await loginPage.isLoginIntoYourAccountVisible(browser.options.testid)
});

When(/^I provide my email and password$/, async function (loginData: any) {
    const [password] = loginData.rawTable[0]
    await loginPage.typeIntoLoginEmailInput(browser.options.testid, randomUsernameEmail);
    await loginPage.typeIntoLoginPasswordInput(browser.options.testid, password);
});

When(/^I click on the Login Button$/, async function () {
    await loginPage.clickOnLoginButton(browser.options.testid)
});

When(/^I click on the Delete Account Button$/, async function () {
    await homePage.clickOnDeleteAccountButton(browser.options.testid);
});

Then(/^I Validate that ACCOUNT DELETED! message is being visible$/, async function () {
    await confirmationPage.isAccountDeletedTextVisible(browser.options.testid)
});
