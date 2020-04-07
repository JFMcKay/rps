// Begin by prompting the user for their choice.
var playerChoice = window.prompt("Make a choice:  r = rock, p = paper, s = scissors").toLowerCase();
console.log(playerChoice);
while (!picked) {
    var picked = false;
    if (playerChoice == 'r') {
        picked = true;
    } else if (playerChoice == 's') {
        picked = true;
    } else if (playerChoice == 'p') {
        picked = true;
    } else {
        playerChoice = window.prompt("Please make a choice: r = rock, p = paper, s = scissors").toLowerCase();
    }
}
 
// Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
var compChoice = Math.floor(Math.random() * Math.floor(3));
console.log(compChoice);


// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
switch(compChoice) {
    case 0:
        compChoice = "r";
        break;
    case 1:
        compChoice = "p";
        break;
    case 2:
        compChoice = "s";
        break;
}
console.log(compChoice);

// Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//Going to concatinate the 2 and compare them in a switch statement to determine whether its a win, loss or draw
var result = playerChoice + compChoice;
document.getElementById('yourChoice').innerHTML = 'You picked ' + displayChoice(playerChoice); 
document.getElementById('compChoice').innerHTML = 'The computer picked ' + displayChoice(compChoice); 
console.log(result);
switch(result) {
    //player wins
    case 'rs':
        console.log('PLAYER WINS');
        document.getElementById('message').innerHTML = "YOU WON!!!";
        break;
    case 'pr':
        console.log('PLAYER WINS');
        document.getElementById('message').innerHTML = "YOU WON!!!";
        break;
    case 'sp':
        console.log('PLAYER WINS');
        document.getElementById('message').innerHTML = "YOU WON!!!";
        break;
    //computer wins
    case 'sr':
        console.log('COMP WINS');
        document.getElementById('message').innerHTML = "COMPUTER WON";
        break;
    case 'rp':
        console.log('COMP WINS');
        document.getElementById('message').innerHTML = "COMPUTER WON";
        break;
    case 'ps':
        console.log('COMP WINS');
        document.getElementById('message').innerHTML = "COMPUTER WON";
        break;
    //this is a draw
    case 'pp':
        console.log('DRAWWWW');
        document.getElementById('message').innerHTML = "IT'S A DRAW";
        break;
    case 'ss':
        console.log('DRAWWWW');
        document.getElementById('message').innerHTML = "IT'S A DRAW";
        break;
    case 'rr':
        console.log('DRAWWWW');
        document.getElementById('message').innerHTML = "IT'S A DRAW";
        break;
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
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.