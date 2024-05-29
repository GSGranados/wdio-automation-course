import reporter from "./reporter.js";



/**
 * @function executeWebAction High Order function to execute a repetitive  task of executing base web actions and handling the possible errors in the try catch block
 * @param baseWebAction The web action to execute
 * @param testid For allure reporting purposes
 * @param reportingMessage the message to report
 * @param args the args needed for the web action to work
 */
export default async function executeWebAction(baseWebAction: (...args: any[]) => Promise<void>,testid:string,reportingMessage:string, ...args: any[]):Promise<void>{
    try {
        await baseWebAction(...args);
        reporter.addStep(testid,'info',reportingMessage);
    } catch (error) {
        error.message = `${reportingMessage} - ${error.message}`
        reporter.addStep(testid,'error',reportingMessage);
        throw error
    }
}