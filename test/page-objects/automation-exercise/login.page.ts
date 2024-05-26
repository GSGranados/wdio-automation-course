import Page from "../Page.js";
import { $ } from '@wdio/globals';
import constants from "../../../data/constants.json" assert {type: "json"};
import { expect } from 'chai'
class LoginPage extends Page {

    constructor() {
        super()
    }

    get login_page_signup_name_input() { return $('input[data-qa="signup-name"]') }
    get login_page_signup_email_input() { return $('input[data-qa="signup-email"]') }
    get login_page_signup_button() { return $('button[data-qa="signup-button"]') }
    get login_page_login_email_input() { return $('input[data-qa="login-email"]') }
    get login_page_login_password_input() { return $('input[data-qa="login-password"]') }
    get login_page_login_button() { return $('button[data-qa="login-button"]') }
    get login_page_login_into_account_text() { return $('.login-form h2') }
    get login_page_signup_text() { return $('.signup-form h2') }

    async typeIntoSingupNameInput(signupName: string): Promise<void> {
        await this.typeIntoInputField(await this.login_page_signup_name_input, signupName);
    }

    async typeIntoSingupEmailInput(signupEmail: string): Promise<void> {
        await this.typeIntoInputField(await this.login_page_signup_email_input, signupEmail);
    }

    async clickOnSignupButton(): Promise<void> {
        await this.clickOnElement(await this.login_page_signup_button);
    }

    async typeIntoLoginEmailInput(loginEmail: string): Promise<void> {
        await this.typeIntoInputField(await this.login_page_login_email_input, loginEmail);
    }

    async typeIntoLoginPasswordInput(loginPassword: string): Promise<void> {
        await this.typeIntoInputField(await this.login_page_login_password_input, loginPassword);
    }

    async clickOnLoginButton(): Promise<void> {
        await this.clickOnElement(await this.login_page_login_button);
    }

    async isLoginIntoYourAccountVisible(): Promise<void> {
        const textObtained = await (await this.login_page_login_into_account_text).getText();
        expect(textObtained).to.be.equal(constants.assertionTexts.loginIntoAccount,`${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.loginIntoAccount}`);
    }

    async isSignUpTextVisible(): Promise<void> {
        const textObtained = await (await this.login_page_signup_text).getText();
        expect(textObtained).to.be.equal(constants.assertionTexts.signupText, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.signupText}`);
    }
}

export default new LoginPage()