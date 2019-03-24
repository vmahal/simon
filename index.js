
var buttonClicked=["red","green","blue","yellow"];
var gamePattern=[];
var userClickedpattern=[];

var level = 0;
var started = false;


$(document).keypress(function(){

  if(!started){
     $("#head-title").text("Level "+ level );
     startGame();
     started=true;
  }

});

$("#str").click(function(){
  if(!started){
     $("#head-title").text("Level "+ level );
     startGame();
     started=true;
  }
});

$(".but").click(function(){

  var userClicked = $(this).attr("id");
  userClickedpattern.push(userClicked);
  animatePress(userClicked);
  playSound(userClicked);
  checkAnswer(userClickedpattern.length-1);

});


function checkAnswer(currentlevel){

  if( gamePattern[currentlevel] === userClickedpattern[currentlevel] )
  {
    console.log("Success");
    if( gamePattern.length === userClickedpattern.length){
       setTimeout(function(){startGame();},1000);
    }
  }

  else{

      var wrngaud = new Audio("sounds/wrong.mp3");
      wrngaud.play();

      $("body").addClass("error");

      setTimeout(function() { $("body").removeClass("error");} ,200);

      $("#head-title").text("Game Over. Press a key to start ");

      errorGen();

  }

}




function startGame(){

  userClickedpattern=[];
  level++;
  $("#head-title").text("Level " + level);

  var randomNum = Math.floor( Math.random() * 4 );
  var randomColor = buttonClicked[randomNum];
  gamePattern.push(randomColor);

  $("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}


function playSound(aud){

  var audio = new Audio("sounds/" + aud + ".mp3" );
  audio.play();

}


function animatePress(name){

  $("#" + name).addClass("pressed",100);

  setTimeout(function(){$("#"+name).removeClass('pressed');},100);

}


function errorGen(){

level = 0;
gamePattern = [];
started=false;

}
