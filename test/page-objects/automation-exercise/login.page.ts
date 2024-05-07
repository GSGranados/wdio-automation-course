import Page from "../Page.js";
import {$} from '@wdio/globals'
class LoginPage extends Page{

    constructor(){
        super()
    }

    get login_page_signup_name_input(){return $('input[data-qa="signup-name"]')}
    get login_page_signup_email_input(){return $('input[data-qa="signup-email"]')}
    get login_page_signup_button(){return $('button[data-qa="signup-button"]')}

    async typeIntoSingupNameInput(signupName:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_signup_name_input, signupName);
    }

    async typeIntoSingupEmailInput(signupEmail:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_signup_email_input, signupEmail);
    }

    async clickOnSignupButton():Promise<void>{
        await this.clickOnElement(await this.login_page_signup_button);
    }
}

export default new LoginPage()