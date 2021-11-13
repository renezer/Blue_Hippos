const { Builder, By, Key, until, Capabilities } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver").path;
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const solver = new Builder().withCapabilities(Capabilities.chrome()).build();
const game = new Builder().withCapabilities(Capabilities.chrome()).build();


async function startingPosition() {
    try {
        await solver.get("http://www.chessnextmove.com/");
        await game.get("https://hackathon-chess.herokuapp.com/");
       
          const solverPlayButton =  solver.findElement(By.css("[class='icon icon-play']"));
          await solverPlayButton.click();

          await nextStep();
          await replicateBlackMove();          

    } catch {
        
    }
}


async function quit() {
  setTimeout(() => {
    game.quit();
    solver.quit();
  }, 15000);
}

async function replicateBlackMove() {
    setTimeout( async () => { 
    try {
      const solverBoard = await solver.findElement(By.css("div[class*='board']"));
      const gameBoard = await game.findElement(By.css("div[class*='board']"));

      //board comparison by child elements count
      // get board > row > square, foreach do element count comparision, print all differences
    gameBoard.findElements(By.css("div[class*='square']")).then( async (gameSquare) => { 
        solverBoard.findElements(By.css("div[class*='square']")).then( async (solverSquare) => {

            console.log(`game ${gameSquare.length}`)
            
            console.log(`solver ${solverSquare.length}`)

            for (let i = 0; i < 64; i++) {
                const gameL = (await gameSquare[i].child).length; // neeed to select both div and img
                const solverL = (await solverSquare[i].findElements(By.css("div"))).length; // sometimes detaches from dom

                if (gameL != solverL) {
                    console.log(`difference in ${i}, game: ${gameL} , solver ${solverL}`)
                }
              }
        })
        })

    //   const whatToMove
    //   const whereToMove
} catch {}
    }, 10000);
  }



async function nextStep() {
  setTimeout( async () => { 
    const whatToMove = await solver.findElement(By.css("div[class*='highlightSqrDark'] > div[data-piece*='w']")).findElement(By.xpath("./..")).getAttribute("data-square");
    const whereToMove = await solver.findElement(By.css("div[class*='highlightSqrDark']")).getAttribute("data-square");
    movePieceInGame(whatToMove,whereToMove)

    const solverNextButton =  solver.findElement(By.css("[class='ctrl-btn icon3']"));
    await solverNextButton.click();
  }, 4000);
}

async function movePieceInGame(from, to) {
          let gameDraggable = game.findElement(By.css(`[data-square=${from}]`));
          let gameDroppable = game.findElement(By.css(`[data-square=${to}]`));
          game.actions().dragAndDrop(gameDraggable, gameDroppable).perform();
}


startingPosition();

quit();

