var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[2]);

// fight function, now with paramenter for enemy's name
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
    if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    //if player choses to fight, then fight
    //if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");

        //aware player money for winning
        playerMoney - playerMoney + 20;

        //leave while loop since enemy is dead
        break;
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //chek player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //ends the loop once player has died
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }   
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
  }

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};
// function to end the entire game
var endGame = function () {
    // if player is alive, they win
    if (playerHealth > 0) {
        window.alert("Great job! You survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // as player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")
        if (playAgainConfirm) {
        // restart the game
        startGame();
        }
        else {
            window.alert("Thank you for playing Robot Gladiators! Come  back soon!");
        }
}; 
 startGame();   
