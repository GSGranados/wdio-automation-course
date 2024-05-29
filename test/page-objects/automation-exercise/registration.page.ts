import Page from "../Page.js";
import { $ } from '@wdio/globals';
import constants from '../../../data/constants.json' assert {type: "json"}
import { expect } from "chai";
import executeWebAction from "../../helper/error-handling.js";
import reporter from "../../helper/reporter.js";
class RegistrationPage extends Page {
    constructor() {
        super();
    }

    //Locator Strategies
    get registration_page_enter_account_information_message() { return $('.login-form .title:nth-child(1) b') }
    get registration_page_mr_title_radio() { return $('.radio-inline label[for="id_gender1"]') }
    get registration_page_mrs_title_radio() { return $('.radio-inline label[for="id_gender2"]') }
    get registration_page_name_input() { return $('input#name') }
    get registration_page_email_input() { return $('input#email') }
    get registration_page_password_input() { return $('input#password') }
    get registration_page_days_select() { return $('select#days') }
    get registration_page_month_select() { return $('select#months') }
    get registration_page_year_select() { return $('select#years') }
    get registration_page_newsletter_checkbox() { return $('input#newsletter') }
    get registration_page_special_offers_checkbox() { return $('input#optin') }
    get registration_page_address_first_name_input() { return $('input#first_name') }
    get registration_page_address_last_name_input() { return $('input#last_name') }
    get registration_page_address_company_input() { return $('input#company') }
    get registration_page_address_input() { return $('input#address1') }
    get registration_page_second_address_input() { return $('input#address2') }
    get registration_page_address_country_select() { return $('select#country') }
    get registration_page_address_state_input() { return $('input#state') }
    get registration_page_address_city_input() { return $('input#city') }
    get registration_page_address_zip_code_input() { return $('input#zipcode') }
    get registration_page_address_mobile_number_input() { return $('input#mobile_number') }
    get registration_page_create_account_button() { return $('button[data-qa="create-account"]') }

    //Assertion locators
    get registration_page_account_information_text() { return $('h2.title b') }


    async selectAccountTitle(testid: string, isMrTitle: boolean): Promise<void> {
        const reportingMessage = "Click on Title Radio Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, isMrTitle ? await this.registration_page_mr_title_radio : await this.registration_page_mrs_title_radio);
    }

    async enterSingupName(testid: string, registrationName: string): Promise<void> {
        const reportingMessage = `${registrationName} set up as Registration Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_name_input, registrationName);
    }

    async enterSingupPassword(testid: string, password: string): Promise<void> {
        const reportingMessage = `${password} set up as Registration Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_password_input, password);
    }

    //DD-MM-YYYY
    async enterRegistrationDateOfBirth(testid: string, registrationDate: string): Promise<void> {
        const [registrationDay, registrationMonth, registrationYear] = registrationDate.split('-');
        await executeWebAction(this.selectDropdownOption, testid, "Registration Day selected", await this.registration_page_days_select, registrationDay);
        await executeWebAction(this.selectDropdownOption, testid, "Registration Month selected", await this.registration_page_month_select, registrationMonth);
        await executeWebAction(this.selectDropdownOption, testid, "Registration Year selected", await this.registration_page_year_select, registrationYear);
    }

    async clickOnregistrationPageNewsletterCheckbox(testid: string): Promise<void> {
        const reportingMessage = "Click on Registration Page news checkbox";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.registration_page_newsletter_checkbox);
    }

    async clickOnregistrationPageSpecialOffersCheckbox(testid: string): Promise<void> {
        const reportingMessage = "Click on Special Offers checkbox";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.registration_page_special_offers_checkbox);
    }

    async enterSingupAddressFirstName(testid: string, addressFirstName: string): Promise<void> {
        const reportingMessage = `${addressFirstName} set up as First Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_first_name_input, addressFirstName);
    }

    async enterregistrationPageAddressLastName(testid: string, addressLastName: string): Promise<void> {
        const reportingMessage = `${addressLastName} set up as Address Last Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_last_name_input, addressLastName);
    }

    async enterregistrationPageAddressCompany(testid: string, addressCompanyName: string): Promise<void> {
        const reportingMessage = `${addressCompanyName} set  up as Address Company Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_company_input, addressCompanyName)
    }

    async enterregistrationPageAddress(testid: string, addressName: string): Promise<void> {
        const reportingMessage = `${addressName} set  up as Address Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_input, addressName)
    }

    async enterregistrationPageSecondAddress(testid: string, secondAddressName: string): Promise<void> {
        const reportingMessage = `${secondAddressName} set up as Second Address Name`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_second_address_input, secondAddressName);
    }

    async selectregistrationPageCountry(testid: string, countryName: string): Promise<void> {
        const reportingMessage = `${countryName} set  up as Country Name`;
        await executeWebAction(this.selectDropdownOption, testid, reportingMessage, await this.registration_page_address_country_select, countryName)
    }

    async enterregistrationPageAddressState(testid: string, registrationPageState: string): Promise<void> {
        const reportingMessage = `${registrationPageState} set up as State`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_state_input, registrationPageState);
    }

    async enterregistrationPageAddressCity(testid: string, registrationPageCity: string): Promise<void> {
        const reportingMessage = `${registrationPageCity} set up as City`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_city_input, registrationPageCity);
    }

    async enterregistrationPageAddressZipCode(testid: string, registrationPageZipCode: string): Promise<void> {
        const reportingMessage = `${registrationPageZipCode} set up as ZIP Code`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_zip_code_input, registrationPageZipCode);
    }

    async enterregistrationPageAddressMobileNumber(testid: string, mobileNumber: string): Promise<void> {
        const reportingMessage = `${mobileNumber} set  up as Mobile Number`;
        await executeWebAction(this.typeIntoInputField, testid, reportingMessage, await this.registration_page_address_mobile_number_input, mobileNumber);
    }

    async clickOnCreateAccountButton(testid: string): Promise<void> {
        const reportingMessage = "Click on Create Account Button";
        await executeWebAction(this.clickOnElement, testid, reportingMessage, await this.registration_page_create_account_button);
    }

    async isAccountInformationTextVisible(testid: string): Promise<void> {
        const reportingMessage = "Account Information Text Visible";
        try {
            const textObtained = await (await this.registration_page_account_information_text).getText();
            expect(textObtained).to.be.equal(constants.assertionTexts.accountInformation, `${constants.errorMessages.chaiExpectErrorMessage} ${textObtained} - ${constants.assertionTexts.accountInformation}`);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testid, 'error', reportingMessage);
            throw error;
        }
    }

}

export default new RegistrationPage();