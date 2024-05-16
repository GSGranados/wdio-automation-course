import Page from "../Page.js";
import {$} from '@wdio/globals'
class LoginPage extends Page{

    constructor(){
        super()
    }

    get login_page_signup_name_input(){return $('input[data-qa="signup-name"]')}
    get login_page_signup_email_input(){return $('input[data-qa="signup-email"]')}
    get login_page_signup_button(){return $('button[data-qa="signup-button"]')}
    get login_page_login_email_input(){return $('input[data-qa="login-email"]')}
    get login_page_login_password_input(){return $('input[data-qa="login-password"]')}
    get login_page_login_button(){return $('button[data-qa="login-button"]')}

    async typeIntoSingupNameInput(signupName:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_signup_name_input, signupName);
    }

    async typeIntoSingupEmailInput(signupEmail:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_signup_email_input, signupEmail);
    }

    async clickOnSignupButton():Promise<void>{
        await this.clickOnElement(await this.login_page_signup_button);
    }

    async typeIntoLoginEmailInput(loginEmail:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_login_email_input, loginEmail);
    }

    async typeIntoLoginPasswordInput(loginPassword:string):Promise<void>{
        await this.typeIntoInputField(await this.login_page_login_password_input, loginPassword);
    }

    async clickOnLoginButton():Promise<void>{
        await this.clickOnElement(await this.login_page_login_button);
    }
}

export default new LoginPage()