/// <reference types="cypress" />

describe('Meme maker', () => { 
  var link ="";
  const axios = require('axios');
  const accessToken = 'xoxb-2666310489623-2674300956774-JYESWMRAEdiWnNq8WEvFKBzW';

    it('loads meme generator', () => {
      cy.visit('https://imgflip.com/memegenerator');
    });
  
    it('Search meme image', () => {
      cy.wait(3000);
      cy.get('input#mm-search').click();
      cy.wait(5000);
      cy.get('input#mm-search').type('aliens');
      cy.wait(5000);
    });

    it('Select aliens image', () => {
      cy.get('tr:nth-of-type(2) > .mm-search-result-text').click();
    });


    it('Enter top text', () => {
      cy.get('div:nth-of-type(1) > .mm-text-wrap > .mm-text').type('Blue hippo never returns late');
    });
  
    it('Enter bottom text', () => {
        cy.get('div:nth-of-type(2) > .mm-text-wrap > .mm-text').type('But when they do...');
      });

    it('Generate meme', () =>{
        cy.get('.b.but.mm-generate').click();
    })

    it('Copy link', () => {
      link = cy.get('.img-code.link').invoke('text');
    })

    it('Post to slack', () => {
      publishMessage('C02M7UAKC59',link.toString());
    });

    async function publishMessage(id, text) {
      try {
        // Call the chat.postMessage method using the built-in WebClient
        const result = await app.client.chat.postMessage({
          // The token you used to initialize your app
          token: "xoxb-2666310489623-2674300956774-JYESWMRAEdiWnNq8WEvFKBzW",
          channel: id,
          text: text
          // You could also use a blocks[] array to send richer content
        });
    
        // Print result, which includes information about the message (like TS)
        console.log(result);
        cy.log(result);
      }
      catch (error) {
        console.error(error);
        cy.log(error);
      }
    }

  });