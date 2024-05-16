import Page from "../Page.js";
import { $ } from '@wdio/globals';

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


    async selectAccountTitle(isMrTitle: boolean): Promise<void> {
        await this.clickOnElement(isMrTitle ? await this.registration_page_mr_title_radio : await this.registration_page_mrs_title_radio);

    }

    async enterSingupName(registrationName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_name_input, registrationName);

    }

    async enterSingupPassword(password: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_password_input, password);

    }

    //DD-MM-YYYY
    async enterRegistrationDateOfBirth(registrationDate: string): Promise<void> {
        const [registrationDay, registrationMonth, registrationYear] = registrationDate.split('-');
        await this.selectDropdownOption(await this.registration_page_days_select, registrationDay);
        await this.selectDropdownOption(await this.registration_page_month_select, registrationMonth);
        await this.selectDropdownOption(await this.registration_page_year_select, registrationYear);

    }

    async clickOnregistrationPageNewsletterCheckbox(): Promise<void> {

        await this.clickOnElement(await this.registration_page_newsletter_checkbox);

    }

    async clickOnregistrationPageSpecialOffersCheckbox(): Promise<void> {
        await this.clickOnElement(await this.registration_page_special_offers_checkbox);

    }

    async enterSingupAddressFirstName(addressFirstName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_first_name_input, addressFirstName);

    }

    async enterregistrationPageAddressLastName(addressLastName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_last_name_input, addressLastName);

    }

    async enterregistrationPageAddressCompany(addressCompanyName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_company_input, addressCompanyName);

    }

    async enterregistrationPageAddress(addressName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_input, addressName);

    }

    async enterregistrationPageSecondAddress(secondAddressName: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_second_address_input, secondAddressName);
    }

    async selectregistrationPageCountry(countryName: string): Promise<void> {
        await this.selectDropdownOption(await this.registration_page_address_country_select, countryName);

    }

    async enterregistrationPageAddressState(registrationPageState: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_state_input, registrationPageState);

    }

    async enterregistrationPageAddressCity(registrationPageCity: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_city_input, registrationPageCity);

    }

    async enterregistrationPageAddressZipCode(registrationPageZipCode: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_zip_code_input, registrationPageZipCode);
    }

    async enterregistrationPageAddressMobileNumber(mobileNumber: string): Promise<void> {
        await this.typeIntoInputField(await this.registration_page_address_mobile_number_input, mobileNumber);

    }

    async clickOnCreateAccountButton(): Promise<void> {
        await this.clickOnElement(await this.registration_page_create_account_button);

    }

}

export default new RegistrationPage();