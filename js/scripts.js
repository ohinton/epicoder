var newPlayer = {};
var score = 0;

function Player() {
  this.playerFocus = 0;
  this.playerTime = 0;
  this.playerMoney = 0;
  this.playerScore = 0;
}

Player.prototype.calculateFocus = function () {
  return this.playerFocus += this.playerFocus;
}

Player.prototype.calculateTime = function () {
  return this.playerTime += this.playerTime;
}

Player.prototype.calculateMoney = function () {
  return this.playerMoney += this.playerMoney;
}

Player.prototype.calculateScore = function () {
  return this.playerScore = this.playerFocus + this.playerMoney + this.playerTime;
}

function updateScoreboard (focus, time, money, score) {
  $(".show-focus").text(newPlayer.playerFocus);
  $(".show-time").text(newPlayer.playerTime);
  $(".show-money").text(newPlayer.playerMoney);
  $(".show-score").text(newPlayer.playerScore);
}


$(document).ready(function() {

  // we may need a start button?

  //initializes our new player
  newPlayer = new Player();
  // displays starting scores (should be zeros)
  updateScoreboard();

  $("#button-1A").click(function(event){

    // collect adjustments to our variables
    var focus = $("input:radio[name=focus]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var money = $("input:radio[name=money]:checked").val();

    newPlayer.calculateFocus();
    newPlayer.calculateTime();
    newPlayer.calculateMoney();
    newPlayer.calculateScore();

    //display updated scores depending on choices

    updateScoreboard();


  });

});
