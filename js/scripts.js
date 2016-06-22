function Player(name) {
  this.playerName = name;
  this.playerFocus = 100;
  this.playerTime = 90;
  this.playerMoney = 10;
  this.playerScore = 0;
}

Player.prototype.calculateFocus = function (focus) {
  return this.playerFocus -= focus;
}

Player.prototype.calculateTime = function (time) {
  return this.playerTime -= time;
}

Player.prototype.calculateMoney = function (money) {
  return this.playerMoney -= money;
}

Player.prototype.calculateScore = function () {
  return this.playerScore = this.playerFocus + this.playerMoney + this.playerTime;
}

// updateScoreboard
function updateScoreboard (name, focus, time, money, score) {
  $(".user-name").text(newPlayer.playerName);
  $(".scoreboard-focus").text(newPlayer.playerFocus);
  var t = newPlayer.playerTime;
  var hours = Math.floor(t / 60);
  var minutes = t % 60;
  $(".scoreboard-time").text(hours + " hour & " + minutes + " minutes");
  var money = newPlayer.playerMoney.toFixed(2);
  $(".scoreboard-money").text("$" + money);
  $(".scoreboard-score").text(newPlayer.playerScore);
}

function updatePageDisplay (focus, time, money) {
  $(".page-focus").text(focus);
  console.log(focus);
  console.log(time);
  var hours = Math.floor(time / 60);
  var minutes = time % 60;
  $(".page-time").text(hours + " hour & " + minutes);
  console.log(money);
  var m = money.toFixed(2);
  $(".page-money").text("$" + m);
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
    var name = $("#new-user-name").val(); // initialize new player
    newPlayer = new Player(name);
    updateScoreboard();     // on button submit
    $("#landing-page").hide();
    $("#page-10a").show();

//page 10a
  $("#go-to-11a").click(function(event){
    event.preventDefault();
    $("#page-10a").hide();
    $("#page-11a").show();
    $("#scoreboard-page").show();
  });

//page 11a
  $("#go-to-12a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-11a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();
    $("#page-11a").hide();
    $("#page-12a").show();
    $("#scoreboard-page").show();
  });

//page 12a
  $("#go-to-13a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-12a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-12a").hide();
    $("#page-13a").show();
    $("#scoreboard-page").show();
  });

//page 13a
  $("#go-to-20a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-13a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-13a").hide();
    $("#page-20a").show();
    $("#scoreboard-page").show();
  });

//page 20a (branching page)
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

//page 30a
  $("#go-to-31a").click(function(event){
    event.preventDefault();
    $("#page-30a").hide();
    $("#page-31a").show();
    $("#scoreboard-page").show();
  });

//page 31a
  $("#go-to-32a").click(function(event){
    event.preventDefault();
    var money = parseInt($("#page-31a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();
    $("#page-31a").hide();
    $("#page-32a").show();
    $("#scoreboard-page").show();

  });

//page 32a
  $("#go-to-33a").click(function(event){
    event.preventDefault();
    var focus = parseInt($("#page-32a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-32a").hide();
    $("#page-33a").show();
    $("#scoreboard-page").show();

  });

//page 33a
  $("#33a-go-to-40a").click(function(event){
    event.preventDefault();
    var time = parseInt($("#page-33a-form input:radio[name=time]:checked").val());
    newPlayer.playerTime -= 40;
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-33a").hide();
    $("#page-40a").show();
    $("#scoreboard-page").show();

  });

//page 30b
  $("#go-to-31b").click(function(event){
    event.preventDefault();

    $("#page-30b").hide();
    $("#page-31b").show();
    $("#scoreboard-page").show();

  });

//page 31b
  $("#go-to-32b").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-31b-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-31b").hide();
    $("#page-32b").show();
    $("#scoreboard-page").show();
  });

//page 32b
  $("#go-to-32b").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-32b-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-32b").hide();
    $("#page-33b").show();
    $("#scoreboard-page").show();

  });

//page 33b
  $("#33b-go-to-40a").click(function(event){
    event.preventDefault();

    var time = parseInt($("#page-33b-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();

    updateScoreboard();

    $("#page-33b").hide();
    $("#page-40a").show();
    $("#scoreboard-page").show();

  });

//page 40a (branching page)
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
  $("#go-to-51a").click(function(event){
    event.preventDefault();

    updateScoreboard();

    $("#page-50a").hide();
    $("#page-51a").show();
    $("#scoreboard-page").show();

  });

//page 51a
  $("#go-to-52a").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-51a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-51a").hide();
    $("#page-52a").show();
    $("#scoreboard-page").show();

  });

//page 52a
  $("#go-to-53a").click(function(event){
    event.preventDefault();

    var time = parseInt($("#page-52a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-52a").hide();
    $("#page-53a").show();
    $("#scoreboard-page").show();

  });

//page 53a
  $("#53a-go-to-60a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-53a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-53a").hide();
    $("#page-60a").show();
    $("#scoreboard-page").show();

  });


//page 50b
  $("#go-to-51b").click(function(event){
    event.preventDefault();

    $("#page-50b").hide();
    $("#page-51b").show();
    $("#scoreboard-page").show();
  });

//page 51b
  $("#go-to-52b").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-51b-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-51b").hide();
    $("#page-52b").show();
    $("#scoreboard-page").show();
  });

//page 52b
  $("#go-to-53b").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-52b-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-52b").hide();
    $("#page-53b").show();
    $("#scoreboard-page").show();
  });

//page 53b
  $("#53b-go-to-60a").click(function(event){
    event.preventDefault();

    var time = parseInt($("#page-53b-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-53b").hide();
    $("#page-60a").show();
    $("#scoreboard-page").show();
  });


//page 60a
  $("#go-to-61a").click(function(event){
    event.preventDefault();

    $("#page-60a").hide();
    $("#page-61a").show();
    $("#scoreboard-page").show();
  });

//page 61a
  $("#go-to-62a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-61a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-61a").hide();
    $("#page-62a").show();
    $("#scoreboard-page").show();
  });

//page 62a
  $("#go-to-63a").click(function(event){
    event.preventDefault();

    var time = parseInt($("#page-62a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-62a").hide();
    $("#page-63a").show();
    $("#scoreboard-page").show();
  });

//page 63a
  $("#go-to-70a").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-63a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-63a").hide();
    $("#page-70a").show();
    $("#scoreboard-page").show();
  });

//page 70a
  $("#go-to-71a").click(function(event){
    event.preventDefault();

    $("#page-70a").hide();
    $("#page-71a").show();
    $("#scoreboard-page").show();
  });


//page 71a
  $("#go-to-72a").click(function(event){
    event.preventDefault();

    var time = parseInt($("#page-71a-form input:radio[name=time]:checked").val());
    newPlayer.calculateTime(time);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-71a").hide();
    $("#page-72a").show();
    $("#scoreboard-page").show();
  });

//page 72a
  $("#go-to-73a").click(function(event){
    event.preventDefault();

    var focus = parseInt($("#page-72a-form input:radio[name=focus]:checked").val());
    newPlayer.calculateFocus(focus);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-72a").hide();
    $("#page-73a").show();
    $("#scoreboard-page").show();
  });

//page 73a
  $("#go-to-finish").click(function(event){
    event.preventDefault();

    var money = parseInt($("#page-73a-form input:radio[name=money]:checked").val());
    newPlayer.calculateMoney(money);
    newPlayer.calculateScore();
    updateScoreboard();

    $("#page-73a").hide();
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
