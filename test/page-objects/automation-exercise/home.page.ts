import Page from "../Page.js";
import {$} from '@wdio/globals'

class HomePage extends Page{

    constructor(){
        super();
    }

    get home_page_signup_button(){return $('ul li a[href="/login"]')}


    async clickOnSignupButton():Promise<void>{
        await this.clickOnElement(await this.home_page_signup_button);       
    }

}

export default new HomePage();