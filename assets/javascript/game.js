  $(document).ready(function() {

    var buttonOptions = [10, 5, 3, 7];
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var userTotal = 0;

//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
    var randomNumber = (Math.floor(20 + Math.random() * 100)); 
    $("#crystal-Value").text(randomNumber);

    function startGame() {
        counter = 0;
        userTotal = 0
        crystalValue = randomNumber
    }

//show user total
    $("#user-Total").html(userTotal);

    var randomButton = function(ranButton) {
        for (var i = 0; i < buttonOptions.length; i++) {
            buttonOptions = (1 + Math.floor(Math.random() * 12));
            };
            console.log(randomButton)
    };
   
 //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//btnId.attr("#id", buttonOptions[i]);  
//$("#btnId").attr("#id", buttonOptions[i]);
   
 // Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.
    btn1.value = ranButton();
    btn2.value = ranButton();
    btn3.value = ranButton();
    btn4.value = ranButton();

    $(".btn").on("click", function() {
        var btnId = $(this).attr("#Id");
        counter+= buttonOptions;
        $("#user-Total").html(counter) 
    });
    
// All of the same game win-lose logic applies. So the rest remains unchanged.
     
//The player wins if their total score matches the random number from the beginning of the game.
    if (counter === crystalValue) {
        wins++
        $("#your-Wins").html(wins) 
        startOfGame = false
        }
    
//The player loses if their score goes above the random number.
    else if (counter >= crystalValue) {
        losses++
        $("#your-Losses").html(losses)
        startOfGame = false 
        }

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


 //  startGame();
  });


   