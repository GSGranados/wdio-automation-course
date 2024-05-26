import allure from '@wdio/allure-reporter'


function addStep(
    testid: string,
    logLevel: string,
    msg: string
) {

    let arr = ["info", "error"];
    if (!testid) throw Error(`Invalid Test ID: ${testid} field to report step`);
    if (!msg) throw Error(`Given Message: ${msg} is not a valid message to report`);
    if (!arr.includes(logLevel)) throw Error('Invalid Log Level');
    try {
        //@ts-ignore
        allure.addStep(msg, {}, `${loglevel === "info" ? "passed" : "failed"}`);
    } catch (error) {
        throw Error(`Error reporting the step, ${error}`)
    }

}

export default { addStep }