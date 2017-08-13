var targetNumber = Math.floor(Math.random() *120 +19);

$("#number-to-guess").text(targetNumber);

var counter = 0;

 
var wins = 0;
var losses = 0;
var crystalOne = Math.floor(Math.random()* 12+1);
var crystalTwo = Math.floor(Math.random()* 12+1);
var crystalThree = Math.floor(Math.random()* 12+1);
var crystalFour = Math.floor(Math.random()* 12+1);

 function startGame() {
   
 		
}
	$("#crystal1 img").on("click", function() {
		counter += crystalOne;
		$('#totalScore').html("New score: " + counter);
		conditions();
	});
	$("#crystal2 img").on("click", function() {
		counter += crystalTwo;
		$('#totalScore').html("New score: " + counter);
		conditions();
	});
	$("#crystal3 img").on("click", function() {
		counter += crystalThree;
		$('#totalScore').html("New score: " + counter);
		conditions();
	});
	$("#crystal4 img").on("click", function() {
		counter += crystalFour;
		$('#totalScore').html("New score: " + counter);
		conditions();
	});
	
function resetGame() {
	counter = 0;
	crystalOne = Math.floor(Math.random()* 12+1);
	crystalTwo = Math.floor(Math.random()* 12+1);
	crystalThree = Math.floor(Math.random()* 12+1);
	crystalFour = Math.floor(Math.random()* 12+1);
    targetNumber = Math.floor(Math.random() *120 +19);
	$("#number-to-guess").text(targetNumber);
	$('#totalScore').html("New score: ");
	
}
   

	
function conditions(){	
	
    if (counter === targetNumber) {
	wins++;
    $('#wins').html(wins);
	console.log(counter);
	console.log("Winner!");
	resetGame();
	}
    if (counter > targetNumber) {
	losses++;
    $('#losses').html(losses);
	console.log(counter);
	console.log("Loser!");
	resetGame();	  
	}
}
	
