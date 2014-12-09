var userChoice;
var score = [0, 0, 0];

window.onload = function() {
  var startButton = document.getElementById("startButton");
  var resetButton = document.getElementById("resetButton");

  var userScoreCell = document.getElementById("userScoreCell");
  var tieScoreCell = document.getElementById("tieScoreCell");
  var cpuScoreCell = document.getElementById("cpuScoreCell");
}

var displayStartButton = function() {
  startButton.style.display = "inline";
}
var hideStartButton = function() {
  startButton.style.display = "none";
}

/*
* Set the user's choice when they click on a button
**/
function userPicksRock()
{
  userChoice = 0;
  console.log("user selected rock");
  //displayStartButton();
  updateUserImage();
  runGame();
}
function userPicksScissors()
{
  userChoice = 1;
  console.log("user selected scissors");
  //displayStartButton();
  updateUserImage();
  runGame();
}
function userPicksPaper()
{
  userChoice = 2;
  console.log("user selected paper");
  //displayStartButton();
  updateUserImage();
  runGame();
}

function runGame()
{
  var result = getWinner(userChoice, getCpuChoice());
  console.log("result is: " + result);

  score[result] ++;

  updateScoreSheet();
}

function resetGame()
{
  score = [0, 0, 0];
  userChoice = -1;
  hideStartButton();
  updateScoreSheet();
  updateUserImage();
  updateCpuImage(-1);
}

function updateScoreSheet()
{
  userScoreCell.innerHTML = score[0];
  cpuScoreCell.innerHTML = score [1];
  tieScoreCell.innerHTML = score [2];
}

function updateUserZone()
{
  if (userChoice == 0)
  {
    userzone.style.innerHTML = "ROCK";
  }
  else if (userChoice == 1)
  {
    userzone.style.innerHTML = "SCISSORS";
  }
  else
  {
    userzone.style.innerHTML = "PAPER";
  }
}

function updateUserImage()
{
  var userImage = document.getElementById("userChoiceImage");

  if (userChoice == 0)
  {
    userImage.src="img/rock.jpg";
  }
  else if (userChoice == 1)
  {
    userImage.src="img/scissors.jpg";
  }
  else if (userChoice == -1)
  {
    userImage.src="";
  }
  else
  {
    userImage.src="img/paper.jpg";
  }

  userImage.style.height = "200px";
  userImage.style.width = "200px";
}

function updateCpuImage(cpuChoice)
{
  var cpuImage = document.getElementById("cpuChoiceImage");

  if (cpuChoice == 0)
  {
    cpuImage.src="img/rock.jpg";
  }
  else if (cpuChoice == 1)
  {
    cpuImage.src="img/scissors.jpg";
  }
  else if (cpuChoice == -1)
  {
    cpuImage.src="";
  }
  else
  {
    cpuImage.src="img/paper.jpg";
  }

  cpuImage.style.height = "200px";
  cpuImage.style.width = "200px";
}

/*
* Return either 0, 1, or 2
*/
function getCpuChoice()
{
  var randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    console.log("cpu selected rock");
  }
  else if (randomNum == 1)
  {
    console.log("cpu selected scissors");
  }
  else
  {
    console.log("cpu selected paper");
  }

  updateCpuImage(randomNum);

  return randomNum;
}

/* determine winner of rock paper scissors
* 
* userChoice and cpuChoice should be:
* 0 - rock
* 1 - scissors
* 2 - paper
* return: 0 if user wins, 1 if cpu wins, 2 if tie
* results in 3 if bad input
**/
function getWinner(userChoice, cpuChoice)
{
  var result;

  if (userChoice == cpuChoice) 
  {
    result = 2;
  }
  else if (userChoice == 0)
  {
    if (cpuChoice == 1)
    {
      result = 0;
    }
    else if (cpuChoice == 2)
    {
      result = 1;
    }
  }
  else if (userChoice == 1)
  {
    if (cpuChoice == 0)
    {
      result = 1;
    }
    else if (cpuChoice == 2)
    {
      result = 0;
    }
  }
  else if (userChoice == 2)
  {
    if (cpuChoice == 0)
    {
      result = 0;
    }
    else if (cpuChoice == 1)
    {
      result = 2;
    }
  }
  else
  {
    result = 3;
  }

  return result;
}