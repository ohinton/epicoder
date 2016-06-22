function Player(name) {
  this.playerName = name;
  this.playerFocus = 100;
  this.playerTime = 90;
  this.playerMoney = 10;
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
  var time = newPlayer.playerTime;
  var hours = Math.floor(time / 60);
  var minutes = time % 60;
  $(".scoreboard-time").text(hours + " hour & " + minutes + " minutes");
  var money = newPlayer.playerMoney.toFixed(2);
  $(".scoreboard-money").text(money);
  $(".scoreboard-score").text(newPlayer.playerScore);
}

function updatePageScores (focus, time, money) {
  $(".page-focus").text(focus);
  var hours = Math.floor(time / 60);
  var minutes = time % 60;
  $(".page-time").text(hours + " hour & " + minutes);
  $(".page-money").text(money);
  var pageScore = focus + time + money * 10;
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

    updateScoreboard();

    $("#landing-page").hide();
    $("#page-10a").show();

//page 10
  $("#go-to-20a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-10a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-10a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-10a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 30;

    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-10a").hide();
    $("#page-20a").show();
    $("#scoreboard-page").show();
  });

//page 20 (branching page)
  $("#go-to-30a").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-20a").hide();
    $("#page-30a").show();
    $("#scoreboard-page").hide();

  });

  $("#go-to-30b").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-20a").hide();
    $("#page-30b").show();
    $("#scoreboard-page").hide();

  });

//page 30A
  $("#30a-go-to-40a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-30a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-30a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-30a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 40;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-30a").hide();
    $("#page-40a").show();
    $("#scoreboard-page").show();

  });

//page 30B
  $("#30b-go-to-40a").click(function(event){
    event.preventDefault();

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

    $("#page-30b").hide();
    $("#page-40a").show();
    $("#scoreboard-page").show();

  });

  //page 40 (branching page)
  $("#go-to-50a").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-40a").hide();
    $("#page-50a").show();
    $("#scoreboard-page").hide();

  });

  $("#go-to-50b").click(function(event){
    event.preventDefault();

    clearPageDisplay();

    $("#page-40a").hide();
    $("#page-50b").show();
    $("#scoreboard-page").hide();

  });

//page 50a
  $("#50a-go-to-60a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-50a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-50a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-50a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-50a").hide();
    $("#page-60a").show();
    $("#scoreboard-page").show();

  });

  //page 50b
  $("#50b-go-to-60a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-50b-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-50b-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-50b-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-50b").hide();
    $("#page-60a").show();
    $("#scoreboard-page").show();
    });

//page 60a
  $("#go-to-70a").submit(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-60a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-60a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-60a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-60a").hide();
    $("#page-70a").show();
    $("#scoreboard-page").show();
  });

//page 70a
  $("#go-to-finish").submit(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-70a-form input:radio[name=focus]:checked").val());
    var time = parseInt($("#page-70a-form input:radio[name=time]:checked").val());
    var money = parseInt($("#page-70a-form input:radio[name=money]:checked").val());

    updatePageScores(focus, time, money);

    newPlayer.playerTime -= 10;
    newPlayer.calculateFocus(focus);
    newPlayer.calculateTime(time);
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-70a").hide();
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
