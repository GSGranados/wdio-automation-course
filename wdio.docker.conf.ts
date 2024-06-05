import { config as baseConfig } from './wdio.conf.js'
import dotenv from 'dotenv';
dotenv.config();

export const config: WebdriverIO.Config = {
    ...baseConfig,

    hostname: "localhost",
    port: 4444,

    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        timeouts: { implicit: 30000, pageLoad: 2000, script: 30000 },
        "goog:chromeOptions": {
            args: ["--start-maximized"]
        }
    },
    ],

    services: [[
        'docker', {
            dockerOptions: {
                image: 'selenium/standalone-chrome',
                healthCheck: 'http://localhost:4444',
                options: {
                    p: ['4444:4444'],
                    shmSize: '2g'
                }
            }
        }
    ]]


}