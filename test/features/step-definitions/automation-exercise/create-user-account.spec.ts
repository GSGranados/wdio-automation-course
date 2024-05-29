import { When, Then, Given } from "@wdio/cucumber-framework";
import homePage from "../../page-objects/automation-exercise/home.page.js";
import loginPage from "../../page-objects/automation-exercise/login.page.js";
import registrationPage from "../../page-objects/automation-exercise/registration.page.js";
import confirmationPage from "../../page-objects/automation-exercise/confirmation.page.js";


When(/^I click on the signup button$/, async function () {
    console.log(this);
    await homePage.clickOnSignupButton(this.testid);
});

Then(/^I validate the New User Sign up message is visible$/, async function () {
    await loginPage.isSignUpTextVisible(this.testid);
});

When(/^I provide my username and email$/, async function (userData: any) {
    const [name, email] = userData.rawTable[0];
    console.log(name,email);
    await loginPage.typeIntoSingupNameInput(this.testid,name);
    await loginPage.typeIntoSingupEmailInput(this.testid,email);
});

When(/^I click on the Signup Button$/, async function () {
    await loginPage.clickOnSignupButton(this.testid);
});

Then(/^the ENTER ACCOUNT INFORMATION should be visible$/, async function () {
    await registrationPage.isAccountInformationTextVisible(this.testid);
});

Given(/^I provide my personal information$/, async function (personalData: any) {
    const [prefix, password, dateOfBirth] = personalData.rawTable[0];
    await registrationPage.selectAccountTitle(this.testid,prefix === "Mr." ? true : false);
    await registrationPage.enterSingupPassword(this.testid,password);
    await registrationPage.enterRegistrationDateOfBirth(this.testid,dateOfBirth)

});

When(/^I click on the signup for newsletter checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageNewsletterCheckbox(this.testid);
});

When(/^I click on the receive offers checkbox$/, async function () {
    await registrationPage.clickOnregistrationPageSpecialOffersCheckbox(this.testid);

});

When(/^I fill the additional details$/, async function (additionalDetailsData: any) {
    const [firstName, lastName, company, address, address2, country, state, city, zip, mobilePhone] = additionalDetailsData.rawTable[0];
    await registrationPage.enterSingupAddressFirstName(this.testid,firstName);
    await registrationPage.enterregistrationPageAddressLastName(this.testid,lastName);
    await registrationPage.enterregistrationPageAddressCompany(this.testid,company);
    await registrationPage.enterregistrationPageAddress(this.testid,address);
    await registrationPage.enterregistrationPageSecondAddress(this.testid,address2);
    await registrationPage.selectregistrationPageCountry(this.testid,country);
    await registrationPage.enterregistrationPageAddressState(this.testid,state);
    await registrationPage.enterregistrationPageAddressCity(this.testid,city);
    await registrationPage.enterregistrationPageAddressZipCode(this.testid,zip);
    await registrationPage.enterregistrationPageAddressMobileNumber(this.testid,mobilePhone);

});

When(/^I click on the create account button$/, async function () {
    await registrationPage.clickOnCreateAccountButton(this.testid)
});

Then(/^I should see the account created success message$/, async function () {
    await confirmationPage.isAccountCreatedTextVisible(this.testid)
});

Given(/^I click on the continue button$/, async function () {
    await confirmationPage.clickOnContinueButton(this.testid)
});

Then(/^I Validate the Logged in as username message is being visible$/, async function () {
    await homePage.isLoggedInAsUsernameVisible(this.testid)
});

When(/^I click on the Logout button$/, async function () {
    await homePage.clickOnLogoutButton(this.testid)
});

Then(/^I Validate the Login to your account message is being visible$/, async function () {
    await loginPage.isLoginIntoYourAccountVisible(this.testid)
});

When(/^I provide my email and password$/, async function (loginData:any) {
    const [email, password] = loginData.rawTable[0]
    await loginPage.typeIntoLoginEmailInput(this.testid,email);
    await loginPage.typeIntoLoginPasswordInput(this.testid,password);
});

When(/^I click on the Login Button$/, async function () {
    await loginPage.clickOnLoginButton(this.testid)
});

When(/^I click on the Delete Account Button$/, async function () {
    await homePage.clickOnDeleteAccountButton(this.testid);
});

Then(/^I Validate that ACCOUNT DELETED! message is being visible$/, async function () {
    await confirmationPage.isAccountDeletedTextVisible(this.testid)
});
