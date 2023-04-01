require('dotenv').config();
const webdriver = require('selenium-webdriver');

async function runTestWithCaps (capabilities) {
    
   const driver = new webdriver.Builder()
  .usingServer(`https://${process.env.USER_NAME}:${process.env.ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`)
  .withCapabilities(capabilities)
  .build();
 await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// Test cases for orange hrm website 
 await driver.findElement(webdriver.By.name("username")).sendKeys('Admin')
 await driver.findElement(webdriver.By.name("password")).sendKeys('admin123')
 await driver.findElement(webdriver.By.className("oxd-button oxd-button--medium oxd-button--main orangehrm-login-button")).click()

 await driver.findElement(webdriver.By.className("oxd-icon-button oxd-main-menu-button")).click()
 await driver.findElement(webdriver.By.className("oxd-userdropdown-img")).click()
 await driver.findElement(webdriver.By.linkText("Logout")).click()
 driver.wait(webdriver.until.urlContains('auth/login'), 1000);
  console.log( await driver.getTitle())


    await driver.quit();
  }





// Define the capabilities of the browser you want to test on
const capabilities = {
  browserName: 'chrome',
  platform: 'Windows 10',
  version: 'latest',
  'sauce:options': {
    username: process.env.USER_NAME,
    accessKey: process.env.ACCESS_KEY,
    name: 'My Test2',
  }
};
runTestWithCaps(capabilities)


