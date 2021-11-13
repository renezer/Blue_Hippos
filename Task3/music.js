const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome'); 
const path = require('chromedriver').path; 
const service = new chrome.ServiceBuilder(path).build(); 
chrome.setDefaultService(service); 
const browser = new Builder() 
    .withCapabilities(Capabilities.chrome()) 
    .build(); 

async function open() { 
    browser.get('https://codepen.io/gabrielcarol/pen/rGeEbY'); 
} 

async function quit() {
    setTimeout(() => {browser.quit()}, 15000);
}
 
open(); 


quit();
