function Player(name) {
  this.playerName = name;
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
function updateScoreboard (name, focus, time, money, score) {
  $(".user-name").text(newPlayer.playerName);
  $(".scoreboard-focus").text(newPlayer.playerFocus);
  $(".scoreboard-time").text(newPlayer.playerTime);
  $(".scoreboard-money").text(newPlayer.playerMoney);
  $(".scoreboard-score").text(newPlayer.playerScore);
}

function updatePageScores (focus, time, money, pageScore) {
  $(".page-focus").text(focus);
  $(".page-time").text(time);
  $(".page-money").text(money);
  $(".page-score").text(pageScore);
}

var clearPageValues = function (){
  $(".page-focus").val("");
  $(".page-time").val("");
  $(".page-money").val("");
  $(".page-score").val("");
}




$(document).ready(function() {

//landing page
  $("form#get-user-name").submit(function(event){
    event.preventDefault();

    var name = $("#new-user-name").val();
    newPlayer = new Player(name);
    updateScoreboard();

    $(".landing-page").hide();
    $(".page-1").show();
  });

//page 1
  $("#button-1A").click(function(event){
    event.preventDefault();
    // collect adjustments to our variables
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var money = parseInt($("input:radio[name=money]:checked").val());
    var pageScore = focus + time + money;

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    console.log(newPlayer);
    //display updated scores depending on choices
    updateScoreboard();
    //display new values for page 1-A player choices
    updatePageScores();

    $(".page-1").hide();
    $(".page-2").show();

  });

//page 2 (branching page)
  $("#go-to-3A").click(function(event){
    event.preventDefault();

    clearPageValues();

    $(".page-2").hide();
    $(".page-3A").show();

  });

  $("#go-to-3B").click(function(event){
    event.preventDefault();

    clearPageValues();

    $(".page-2").hide();
    $(".page-3B").show();

  });

//page 3A
  $("#button-3A").click(function(event){
    event.preventDefault();

    clearPageValues();
    // collect adjustments to our variables
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var money = parseInt($("input:radio[name=money]:checked").val());
    var pageScore = focus + time + money;

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    console.log(newPlayer);
    //display updated scores depending on choices
    updateScoreboard();
    //display new values for page 1-A player choices
    updatePageScores();

    $(".page-3A").hide();
    $(".page-4A").show();

  });

//page 3B
  $("#button-3B").click(function(event){
    event.preventDefault();

    clearPageValues();
    // collect adjustments to our variables
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var money = parseInt($("input:radio[name=money]:checked").val());
    var pageScore = focus + time + money;

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    console.log(newPlayer);
    //display updated scores depending on choices
    updateScoreboard();
    //display new values for page 3-B player choices
    updatePageScores();

    $(".page-3B").hide();
    $(".page-4B").show();

  });
});
