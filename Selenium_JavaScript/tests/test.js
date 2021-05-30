
const {Builder,Key,By} = require("selenium-webdriver");
var assert = require('assert');

const USERNAME ='haritagr16'; //replace with your email address
const KEY = 'KhRUhWBtSMg06DfGkKDY1khYNJm95695WV42HfaYPot7nqQfw6'; //replace with your authkey
const GRID_HOST = 'hub.lambdatest.com/wd/hub';

async function example(){

    var capabilities = {
		"build" : "JavaScript Wait Function",
		"name" : "Form Submission",
		"platform" : "Windows 10",
		"browserName" : "Chrome",
		"version" : "91.0",
		"selenium_version" : "3.141.59",
		"chrome.driver" : "91.0"
	}
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;

   
        //To wait for browser to build and launch properly
        var driver = await new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

       var message = "Hello World"; 

        await driver.get("https://www.lambdatest.com/selenium-playground/");
        await driver.findElement(By.partialLinkText("Got it")).click()
        await driver.findElement(By.partialLinkText("Simple Form Demo")).click() 
        await driver.findElement(By.id("user-message")).sendKeys(message)
        await driver.findElement(By.id("showInput")).click()
        var displayedMessage = await driver.findElement(By.id("message")).getText()
        
        //To verify both input message and displayed message are matching
        assert.strictEqual(displayedMessage, message);
        console.log('Message match status:',displayedMessage === message);

        //It is always a safe practice to quit the browser after execution
        await driver.quit();
    }

example()

