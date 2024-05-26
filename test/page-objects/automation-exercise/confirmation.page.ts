
import Page from "../Page.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import { expect } from "chai";
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

    async isAccountCreatedTextVisible(): Promise<void> {
        const textObtained = await (await this.confirmation_page_account_created_message).getText();
        expect(textObtained).to.be.equal(constants.assertionTexts.accountCreated, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.accountCreated}`);
    }

    async isAccountDeletedTextVisible(): Promise<void> {
        const textObtained = await (await this.confirmation_page_account_deleted_message).getText();
        expect(textObtained).to.be.equal(constants.assertionTexts.accountDeleted,`${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.accountDeleted}`);
    }




}

export default new ConfirmationPage();
