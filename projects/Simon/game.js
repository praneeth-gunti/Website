var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;
var keyboard = false;


$(document).keypress(function(event) {
  if (!started && event.key == "p") {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    keyboard = true;
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press any key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var rand = Math.floor(Math.random() * 4);
  var randColorChoosen = buttonColors[rand];
  gamePattern.push(randColorChoosen);

  $("#" + randColorChoosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randColorChoosen);
}

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});


$(document).on("keypress", function(event) {
  if (keyboard == true) {

    var userChosenColour;
    var key = event.key;
    switch (key) {
      case "q":
        userChosenColour = "green";
        break;
      case "w":
        userChosenColour = "red";
        break;
      case "a":
        userChosenColour = "yellow";
        break;
      case "s":
        userChosenColour = "blue";
        break;
      default:
        exit();
    }
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  }
});

function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed")
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  keyboard = false;
}
