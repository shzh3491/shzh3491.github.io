/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");

let score = 20; // GLOBAL variable (accessible by all functions)
let highscore = 0; // GLOBAL variable
let scoreObj = document.querySelector(".score");

function check() {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === randNum) {
    //alert('win')
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum;
    //highscore check
    if (score > highscore) {
      highscore = score; // update highscore with current score
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < randNum) {
    //alert('too low')
    messageObj.textContent = "Too low.";
    score -= 1;
    scoreObj.textContent = score;
  } else if (guess > randNum) {
    //alert('too high')
    messageObj.textContent = "Too high.";
    score -= 1;
    scoreObj.textContent = score;
  }
}

function again() {
  alert("start over");
  

  //recalculate randNum
  randNum = getRandomIntInclusive(1, 20);
  //background back to black
  document.body.style.backgroundColor = "black";
  //change number box to ?
  document.querySelector(".number").textContent = '?';
  //change score variable to 20, score message to score
   document.querySelector(".score").textContent = 20;
   score = 20
  //message "start guessing"
  messageObj.textContent = "Start guessing";
  //change guess box back to 0
  document.querySelector(".guess").value = '0';
}

//add event listener for again button
