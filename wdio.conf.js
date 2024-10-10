exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',

    specs: ["./test/specs/sauce_demo.e2e.js"],
    
    exclude: [],
    
    maxInstances: 10,
    
    capabilities: [{
        browserName: 'chrome'
    }],


    logLevel: 'info',
  
    bail: 0,

    baseUrl: "https://www.saucedemo.com",

    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
   
    framework: 'mocha',
    
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
