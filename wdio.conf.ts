import type { Options } from '@wdio/types';
import RerunService from 'wdio-rerun-service';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const headlessMode = process.env.HEADLESS_MODE
const productionMode = process.env.PRODUCTION_MODE
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    specs: [
        './test/features/**/*.feature'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'chrome',
            acceptInsecureCerts: true,
            timeouts: { implicit: 30000, pageLoad: 2000, script: 30000 },
            "goog:chromeOptions": {
                args: headlessMode === "TRUE" ? [
                    "--window-size=1920,1080",
                    "--enable-automation",
                    "--disable-gpu",
                    "--no-sandbox",
                    "disable-infobars",
                    "disable-popup-blocking",
                    "disable-notifications",
                    "--headless"
                ] :
                    ["--window-size=1920,1080",
                        "--enable-automation",
                        "--disable-gpu",
                        "--no-sandbox",
                        "disable-infobars",
                        "disable-popup-blocking",
                        "disable-notifications"
                    ]
            }
        },
    ], 

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', {
        outputDir: 'reports/allure-results',
        useCucumberStepReporter: true,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true,
        addConsoleLogs: true
    }]],



    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./test/step-definitions/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '@automation-exercise',
        timeout: 999999,
        ignoreUndefinedDefinitions: true
    },

    services: [[
        RerunService, {
            rerunDataDir : 'rerun-logs/',
            rerunScriptPath: "rerun.sh",
            commandPrefix: "wdio run wdio.conf.ts"
        }]
],

    /**
        * Gets executed once before all workers get launched.
        * @param {Object} config wdio configuration object
        * @param {Array.<Object>} capabilities list of capabilities details
        */
    onPrepare: function (config, capabilities) {
        if (fs.existsSync("./reports/allure-results") || productionMode === 'FAlSE') {
            fs.rmdirSync("./reports/allure-results", { recursive: true });
        }
    },

    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {Object}                 context  Cucumber World object
     */
    beforeScenario: async function (world, context) {
        let worldArr = world.pickle.name.split(/:/);
        //@ts-ignore
        if (worldArr.length > 0) browser.options.testid = worldArr[0];
        //@ts-ignore
        if (!browser.options.testid)
            throw Error(
                `Error obtaining the test ID for the current scenario: ${world.pickle.name}`
            );
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },
}
