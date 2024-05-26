import { When, Then, Given } from "@wdio/cucumber-framework";
import homePage from "../../page-objects/automation-exercise/home.page.js";
import loginPage from "../../page-objects/automation-exercise/login.page.js";
import registrationPage from "../../page-objects/automation-exercise/registration.page.js";
import confirmationPage from "../../page-objects/automation-exercise/confirmation.page.js";


When(/^I click on the signup button$/, async function () {
    await homePage.clickOnSignupButton();
});

Then(/^I validate the New User Sign up message is visible$/, async function () {
    await loginPage.isSignUpTextVisible();
});

When(/^I provide my username and email$/, async function (userData: any) {
    const [name, email] = userData.rawTable[0];
    await loginPage.typeIntoSingupNameInput(name);
    await loginPage.typeIntoSingupEmailInput(email);
});

When(/^I click on the Signup Button$/, async function () {
    await loginPage.clickOnSignupButton();
});

Then(/^the ENTER ACCOUNT INFORMATION should be visible$/, async function () {
    await registrationPage.isAccountInformationTextVisible();
});

Given(/^I provide my personal information$/, async function (personalData: any) {
    const [prefix, password, dateOfBirth] = personalData.rawTable[0];
    await registrationPage.selectAccountTitle(prefix === "Mr." ? true : false);
    await registrationPage.enterSingupPassword(password);
    await registrationPage.enterRegistrationDateOfBirth(dateOfBirth)

});

When(/^I click on the signup for newsletter checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageNewsletterCheckbox();
});

When(/^I click on the receive offers checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageSpecialOffersCheckbox();

});

When(/^I fill the additional details$/, async function (additionalDetailsData: any) {
    const [firstName, lastName, company, address, address2, country, state, city, zip, mobilePhone] = additionalDetailsData.rawTable[0];
    await registrationPage.enterSingupAddressFirstName(firstName);
    await registrationPage.enterregistrationPageAddressLastName(lastName);
    await registrationPage.enterregistrationPageAddressCompany(company);
    await registrationPage.enterregistrationPageAddress(address);
    await registrationPage.enterregistrationPageSecondAddress(address2);
    await registrationPage.selectregistrationPageCountry(country);
    await registrationPage.enterregistrationPageAddressState(state);
    await registrationPage.enterregistrationPageAddressCity(city);
    await registrationPage.enterregistrationPageAddressZipCode(zip);
    await registrationPage.enterregistrationPageAddressMobileNumber(mobilePhone);

});

When(/^I click on the create account button$/, async function () {
    await registrationPage.clickOnCreateAccountButton()
});

Then(/^I should see the account created success message$/, async function () {
    await confirmationPage.isAccountCreatedTextVisible()
});

Given(/^I click on the continue button$/, async function () {
    await confirmationPage.clickOnContinueButton()
});

Then(/^I Validate the Logged in as username message is being visible$/, async function () {
    await homePage.isLoggedInAsUsernameVisible()
});

When(/^I click on the Logout button$/, async function () {
    await homePage.clickOnLogoutButton()
});

Then(/^I Validate the Login to your account message is being visible$/, async function () {
    await loginPage.isLoginIntoYourAccountVisible()
});

When(/^I provide my email and password$/, async function (loginData:any) {
    const [email, password] = loginData.rawTable[0]
    await loginPage.typeIntoLoginEmailInput(email);
    await loginPage.typeIntoLoginPasswordInput(password);
});

When(/^I click on the Login Button$/, async function () {
    await loginPage.clickOnLoginButton()
});

When(/^I click on the Delete Account Button$/, async function () {
    await homePage.clickOnDeleteAccountButton()
});

Then(/^I Validate that ACCOUNT DELETED! message is being visible$/, async function () {
    await confirmationPage.isAccountDeletedTextVisible()
});
