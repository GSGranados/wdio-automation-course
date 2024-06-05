import {config as baseConfig} from './wdio.conf.js'
import dotenv from 'dotenv';
dotenv.config();

export const config: WebdriverIO.Config = {
    ...baseConfig,

    user: process.env.BS_USERNAME,
    key: process.env.BS_ACCESS_KEY,
    hostname: "hub.browserstack.com",

    capabilities: [
        {
          browserName: 'Chrome',
          'bstack:options': {
            os: 'OS X',
            osVersion: 'Sonoma',
            browserVersion: 'latest'
          }
        },
      ],

    services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                projectName: "WDIO Automation Course",
                buildName: "Account Creation User Flow"
            },
            browserstackLocal: true
        }]
    ],
}