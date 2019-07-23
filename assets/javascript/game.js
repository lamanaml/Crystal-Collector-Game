  $(document).ready(function() {
var buttonOptions = [10, 5, 3, 7];
var counter = 0
var wins = 0
var losses = 0
var userTotal = 0
var startOfGame = false
var btnId = ""


//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
var crystalValue = (Math.floor(Math.random() * 100)); 
$("#crystal-Value").text(crystalValue);

//show user total
$("#user-Total").html(userTotal);

//generate a random number for buttons
for (var i = 0; i < buttonOptions.length; i++) {
   buttonOptions = (Math.floor(Math.random() * 10));
   
   

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    $("#btnId").attr("dataBtnId", buttonOptions[i]);
   
 // Your game will hide this amount until the player clicks a crystal.


//When they do click one, update the player's score counter.
 
 $(".btn").on("click", function() {
    var btnId = $(this).attr("dataBtnId");
    counter+= buttonOptions;
    $("#user-Total").html(counter) 
  
// All of the same game win-lose logic applies. So the rest remains unchanged.
 
    
//The player wins if their total score matches the random number from the beginning of the game.
if (counter === crystalValue) {
      wins++
      $("#your-Wins").html(wins) 
    }
   
//The player loses if their score goes above the random number.
else if (counter >= crystalValue) {
    losses++
    $("#your-Losses").html(losses) 
      
    }

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

});   
  
 }; 
})


   