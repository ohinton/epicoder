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

Player.prototype.calculateMoney = function () {
  return this.playerMoney += this.playerMoney;
}

Player.prototype.calculateTime = function () {
  return this.playerTime += this.playerTime;
}

Player.prototype.calculateScore = function () {
  return this.playerScore = this.playerFocus + this.playerMoney + this.playerTime;
}




$(document).ready(function() {

  newPlayer = new Player();

  // display scores function

  $("#button-1A").click(function(event){

    // collect adjustments to our variables
    var focus = $("input:radio[name=focus]:checked").val();
    var time = $("input:radio[name=time]:checked").val();
    var money = $("input:radio[name=money]:checked").val();

    newPlayer.calculateFocus();
    newPlayer.calculateTime();
    newPlayer.calculateMoney();
    newPlayer.calculateScore();

    //display updated scores

    


  });

});
