var mutants = [
    "WOLVERINE",
    "PROFESSOR X",
    "IRONMAN",
    "COLOSSUS",
    "SPIDERMAN",
    "BLACK WIDOW",
    "CAPTAIN AMERICA",
    "WONDER WOMAN",
    "SUPERMAN",]

var wins = 0;
var losses = 0;
var lettersInWord = [];
var wordArray = [];
var chosenWord = "";
var goodGuess = [];
var wordLength = 0;
var guessesLeft = 6;

function startGame() {
    chosenWord = mutants[Math.floor(Math.random() * mutants.length) + 1];
    lettersInWord = chosenWord.split("");
    wordLength = lettersInWord.length;

    guessesLeft = 6;

    for (var i = 0; i < wordLength; i++) {
        goodGuess.push("_");
    }
    document.getElementById("chosenWord").innerHTML = goodGuess.join(" ");
}

function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i = 0; i < wordLength; i++) {
        if (chosenWord[i] === letter) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < wordLength; i++) {
            if (chosenWord[i] === letter) {
                goodGuess[i] = letter;
            }
        }
    } else {
        wordArray.push(letter);
        guessesLeft--;
    }
}

function gameComplete() {
    console.log("Wins: " + wins)
    console.log("Number of Guesses Left: " + guessesLeft)

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("userGuess").innerHTML = goodGuess.join(" ");
    document.getElementById("userGuess").innerHTML = wordArray.join(" ");


    if (lettersInWord.toString() === goodGuess.toString()) {
        wins++;
        alert("Winner! You are a SuperHero!");

        document.getElementById("wins").innerHTML = "wins: " + wins;

        startGame();
    }
    else if (guessesLeft === 0); {
        alert("Sorry Hero. The Bad Guys Win Today.");
        losses++;

        document.getElementById("losses").innerHTML = "Losses: " + losses;

        startGame();
    }
}

document.getElementById("chosenWord").innerHTML = goodGuess.join(" ");
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Number of Guesses Left: " + guessesLeft;


document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toUpperCase();
    checkLetters(guess);
    gameComplete();

    console.log(guess);
}

startGame();