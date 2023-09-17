let number = 0;
let myPoint = 0;
let computerPoint = 0;
let count = 0;

//This function determines the computer randomly picks the computer choice in the game 
function  rockPaperScissors() {
  number = Math.random();
  if (number > 0 && number <= 1/3) {
  // Statements to be executed if condition1 is True
  document.getElementById("result").innerHTML = "Computer picked rock !";
} else if (number > 1/3 && number <= 2/3) {
  // Statements to be executed if condition1 is false and condition2 is true
  document.getElementById("result").innerHTML = "Computer picked paper !";
} else {
  // Statements to be executed if condition1 and condition2 are false
  document.getElementById("result").innerHTML = "Computer picked Scissors !";
  }
}
//rockPaperScissors();

//This function keeps track is of the numbers plays in the game 
function numberOfClicks() {
 count ++;
 document.getElementById('clicks').innerHTML= count;
/* if (count === 10){
   document.getElementById('whoWon').innerHTML = 'Congratulations You Won !'
 }*/
}
//numberOfClicks();

function resetCount(){
  count = 0;
  document.getElementById('clicks').innerHTML = count;
  myPoint = 0;
  document.getElementById('myStats').innerHTML = myPoint;
  computerPoint = 0; document.getElementById('computerStats').innerHTML = computerPoint;
  document.getElementById('myScore').innerHTML = 'Your choice';
  document.getElementById('result').innerHTML = 'Computer choice';
  document.getElementById('whoWon').innerHTML = 'Who wins'
}
//resetCount();

//This function is called when you click the rock button 
function iRock() {
  document.getElementById('myScore').innerHTML = 'You picked rock !';
  if (number > 0 && number <= 1/3) {
  document.getElementById('whoWon').innerHTML = 'It\'s a tie !'; 
  }  else if (number > 1/3 && number <= 2/3)  {
    document.getElementById('whoWon').innerHTML = 'You lose !';
    computerPoint++;       document.getElementById('computerStats').innerHTML = computerPoint; 
  } else {
    document.getElementById('whoWon').innerHTML = 'You win!'; 
    myPoint++;  
    document.getElementById('myStats').innerHTML = myPoint;
  }
}
//iRock();

 //this function is called you click the paper button 
function iPaper() {
  document.getElementById('myScore').innerHTML = 'You picked paper !'
  if (number > 0 && number <= 1/3) {
  document.getElementById('whoWon').innerHTML = 'You win !';
  myPoint++;  
    document.getElementById('myStats').innerHTML = myPoint; 
  }  else if (number > 1/3 && number <= 2/3)  {
    document.getElementById('whoWon').innerHTML = 'It\'s tie !';
  } else {
    document.getElementById('whoWon').innerHTML = 'You lose!'; 
    computerPoint++;       document.getElementById('computerStats').innerHTML = computerPoint;  
  }
}
//iPaper();

//this function is called when you click the scissors button 
function iScissors() {
  document.getElementById('myScore').innerHTML = 'You picked Scissors !';
  if (number > 0 && number <= 1/3) {
  document.getElementById('whoWon').innerHTML = 'You lose !';
  computerPoint++;         document.getElementById('computerStats').innerHTML = computerPoint; 
  }  else if (number > 1/3 && number <= 2/3)  {
    document.getElementById('whoWon').innerHTML = 'You win !';
    myPoint++;  
    document.getElementById('myStats').innerHTML = myPoint; 
  } else {
    document.getElementById('whoWon').innerHTML = 'It\'s a tie !';   
  }
}
//iScissors();
