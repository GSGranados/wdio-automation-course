import { Given, Then, When } from "@wdio/cucumber-framework";
import path from 'path'

Given(/^I open the practice website url$/, async function () {
    await browser.url('https://practice-automation.com');
    await browser.maximizeWindow();
});

When(/^I click on the form input button$/, async function () {
    const formFieldsButton = await $('//a[contains(text(),"Form Fields")]');
    await formFieldsButton.click();
});


When(/^I put a random text in an input field$/, async function () {
    const nameInputField = await $('input[data-cy="name"]');
    await nameInputField.setValue("Test Name");

});

When(/^I select the (.*) and (.*) drink options$/, async function (firstOption: string, secondOption: string) {
    const firstOptionCheckbox = await $(`input[data-cy="drink${firstOption}"]`);
    const secondOptionOptionCheckbox = await $(`input[data-cy="drink${secondOption}"]`);
    await firstOptionCheckbox.click();
    await secondOptionOptionCheckbox.click();
});

When(/^I select the (.*)nd radio option$/, async function (colorOption: string) {
    const colorOptionRadioButton = await $(`input[data-cy="color${colorOption}"]`);
    await colorOptionRadioButton.click();

});

When(/^I answer the siblings question$/, async function () {
    const siblingsDropdown = await $('select[data-cy="siblings"]');
    const siblingsOptions = await $$(`${siblingsDropdown.selector} option`);
    await siblingsDropdown.click();
    await siblingsOptions[3].click();
});

When(/^I type the message$/, async function () {
    const textAreaElement = await $('textarea[data-cy="message"]');
    await textAreaElement.addValue("Test Message");
});

When(/^I go back and click on the popups button$/, async function () {
    await browser.back();
    await browser.pause(1500);
    const popupsButton = await $('//a[contains(text(),"Popups")]');
    await popupsButton.click();
});

When(/^I click on the normal popup button and accept the alert$/, async function () {
    const normalAlertButton = await $('#alert');
    await normalAlertButton.click();
    await browser.acceptAlert();
});

When(/^I click on the confirm popup button and dismiss the alert$/, async function () {
    const confirmAlertButton = await $('#confirm');
    await confirmAlertButton.click();
    await browser.dismissAlert();
    const confirmTextElement = await $('#confirmResult');
    const confirmString = await confirmTextElement.getText();
    expect(confirmString).toEqual("Cancel it is!");
});

When(/^I click on the prompt popup button and send a random text$/, async function () {
    const promptAlertButton = await $('#prompt');
    await promptAlertButton.click();
    await browser.sendAlertText("Steven");
    await browser.acceptAlert();
});

When(/^I go back and navigate to the sliders page url$/, async function () {
    await browser.url("https://www.dofactory.com/html/input/range");
});

When(/^I interact with the input range element (.*) times$/, async function (interactions: string) {
    const rangeElement = await $('#slider');
    const isLeft = true;
    await rangeElement.click();
    for (let i = 0; i < +interactions; i++) {
        await browser.keys(`${isLeft ? "Left" : "Right"} arrow`);
    }
});

When(/^I go back to the automation site and navigate to the Date input section$/, async function () {
    await browser.url("https://practice-automation.com/");
    const calendarsButton = await $('//a[contains(text(),"Calendars")]');
    await calendarsButton.click();
});

When(/^I add my birthday date: (.*)$/, async function (dateValue: string) {
    const dateInputElement = await $('#g1065-selectorenteradate');
    await dateInputElement.click();
    await dateInputElement.setValue(dateValue);
    await browser.keys("Tab");
});


When(/^I go back and click on the Hover section$/, async function () {
    await browser.back();
    const hoverButton = await $('//a[contains(text(),"Hover")]');
    await hoverButton.click();
});

When(/^I hover on the text element and validate its value has changed$/, async function () {
    const hoverableTextElement = await $('#mouse_over');
    const hoverableTextObtained = await hoverableTextElement.getText();
    await hoverableTextElement.moveTo();
    const textChanged = await hoverableTextElement.getText();
    expect(textChanged).not.toEqual(hoverableTextObtained);
    expect(textChanged).toEqual('You did it!');
});

When(/^I go back and click on the file upload section$/, async function () {
    await browser.back();
    const fileUploadButton = await $('//a[contains(text(),"File Upload")]');
    await fileUploadButton.click();
});

When(/^I upload a normal file$/, async function () {
    const fileUploadInput = await $('#file-upload');
    await fileUploadInput.addValue(path.join(process.cwd(), "/assets/52.pdf"));
    await browser.back();
});

When(/^I go back click on the Tables section$/, async function () {
    const tablesButton = await $('//a[contains(text(),"Tables")]');
    await tablesButton.click();
});

When(/^Search for the (.*) record$/, async function (countrySeachCriteria: string) {
    const dataSearchInput = await $('input[aria-controls="tablepress-1"]');
    await dataSearchInput.setValue(countrySeachCriteria);
    await browser.pause(1000);
});

Then(/^I gather the country data and verify it exists$/, async function () {
    const tableCells = await $$('#tablepress-1 > tbody > tr > td');
    const tableDataArray = []
    for (let i = 0; i < tableCells.length; i++) {
        tableDataArray.push(await tableCells[i].getText());
    }
    expect(tableDataArray).toExist();
    expect(tableDataArray.length).toEqual(3);
});

When(/^I go back and click on the iFrames section$/, async function () {
    await browser.back()
    const iFramesButton = await $('//a[contains(text(),"Iframes")]');
    await iFramesButton.click();
});

When(/^I interact with both iFrame elements and buttons$/, async function () {
    const childrenIframe = await $('#frame2');
    await browser.switchToFrame(childrenIframe);
    const menuButton = await $('.NavBar__Menu--item button');
    await menuButton.click();
    await browser.pause(1500);
    await browser.switchToParentFrame(); // after every iFrame interaction
    const secondChildrenIframe = await $('#frame1');
    await browser.switchToFrame(secondChildrenIframe);
    const footerElement = await $('footer.bg-dark');
    await footerElement.scrollIntoView();
    await browser.pause(1500); // immediate stop
    await browser.switchToParentFrame(); // after every iFrame interaction
});


When(/^I perform some scroll actions$/, async function () {
    const footerElement = await $('#footer');
    await footerElement.scrollIntoView({ behavior: "smooth", block: "center" })
    await browser.pause(3000)
});

When(/^I interact with the element properties$/, async function () {
    const automationButton = await $('//a[contains(text(),"Ads")]');
    await automationButton.click();
    const adElement = await $('#popmake-1272');
    await adElement.waitUntil(async () => {
        return (await adElement.isDisplayed() && await adElement.isClickable() && adElement.elementId)
    }, { timeout: 30000, timeoutMsg: "error", interval: 1000 });
    console.log("I have reached here");
    await adElement.click();
});

When(/^I test the screenshot and window functionalities$/, async function () {
    await browser.newWindow("https://automatenow.io/");
    await browser.pause(3000);
    await browser.reloadSession();
    await browser.url("https://automatenow.io/");
    await browser.pause(10000);
});