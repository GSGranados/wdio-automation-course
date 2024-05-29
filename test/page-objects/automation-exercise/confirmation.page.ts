
import Page from "../Page.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import { expect } from "chai";
import executeWebAction from "../../helper/error-handling.js";
import reporter from "../../helper/reporter.js";
class ConfirmationPage extends Page {
    constructor() {
        super();
    }
    //Locator Strategies
    get confirmation_page_account_created_message() { return $('h2[data-qa="account-created"] b') }
    get confirmation_page_continue_button() { return $('a[data-qa="continue-button"]') }
    get confirmation_page_account_deleted_message() { return $('h2[data-qa="account-deleted"] b') }


    async clickOnContinueButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Continue Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.confirmation_page_continue_button)
    }

    async isAccountCreatedTextVisible(testid: string): Promise<void> {
        const reportingMessage = "Account Created Message Visible";
        try {
            const textObtained = await (await this.confirmation_page_account_created_message).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.accountCreated, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.accountCreated}`);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testid, 'error', reportingMessage);
            throw error;
        }
    }

    async isAccountDeletedTextVisible(testid: string): Promise<void> {
        const reportingMessage = "Account Deleted Message Visible";
        try {
            const textObtained = await (await this.confirmation_page_account_deleted_message).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.accountDeleted, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.accountDeleted}`);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testid, 'error', reportingMessage);
            throw error;
        }

    }




}

export default new ConfirmationPage();
