var newPlayer = {};

function Player(name) {
  this.playerName = name;
  this.playerFocus = 0;
  this.playerTime = 100;
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
    var focus = parseInt($("#page-1a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-1a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-1a-form input:radio[name=money]:checked").val());
    //display scores from this page

    updatePageScores(focus, time, money);
    //calculate new player scores for focus, time, money and total score

    newPlayer.playerTime -= 30;
    console.log(newPlayer.playerTime);

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    console.log(newPlayer.playerTime);

    updateScoreboard();

    $("#page-1a").hide();
    $("#page-2a").show();
    $("#scoreboard-page").show();
  });

//page 2 (branching page)
  $("#go-to-3a").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-2a").hide();
    $("#page-3a").show();
    $("#scoreboard-page").hide();

  });

  $("#go-to-3b").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-2a").hide();
    $("#page-3b").show();
    $("#scoreboard-page").hide();

  });

//page 3A
  $("#3a-go-to-4a").submit(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-3a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-3a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-3a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 40;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-3a").hide();
    $("#page-4a").show();
    $("#scoreboard-page").show();

  });

//page 3B
  $("#3b-go-to-4a").submit(function(event){
    event.preventDefault();

    // collect adjustments to our variables
    var focus = parseInt($("#page-3b-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-3b-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-3b-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 40;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-3b").hide();
    $("#page-4a").show();
    $("#scoreboard-page").show();

  });

  //page 4 (branching page)
  $("#go-to-5a").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-4a").hide();
    $("#page-5a").show();
    $("#scoreboard-page").hide();

  });

  $("#go-to-5b").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-4a").hide();
    $("#page-5b").show();
    $("#scoreboard-page").hide();

  });

//page 5a
  $("#5a-go-to-6a").submit(function(event){
    event.preventDefault();

    // collect adjustments to our variables
    var focus = parseInt($("#page-5a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-5a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-5a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-5a").hide();
    $("#page-6a").show();
    $("#scoreboard-page").show();

  });

  //page 5b
  $("#5b-go-to-6a").submit(function(event){
    event.preventDefault();
    // collect adjustments to our variables
    var focus = parseInt($("#page-5b-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-5b-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-5b-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-5b").hide();
    $("#page-6a").show();
    $("#scoreboard-page").show();
    });

//page 6a
  $("#go-to-7a").submit(function(event){
    event.preventDefault();

    // collect adjustments to our variables
    var focus = parseInt($("#page-6a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-6a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-6a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-6a").hide();
    $("#page-7a").show();
    $("#scoreboard-page").show();
  });

//page 7a
  $("#go-to-finish").submit(function(event){
    event.preventDefault();

    // collect adjustments to our variables
    var focus = parseInt($("#page-7a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-7a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-7a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-7a").hide();
    $("#page-final").show();
    $("#scoreboard-page").show();

    if (newPlayer.playerScore < 101) {
      $("#low-score").show();
    } else if (newPlayer.playerScore < 201) {
      $("#medium-score").show();
    } else {
      $("#high-score").show();
    }

  });

  });

});
