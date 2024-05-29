import Page from "../Page.js";
import { $ } from '@wdio/globals';
import constants from "../../../data/constants.json" assert {type: "json"};
import { expect } from 'chai'
import executeWebAction from "../../helper/error-handling.js";
import reporter from "../../helper/reporter.js";
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

    async typeIntoSingupNameInput(testid: string, signupName: string): Promise<void> {
        const reportingMessage = `${signupName} set up as Sign up name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.login_page_signup_name_input, signupName);
    }

    async typeIntoSingupEmailInput(testid: string, signupEmail: string): Promise<void> {
        const reportingMessage = `${signupEmail} set as Sign up Email`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.login_page_signup_email_input, signupEmail);
    }

    async clickOnSignupButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Sign up button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.login_page_signup_button);
    }

    async typeIntoLoginEmailInput(testid: string, loginEmail: string): Promise<void> {
        const reportingMessage = `${loginEmail} set up as Login Email`
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.login_page_login_email_input, loginEmail);
    }

    async typeIntoLoginPasswordInput(testid: string, loginPassword: string): Promise<void> {
        const reportingMessage = `${loginPassword} set as Login Password`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.login_page_login_password_input, loginPassword);
    }

    async clickOnLoginButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Login Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.login_page_login_button);
    }

    async isLoginIntoYourAccountVisible(testid: string): Promise<void> {
        const reportingMessage = "Login into your account text is visible";
        try {
            const textObtained = await (await this.login_page_login_into_account_text).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.loginIntoAccount, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.loginIntoAccount}`);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testid, 'error', reportingMessage);
            throw error
        }
    }

    async isSignUpTextVisible(testid: string): Promise<void> {
        const reportingMessage = "Sign up text is visible";
        try {
            const textObtained = await (await this.login_page_signup_text).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.signupText, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.signupText}`);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testid, 'error', reportingMessage);
            throw error
        }
    }
}

export default new LoginPage()