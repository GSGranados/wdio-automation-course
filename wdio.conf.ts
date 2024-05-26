import type { Options } from '@wdio/types';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const headlessMode = process.env.HEADLESS_MODE
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

    maxInstances: process.env.PARALLEL_MODE === "TRUE" ? 2 : 1,

    capabilities: process.env.PARALLEL_MODE === "TRUE" ? [
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
        {
            browserName: 'firefox',
            acceptInsecureCerts: true,
            timeouts: { implicit: 30000, pageLoad: 2000, script: 30000 },
            'moz:firefoxOptions': {
                args: headlessMode === "TRUE" ? ['-disable-gpu', '-headless'] : ['-disable-gpu']
            }
        }

    ] :
        process.env.IS_CHROME === "TRUE" ?
            [
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
            ] :
            [
                {
                    browserName: 'firefox',
                    acceptInsecureCerts: true,
                    timeouts: { implicit: 30000, pageLoad: 2000, script: 30000 },
                    'moz:firefoxOptions': {
                        args: headlessMode === "TRUE" ? ['-disable-gpu', '-headless'] : ['-disable-gpu']
                    }
                }
            ],


    logLevel: 'error',

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
        require: ['./test/step-definitions/**/*.spec.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tags: '@automation-exercise',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },

    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        if (fs.existsSync("./reports/allure-results") && process.env.PRODUCTION_MODE === "FALSE") {
            fs.rmdirSync("./reports/allure-results", { recursive: true });
        }
    },
    beforeScenario: function (world, context) {
        let worldArray = world.pickle.name.split(/:/);
        //@ts-ignore
        if (worldArray.length > 0) browser.options.testid = worldArray[0];
        //@ts-ignore
        if (!browser.options.testid) throw Error(`Error obtaining Test ID for the current scenario: ${world.pickle.name}`);
    },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    },
    }
