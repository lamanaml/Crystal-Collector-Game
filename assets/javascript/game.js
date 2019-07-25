  $(document).ready(function() {
    
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
    var numbertoGuess = (Math.floor(20 + Math.random() * 100)); 
    $("#crystal-Value").text(numbertoGuess);
    $("#user-Total").html(userTotal);
    
//function generate () {
for (var i = 0; i < 4; i++) {
    buttonRan = (1 + Math.floor(Math.random() * 12));  
    };
     $(".btn").on("click", function() {
        var btnId = $(this).attr("#Id");
        counter+= buttonRan;
        $("#user-Total").html(counter) 
    });
  //  };


//   $("#btn1").click(function(){
//        $("#btn1").append("<class value="+ buttonRan+"></span>") 
//        $("#user-Total").html(counter) 
//   })
//   $("#btn2").click(function(){
//       $("#btn2").append("<class value="+ buttonRan+"></span>") 
//   })
//   $("#btn3").click(function(){
//       $("#btn3").append("<class value="+ buttonRan+"></span>") 
//   })
//   $("#btn4").click(function(){
//       $("#btn4").append("<class value="+ buttonRan+"></span>") 
//   })
   
   
 //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
   
 // Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

 
    
// All of the same game win-lose logic applies. So the rest remains unchanged.
     
//The player wins if their total score matches the random number from the beginning of the game.
    // if (counter === crystalValue) {
    //     wins++
    //     $("#your-Wins").html(wins) 
    //     startOfGame = false
    //     }
    
//The player loses if their score goes above the random number.
    // else if (counter >= crystalValue) {
    //     losses++
    //     $("#your-Losses").html(losses)
    //     startOfGame = false 
    //     }

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


 //  startGame();
  });