import Page from "../Page.js";
import { $ } from '@wdio/globals'
import constants from '../../../data/constants.json' assert {type: "json"};
import { expect } from "chai";
import reporter from "../../helper/reporter.js";
import executeWebAction from "../../helper/error-handling.js";
class HomePage extends Page {

    constructor() {
        super();
    }

    get home_page_signup_button() { return $('ul li a[href="/login"]') }
    get home_page_logo() { return $('.logo img'); }
    get home_page_nav_menu() { return $('.nav.navbar-nav'); }
    get home_page_login_as_username_message() { return $('.nav.navbar-nav li:nth-child(10) a'); }
    get home_page_logout_button() { return $('.nav.navbar-nav li:nth-child(4) a'); }
    get home_page_delete_account_button() { return $('.nav.navbar-nav li:nth-child(5) a'); }
    get home_page_logged_in_as_username() { return $('ul.nav i.fa-user + b') }

    async clickOnSignupButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Sign Up button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.home_page_signup_button);
    }

    async clickOnDeleteAccountButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Delete Account Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.home_page_delete_account_button)
    }

    async clickOnLogoutButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Logout Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.home_page_logout_button);
    }

    async isLoggedInAsUsernameVisible(testid: string): Promise<void> {
        const reportingMessage = "Logged in as Username text is visible"
        try {
            const textObtained = await (await this.home_page_logged_in_as_username).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.loggedInAsUsername, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.loggedInAsUsername}`);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`
            reporter.addStep(testid, 'error', reportingMessage);
            throw error;
        }
    }

}

export default new HomePage();