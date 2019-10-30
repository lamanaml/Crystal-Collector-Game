  $(document).ready(function() {

  //assign variables 
  var numbertoGuess = "";  
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var buttonOptions = []
  var crystalArray = []

    var userTotal = 0;
    
 
    
//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
function resetAll() {
  crystalArray;
  buttonOptions;
  
}
for (var i = 0; i < 4; i++) {
    
    buttonRan = (1 + Math.floor(Math.random() * 12));  
    buttonOptions.push(buttonRan)
 };

var startGame = function(){
    numbertoGuess = (Math.floor(20 + Math.random() * 100)); 
    $("#crystal-Value").text(numbertoGuess);
    $("#user-Total").html(userTotal);
    


 //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

    $("#btn1").click(function(){
    counter += buttonOptions[0]; 
    console.log("btn0: " + buttonOptions[0]);
    crystalArray.push(counter);
    winner();
    $("#user-Total").html(counter) ; 
    })

    $("#btn2").click(function(){
    counter += buttonOptions[1];
     console.log("btn1: " +  buttonOptions[1]);
    crystalArray.push(counter) ;
    winner() ;
    $("#user-Total").html(counter); 
    });

    $("#btn3").click(function(){
    counter += buttonOptions[2];
     console.log("btn2: " + buttonOptions[2]);
    crystalArray.push(counter);
    winner();
    $("#user-Total").html(counter);
    });

    $("#btn4").click(function(){
    counter += buttonOptions[3] ;
     console.log("btn3: " + buttonOptions[3]);
    crystalArray.push(counter);
    winner();
    $("#user-Total").html(counter);
  
    });
    };


 // Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

    
// All of the same game win-lose logic applies. So the rest remains unchanged.
     
//The player wins if their total score matches the random number from the beginning of the game.


  function winner(){
    if (counter === numbertoGuess) {
      resetAll();
        alert("You Won");
        wins++;
        $("#your-Wins").html(wins);
        counter = 0;
         
        
     } 
    
//The player loses if their score goes above the random number.
    else if (counter >= numbertoGuess) {
       resetAll();
        alert("You Lost");
        losses++;
        $("#your-Losses").html(losses);
        counter = 0;
         
       };
       }

//The game restarts whenever the player wins or loses.
startGame()
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

  });