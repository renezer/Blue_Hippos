const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome'); 
const path = require('chromedriver').path; 
const service = new chrome.ServiceBuilder(path).build(); 
chrome.setDefaultService(service); 
const browser = new Builder() 
    .withCapabilities(Capabilities.chrome()) 
    .build(); 

    async function open() { 
        browser.get('http://hackathon-maze.herokuapp.com/static/'); 
    } 

    async function quit() {
        setTimeout(() => {browser.quit()}, 30000);
    }

    function goUP(j) {
        for (let i = 0; i < j; i++) {
            browser.findElement(By.css("body")).sendKeys(Key.UP);
        }
    }

    function goLEFT(j) {
        for (let i = 0; i < j; i++) {
            browser.findElement(By.css("body")).sendKeys(Key.LEFT);
        }
    }

    function goDOWN(j) {
        for (let i = 0; i < j; i++) {
            browser.findElement(By.css("body")).sendKeys(Key.DOWN);
        }
    }

    function goRIGHT(j) {
        for (let i = 0; i < j; i++) {
            browser.findElement(By.css("body")).sendKeys(Key.RIGHT);
        }
    }

    function go() {
        goUP(3);
        goLEFT(2);
        goUP(2);
        goLEFT(3);
        goUP(2);
        goRIGHT(3);
        goUP(2);
        goRIGHT(4);
        goUP(4);
        goLEFT(3);
        goDOWN(2);
        goLEFT(7);
        goDOWN(2);
        goLEFT(4);
        goDOWN(2);
        goRIGHT(4);
        goDOWN(2);
        goLEFT(4);
        goDOWN(2);
        goLEFT(2);
        goUP(2);
        goLEFT(4);
        goUP(2);
        goLEFT(5);
        goDOWN(2);
        goLEFT(1);
        goDOWN(4);
        goLEFT(2);
        goUP(9);
        goRIGHT(2);
        goUP(3);
        goLEFT(2);
        goRIGHT(2);
        goDOWN(4);
        goLEFT(2);
        goDOWN(8);
        goRIGHT(2);
        goUP(6);
        goRIGHT(6);
        goDOWN(2);
        goRIGHT(4);
        goDOWN(2);
        goRIGHT(2);
        goUP(2);
        goRIGHT(4);
        goUP(2);
        goLEFT(4);
        goUP(2);
        goRIGHT(4);
        goUP(2);
        goRIGHT(8);
        goUP(6);
        goLEFT(8);
        goUP(2);
        goLEFT(2);
        goUP(2);
        goRIGHT(4);
        goUP(4);//treasure
        goLEFT(2);
        goUP(6)
        goLEFT(3);
        goDOWN(1);
        goUP(1)
        goLEFT(7);
        goDOWN(2);
        goLEFT(4);
        goDOWN(6);
        goRIGHT(2);
        goDOWN(3);
        goRIGHT(1);
        goDOWN(1);
        goLEFT(5);  
        goDOWN(4);
        goLEFT(2);
        goUP(6);
        goLEFT(2);
        goUP(11);
    };
    

    open(); 

    go();

    quit();