
import Page from "../Page.js";
class ConfirmationPage extends Page {
    constructor() {
        super();
    }
    //Locator Strategies
    get confirmation_page_account_created_message() { return $('h2[data-qa="account-created"] b') }
    get confirmation_page_continue_button() { return $('a[data-qa="continue-button"]') }
    get confirmation_page_account_deleted_message() { return $('h2[data-qa="account-deleted"] b') }



    async clickOnContinueButton(): Promise<void> {
            await this.clickOnElement(await this.confirmation_page_continue_button);
    }


}

export default new ConfirmationPage();
