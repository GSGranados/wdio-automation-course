import constants from '../../data/constants.json' assert {type: "json"}
class Page {

    async navigateToURL(urlPath: string): Promise<void> {
        if (!urlPath) throw Error("no URL Path provided");
        await browser.url(urlPath);
        await browser.maximizeWindow();
    }

    async clickOnElement(webElement: WebdriverIO.Element): Promise<void> {
        if (!webElement.elementId) throw Error(constants.errorMessages.guardClauseError);
        try {
            await webElement.waitUntil(async () => {
                return (await webElement.isExisting())
            }, { timeout: constants.timers.timeoutTimer, interval: constants.timers.intevalTimer, timeoutMsg: constants.errorMessages.waitUntilErrorMessage });
            await webElement.click();
        } catch (error) {
            throw error;
        }
    }

    async typeIntoInputField(webElement: WebdriverIO.Element, inputText: string): Promise<void> {
        if (!webElement.elementId) throw Error(constants.errorMessages.guardClauseError);
        try {
            await webElement.waitUntil(async () => {
                return (await webElement.isExisting())
            }, { timeout: constants.timers.timeoutTimer, interval: constants.timers.intevalTimer, timeoutMsg: constants.errorMessages.waitUntilErrorMessage });
            await webElement.setValue(inputText);
        } catch (error) {
            throw error;
        }
    }

    async explicitPause(pausePeriod:number):Promise<void>{
        await browser.pause(pausePeriod);
    }

}

export default Page;