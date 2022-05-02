// Begin by prompting the user for their choice.
var pChoice = 'r';
//Highlight location
playChoice();

function startGame() {    
    
    var compChoice = Math.floor(Math.random() * Math.floor(3));
    console.log(pChoice);
    computeChoice(compChoice);

    var result = pChoice + letterReturn(compChoice);
    console.log("the result combined is " + result)
    whoWon(result);
    
}
// Get user selection based on which div they click.
function playChoice() {
    var pSect = document.getElementById('playerSect').querySelectorAll('.play');
    rock.addEventListener('mouseup',  function() {
        console.log('rock')
        pChoice = 'r';
        pSect[0].className = 'play highlight';
        pSect[2].className = 'play';
        pSect[1].className = 'play';
        playAgain();
        startGame();
    });
    paper.addEventListener('mouseup',  function() {
        console.log('paper')
        pChoice = 'p';
        pSect[1].className = 'play highlight';
        pSect[2].className = 'play';
        pSect[0].className = 'play';
        playAgain();
        startGame();
    });
    scissors.addEventListener('mouseup', function() {
        console.log('scissors')
        pChoice = 's';
        pSect[2].className = 'play highlight';
        pSect[1].className = 'play';
        pSect[0].className = 'play';
        playAgain();
        startGame();
    });
    
}

// Function to call to get for computer choice
function computeChoice(cChoice) {

    console.log('This is the choice before ' + cChoice);
    var cSect = document.getElementById('compSect').querySelectorAll('.comp');
    console.log('This is the cSect Choice ' + cSect[cChoice]);
    // Sets the highlight
    cSect[cChoice].className = 'comp highlight';

    console.log('This is the new cChoice ' + cChoice);
}

function letterReturn(chosenNum) {
    switch(chosenNum) {
        case 0:
            return "r";           

        case 1:
            return "p";

        case 2:
            return "s";

    }
}

function whoWon(r) {
    console.log('This is the resulting' + r);
    var clickTPA = "Pick to play again!"
    switch(r) {
        //player wins
        case 'rs':
            console.log('PLAYER WINS');
            document.getElementById('message').innerHTML = "YOU WON!!! " + clickTPA;
            break;
        case 'pr':
            console.log('PLAYER WINS');
            document.getElementById('message').innerHTML = "YOU WON!!! " + clickTPA;
            break;
        case 'sp':
            console.log('PLAYER WINS');
            document.getElementById('message').innerHTML = "YOU WON!!! " + clickTPA;
            break;
        //computer wins
        case 'sr':
            console.log('COMP WINS');
            document.getElementById('message').innerHTML = "COMPUTER WON " + clickTPA;
            break;
        case 'rp':
            console.log('COMP WINS');
            document.getElementById('message').innerHTML = "COMPUTER WON " + clickTPA;
            break;
        case 'ps':
            console.log('COMP WINS');
            document.getElementById('message').innerHTML = "COMPUTER WON " + clickTPA;
            break;
        //this is a draw
        case 'pp':
            console.log('DRAWWWW');
            document.getElementById('message').innerHTML = "IT'S A DRAW " + clickTPA;
            break;
        case 'ss':
            console.log('DRAWWWW');
            document.getElementById('message').innerHTML = "IT'S A DRAW " + clickTPA;
            break;
        case 'rr':
            console.log('DRAWWWW');
            document.getElementById('message').innerHTML = "IT'S A DRAW " + clickTPA;
            break;
    }
}
function displayChoice(choice) {
    switch(choice) {
        case 'r':
            return 'rock';
        case 'p':
            return 'paper';
        case 's':
            return 'scissor';
    }
 }

 function playAgain() {
    var cSect = document.getElementById('compSect').querySelectorAll('.comp');
    for (var i = 0; i < cSect.length; i++) {
        cSect[i].className = 'comp';
      }

 }
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.