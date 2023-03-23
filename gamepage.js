// random value generated
 var y = Math.floor(Math.random()*10+1); 
 playername = localStorage.getItem("player_name");
// counting the number of guesses
var guess = 1;
// made for correct Guess

  
// function for number guessed by user     
function submit(){
    var x = document.getElementById("guessField").value ;
    if(x==y){
        alert("congratulations"+playername+" you guessed it right!"+guess+" guess");
        guess = 1;
    }
    else if(x>y){
        guess++;
        alert("oops sorry! Try a smaller number");
    }else{
        guess++;
        alert("oops sorry! Try a greater number");
    }
}
function playAgain(){
    y = Math.floor(Math.random()*10+1);    
}