import { BeforeAll } from "@wdio/cucumber-framework";
import homePage from "../../page-objects/automation-exercise/home.page.js";

BeforeAll(async function () {
    await homePage.navigateToURL('https://automationexercise.com/');
    //assertion to be added later
});

