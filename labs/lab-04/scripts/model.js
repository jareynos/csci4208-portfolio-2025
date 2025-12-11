const passcode = Math.floor( Math.random()*1000 );
let tries = 10;
const guess = new Guess();
let then = Date.now();
let timeLeft = 30;
let gameover = false;

function guessNumber(guess){
    tries--;

    if ( parseInt(guess) == passcode ){
        gameover = true;
        printGameOver('WIN');
    }
    else{
        giveClue(parseInt(guess));
    }
}

function giveClue(guess){
    console.log("guess ", parseInt(guess), "and ", passcode);
    if (guess > passcode){
        printClue('HI', guess);
    }
    else{
        printClue('LO', guess);
    }
}

function main(){
    const now = Date.now();
    if (gameover){
        return;
    }
    else if (timeLeft <= 0){
        printGameOver('LOSE');
    }
    else if (now - then > 1000){
        timeLeft--;
        printDigits();
        printAttemptsRemaining();
        then = Date.now();
    }
    requestAnimationFrame(main);
}

main();