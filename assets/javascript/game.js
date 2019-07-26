  $(document).ready(function() {
      
    var buttonOptions = []
    var crystalArray = []
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var userTotal = 0;
    var numbertoGuess = 0
    var total = 0
    //var sum = 0
    

//There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
var startGame = function(){
    numbertoGuess = (Math.floor(20 + Math.random() * 100)); 
    $("#crystal-Value").text(numbertoGuess);
    $("#user-Total").html(userTotal);
    

for (var i = 0; i < 4; i++) {
    buttonRan = (1 + Math.floor(Math.random() * 12));  
    buttonOptions.push(buttonRan)
 };

  
 //When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

 

    $("#btn1").click(function(){
    counter = counter + buttonOptions[0] 
    //sum = crystalArray[crystalArray.length - 1]
    crystalArray.push(counter)
    winner()
    console.log(buttonOptions[0]) 
    console.log("new total: ", counter) 
    $("#user-Total").html(counter)     
    })


    $("#btn2").click(function(){
    console.log(buttonOptions[1])
    counter = counter + buttonOptions[1]
    crystalArray.push(counter) 
    winner()
    console.log("new total: ", counter)  
    $("#user-Total").html(counter) 
    })

    $("#btn3").click(function(){
    counter = counter +buttonOptions[2] 
    crystalArray.push(counter)
    winner()
    console.log(buttonOptions[2])
    console.log("new total: ", counter)  
    $("#user-Total").html(counter)
    })

    $("#btn4").click(function(){
    counter = counter +buttonOptions[3] 
    crystalArray.push(counter)
    winner()
    console.log(buttonOptions[3])
    console.log("new total: ", counter)  
    $("#user-Total").html(counter)
    })
    };


 // Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

    
// All of the same game win-lose logic applies. So the rest remains unchanged.
     
//The player wins if their total score matches the random number from the beginning of the game.
console.log(numbertoGuess)

// function sum(){
         
//  if (crystalArray.length !== 0){ 
//     for(var i =0 ; i < crystalArray.length ; i++){  
//      var total = total + 5//(crystalArray[i]) 
//  }              
// }
// } 

// sum()


// function sumArray(crystalArray){
     
// 	for(var j = 0; j < crystalArray.length ; j++){
// 			sum += crystalArray[j];
// 	}
//     return sum;
// }
// sumArray(crystalArray)


// for (var i = 0; i < crystalArray.length; i++) {
//     (total) = total + crystalArray[i] ;
//     console.log(crystalArray[i])
// }
   //console.log(total)

  
  // console.log(sum)
  function winner(){
      console.log("winner")
    if (counter === numbertoGuess) {
        console.log(numbertoGuess)
        alert("You Won")
        wins++
        $("#your-Wins").html(wins)
       // startGame();
        counter = 0 
    } 
    
//The player loses if their score goes above the random number.
    else if (counter >= numbertoGuess) {
        alert("You Lost")
        losses++
        $("#your-Losses").html(losses)
      //  startGame(); 
        counter = 0 
       }
       }

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
startGame()
  });