var userChoice = prompt("What letter am I thinking of?").toUpperCase();
var Player_Score = 0;
var Comp_Score = 0;

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "k".toUpperCase();
} else if(computerChoice <= 0.67) {
    computerChoice = "b".toUpperCase();
} else {
    computerChoice = "z".toUpperCase();
} 

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
      alert("Comp choice: " + computerChoice); 
      document.write("<h2>GREAT JOB! CORRECT!!!!!!</h2>");
      userChoice = prompt("Choose another letter").toUpperCase();

        }
        else if (choice1 === "b") {
            if (choice2 === "k") {
              alert("Comp choice: " + computerChoice); 
              document.write("<h2>Smart Human!!!!<h2>");
              Player_Score +=1;
            }
            else {
              alert("Comp choice: " + computerChoice); 
              document.write("<h2>Keep trying! Almost got it</h2>");
              Comp_Score +=1;
            }
        } 

        else if (choice1 === "z") {
            if (choice2 === "b") {
              alert("Comp choice: " + computerChoice);
              document.write("<h2>Way to go Mate!!</h2");
              Player_Score +=1;
            } 
            else {
              alert("Comp choice: " + computerChoice);
              document.write("<h2>You are horrible at this!!!</h2>");
              Comp_Score +=1;
            }
        }
        else if (choice1 === "k") {
            if (choice2 === "z") {
              alert("Comp choice: " + computerChoice);
              document.write("<h2>Loser over here!!</h2>");
              Comp_Score +=1;
            } 
            else {
              alert("Comp choice: " + computerChoice);
              document.write("<h2>GREAT JOB Dude!!!</h2>");
              Player_Score +=1;
            }
        }

    else {
    alert("Try again Smart Human!!!");
    }
};

compare(userChoice, computerChoice); 
document.write("<p>Number of Wins: " + Player_Score);
document.write("<p>Number of loses: " + Comp_Score);
document.write("<p>Letters Selected: ");
document.write("<p>Number of Guesses Left:");
