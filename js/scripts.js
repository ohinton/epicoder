var newPlayer = {};

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

function resetQuizValues (focus, time, money, pageScore) {
  var focus = 0;
  var time = 0;
  var money = 0;
  var pageScore =0;
}

function updatePageScores (focus, time, money) {
  $(".page-focus").text(focus);
  $(".page-time").text(time);
  $(".page-money").text(money);
  var pageScore = focus + time + money;
  $(".page-score").text(pageScore);
}

function clearPageDisplay () {
  $(".page-focus").text("");
  $(".page-time").text("");
  $(".page-money").text("");
  $(".page-score").text("");
}

$(document).ready(function() {

//landing page
  $("form#get-user-name").submit(function(event){
    event.preventDefault();

    var name = $("#new-user-name").val();
    newPlayer = new Player(name);
    console.log(newPlayer);
    updateScoreboard();

    $("#landing-page").hide();
    $("#page-1a").show();


//page 1
  $("#go-to-2a").click(function(event){
    event.preventDefault();
    // collect adjustments to our variables
    var focus = parseInt($("#page-1-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-1-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-1-form input:radio[name=money]:checked").val());
    //display scores from this page
    updatePageScores(focus, time, money);
    //calculate new player scores for focus, time, money and total score
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-1a").hide();
    $("#page-2a").show();
  });

//page 2 (branching page)
  $("#go-to-3a").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-2a").hide();
    $("#page-3a").show();

  });

  $("#go-to-3b").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-2a").hide();
    $("#page-3b").show();

  });

//page 3A
  $("#3a-go-to-4a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-3a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-3a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-3a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-3a").hide();
    $("#page-4a").show();

  });

//page 3B
  $("#3b-go-to-4a").click(function(event){
    event.preventDefault();

    // collect adjustments to our variables
    var focus = parseInt($("input:radio[name=focus]:checked").val());
    var time = parseInt($("input:radio[name=time]:checked").val());
    var money = parseInt($("input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-3b").hide();
    $("#page-4a").show();

  });

  //page 4 (branching page)
  $("#go-to-5a").click(function(event){
    event.preventDefault();

    clearPageDisplay();
    updatePageScores(focus, time, money);

    $("#page-4a").hide();
    $("#page-5a").show();

  });

  $("#go-to-5b").click(function(event){
    event.preventDefault();

    clearPageDisplay();
    updatePageScores();

    $("#page-4a").hide();
    $("#page-5b").show();

  });




  

  });

});
