//random player 1
player1Rand = Math.round(Math.random() * (6 - 1) + 1);
document.querySelector(".img1").setAttribute("src", "./images/dice" +  player1Rand + ".png");

//random player 2
player2Rand = Math.round(Math.random() * (6 - 1) + 1);
document.querySelector(".img2").setAttribute("src", "./images/dice" +  player2Rand + ".png");


startGame();

//determines winnter
function startGame(){
    if (player1Rand > player2Rand){
        document.querySelector("h1").innerHTML = "Player 1 Wins! Reload to Reroll"
    }
    else if (player2Rand > player1Rand){
        document.querySelector("h1").innerHTML = "Player 2 Wins! Reload to Reroll"
    }
    else{
        document.querySelector("h1").innerHTML = "Tie! Reload to Reroll"
    }
}


