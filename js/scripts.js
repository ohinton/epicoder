var newPlayer = {};
var score = 0;
var focus = 0;
var time = 0;
var money = 0;

function Player() {
  this.playerFocus = 0;
  this.playerTime = 0;
  this.playerMoney = 0;
  this.playerScore = 0;
}

Player.prototype.calculateFocus = function (focus) {
  return this.playerFocus += focus;
}

Player.prototype.calculateTime = function (time) {
  return this.playerTime += time;
}

Player.prototype.calculateMoney = function (money) {
  return this.playerMoney += money;
}

Player.prototype.calculateScore = function () {
  return this.playerScore = this.playerFocus + this.playerMoney + this.playerTime;
}

// updateScoreboard
function updateScoreboard (focus, time, money, score) {
  $(".scoreboard-focus").text(newPlayer.playerFocus);
  $(".scoreboard-time").text(newPlayer.playerTime);
  $(".scoreboard-money").text(newPlayer.playerMoney);
  $(".scoreboard-score").text(newPlayer.playerScore);
}


$(document).ready(function() {
  // we may need a start button?

  //initializes our new player
  newPlayer = new Player();
  console.log(newPlayer);
  // displays starting scores (should be zeros)
  updateScoreboard();
  console.log(".scoreboard-score");

  $("#button-1A").click(function(event){
    event.preventDefault();
    // collect adjustments to our variables
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var money = parseInt($("input:radio[name=money]:checked").val());

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
     console.log(newPlayer);
    //display updated scores depending on choices

    updateScoreboard();


  });

});
