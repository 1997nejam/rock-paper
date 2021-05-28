var options = ["rock", "paper", "scissors"];
var userChoice = "rock";
msg = "Boss";
function playerChoice() {
  if (document.getElementById("rock").checked) {
    userChoice = "rock";
  } else if (document.getElementById("paper").checked) {
    userChoice = "paper";
  } else {
    userChoice = "scissors";
  }
}
function play() {
  playerChoice();
  if (userChoice != null) {
    let s = Math.floor(Math.random() * 3);
    let machineChoice = options[s];
    //
    //
    if (machineChoice == userChoice) {
      return (document.getElementById("result").innerHTML =
        "It is a match, play again. Machine chose " + machineChoice + ".");
    } else if (
      (userChoice == "paper" && machineChoice == "rock") ||
      (userChoice == "rock" && machineChoice == "scissors") ||
      (userChoice == "scissors" && machineChoice == "paper")
    ) {
      return (document.getElementById("result").innerHTML =
        "You win! Yay. Machine chose " + machineChoice + ".");
    } else {
      return (document.getElementById("result").innerHTML =
        "You lost! Ops. Machine chose " + machineChoice + ".");
    }
  } else {
    return (document.getElementById("result").innerHTML =
      "Enter a valid value");
  }
}
