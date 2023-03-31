//bereketzewde_htj0S9
//bjLMV7Cxt4qC8S27hQps
//http://bereketzewde_htj0S9:bjLMV7Cxt4qC8S27hQps@hub-cloud.browserstack.com/wd/hub

const webdriver = require('selenium-webdriver');
async function runTestWithCaps (capabilities) {
  let buildDriver = new webdriver.Builder()
    .usingServer('http://bereketzewde_htj0S9:bjLMV7Cxt4qC8S27hQps@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    })
    let driver=buildDriver.build()
    await driver.get("https://www.youtube.com/")
    //https://www.courseseye.com/colleges-and-universities/1916-debre-berhan-university.aspx
    // await driver.get("https://www.orangehrm.com/");
    console.log(await driver.getTitle())
    await driver.wait(webdriver.until.elementLocated(webdriver.By.id("text")),50000)
    await driver.findElement(webdriver.By.id("text")).click()

  await driver.quit();
}
const capabilities1 = {
    'bstack:options' : {
        "os": "Windows",
        "osVersion": "11",
        "browserVersion": "103.0",
        "buildName" : "browserstack-build-1",
        "sessionName" : "Parallel test 1",
    },
    "browserName": "Chrome"
    }
    const capabilities2 = {
      'bstack:options' : {
          "os": "Windows",
          "osVersion": "10",
          "browserVersion": "102.0",
          "buildName" : "browserstack-build-1",
          "sessionName" : "Parallel test 2",
      },
      "browserName": "Firefox"
      }
      const capabilities3 = {
        'bstack:options' : {
            "os": "OS X",
            "osVersion": "Big Sur",
            "browserVersion": "14.1",
            "buildName" : "browserstack-build-1",
            "sessionName" : "Parallel test 3",
        },
        "browserName": "Safari"
        }

    // runTestWithCaps(capabilities2)  
    runTestWithCaps(capabilities1)  
    // runTestWithCaps(capabilities3)   
     