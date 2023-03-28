// PLAN:
// computer chooses a 5-letter word
// set up game board with 6 guesses
// user guesses a word
// evaluate the guess
// green = right letter right place
// yellow = right letter wrong place 
// grey = wrong letter
var colors = require('colors');

var theAnswer
var userGuess

function chooseWord() {
  var possibleChoices = ["match", "drift", "lover", "screw", "paper", "flash", "prove", "sugar", "house", "torch", "judge", "ready", "grind", "ankle", "class", "curve", "cycle"]
  
  theAnswer = possibleChoices[Math.floor(Math.random()*possibleChoices.length)]
  // console.log(possibleChoices.length)
}


function makeGameBoard(){
  var gameBoard = [
    ["_","_","_","_","_"],
    ["_","_","_","_","_"],
    ["_","_","_","_","_"],
    ["_","_","_","_","_"],
    ["_","_","_","_","_"],
    ["_","_","_","_","_"]]

  for (let i in gameBoard){
    console.log(gameBoard[i].join(""))
  }
}


function guessWord(){
  userGuess = prompt("Guess a 5-letter word")
  // count the letters in userGuess
  // if lettercount is 5, then continue
  // if not, ask again.
  var letterCount = userGuess.length
  while (letterCount != 5 || !/^[a-zA-Z]+$/.test(userGuess)) {
    userGuess = prompt("That's invalid, guess a 5-letter word")
    letterCount = userGuess.length
  }  
}

function evalGuess(){
  // for each letter in userGuess,
  // if the letter is not in theAnswer, make it grey
  // if the letter in the same index in theAnswer is the same letter, then make it green and check off that you've checked this index
  // if the letter is in the answer but not in the same index, then make it yellow
  for (let i in userGuess){
    for (let j in theAnswer) {
      if (userGuess[i] == theAnswer[j]){
        userGuess[i] = userGuess[i].yellow
      }
    }
  }
  console.log(userGuess)
}


function playWordle(){
  chooseWord()
  console.log(theAnswer)
  makeGameBoard()
  guessWord()
  evalGuess()
}

playWordle()

// console.log(''.)