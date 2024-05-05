import { Given } from "@wdio/cucumber-framework";

Given(/^I test the data table functionality$/, async function(dataTable: any){
    const [value,testMail,assetPath,testNumber] = dataTable.rawTable[0];
    console.log(value)
    console.log(testMail)
    console.log(assetPath)
    console.log(testNumber);
})