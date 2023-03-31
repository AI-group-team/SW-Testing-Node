require('dotenv').config();
const webdriver = require('selenium-webdriver');

// const remote = require('selenium-webdriver/remote');

// Define your Sauce Labs credentials


async function runTestWithCaps (capabilities) {
    
   const driver = new webdriver.Builder()
  .usingServer(`https://${process.env.USER_NAME}:${process.env.ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`)
  .withCapabilities(capabilities)
  .build();
 await driver.get('https://www.google.com');

  console.log( await driver.getTitle())

    await driver.quit();
  }





// Define the capabilities of the browser you want to test on
const capabilities = {
  browserName: 'chrome',
  platform: 'Windows 11',
  version: 'latest',
  'sauce:options': {
    username: process.env.USER_NAME,
    accessKey: process.env.ACCESS_KEY,
    name: 'My Test2',
  }
};
runTestWithCaps(capabilities)


