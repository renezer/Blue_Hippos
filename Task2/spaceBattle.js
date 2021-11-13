const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome'); 
const path = require('chromedriver').path; 
const service = new chrome.ServiceBuilder(path).build(); 
chrome.setDefaultService(service); 
const browser = new Builder() 
    .withCapabilities(Capabilities.chrome()) 
    .build(); 

    async function open() { 
        browser.get('https://hackathon-space-invaders.herokuapp.com/'); 
    } 

    function play() {
        browser.findElement(By.css("div#splashScreen  a")).click();
    }
/*
    async function shoot() {
        for(i=0;i<2;i++){
            browser.findElement(By.css("body")).sendKeys(Key.SPACE);
            i--;
        }
    }
*/
    open();
    play();
    //shoot();

    function shoot(i) {
        setTimeout(() => {
            browser.findElement(By.css("body")).sendKeys(Key.SPACE);
            shoot(++i);
        }, 100)
    }
    
    shoot(0);
    
    let i = 0;
    setInterval(() => {
        browser.findElement(By.css("body")).sendKeys(Key.SPACE);
        i++;
    }, 100)