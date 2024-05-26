import Page from "../Page.js";
import { $ } from '@wdio/globals'
import constants from '../../../data/constants.json' assert {type: "json"};
import { expect } from "chai";
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
    get home_page_logged_in_as_username(){return $('ul.nav i.fa-user + b')}

    async clickOnSignupButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_signup_button);
    }

    async clickOnDeleteAccountButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_delete_account_button);
    }

    async clickOnLogoutButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_logout_button);
    }

    async isLoggedInAsUsernameVisible():Promise<void>{
        const textObtained = await (await this.home_page_logged_in_as_username).getText();
        expect(textObtained).to.be.equal(constants.assertionTexts.loggedInAsUsername,`${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.loggedInAsUsername}`);
    }

}

export default new HomePage();