import Page from "../Page.js";
import { $ } from '@wdio/globals'

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


    async clickOnSignupButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_signup_button);
    }

    async clickOnDeleteAccountButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_delete_account_button);
    }

    async clickOnLogoutButton(): Promise<void> {
        await this.clickOnElement(await this.home_page_logout_button);
    }

}

export default new HomePage();