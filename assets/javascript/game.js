//  CLICK-A-CARTMAN GAME

//  still need to reset cartman values
//  would like to randomize the images each time
//  does the for loop need to be different functions for scope?

var wins = 0;
var losses = 0;


$(document).ready(function(){

  var counter = 0;
  var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
  $('#number').html(targetNum);

  $(".gems").one("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "slow");
    $(".gems").empty();

    var imgArray = ['assets/images/Cartman.jpg', 'assets/images/magicCartman.png', 'assets/images/normalCartman.png', 'assets/images/sadCartman.png']
      
    for (var i=0; i<imgArray.length; i++) {
      var randomNum = Math.floor(Math.random() * (12-1+1)) + 1;
      var imgCartman = $('<img>');
      $(imgCartman).addClass('cartman-button');
      $(imgCartman).attr('src', imgArray[i]);
      $('.gems').append(imgCartman);
      $('.gems').css("background-image","none");
      $('.gems').css("background-color","transparent");
      $('.gems').css("height","250px");
      $('.gems').css("width", "1500px");
      $(imgCartman).attr('value', randomNum);
    }

    $('.cartman-button').click(function () {
      var cartmanValue = $(this).attr('value');
      cartmanValue = parseInt(cartmanValue);
      counter += cartmanValue;
      $('#score').text(counter);
      checkWin();
      checkLoss();
    });

    function checkWin() {
      if (counter === targetNum){
        // alert("you win: " + counter + " = " + targetNum);
        wins++;
        $('#wins').html("Wins: " + wins);
        $('#show').empty();
        if (wins === 2) {
          beefCake();
        } else if (wins === 5) {
          var beef = new Audio("http://www.drodd.com/South-Park-Sound/eaten_beef.wav");
          beef.play();
        } else {
          var winSound = new Audio("assets/audio/dramatic.swf.mp3");
          winSound.play();
        }
        Reset();
      }
    }

    function checkLoss() {
      if (counter > targetNum){
        // alert("you lose: " + counter + " > " + targetNum);
        losses++;
        $('#losses').html("Losses: " + losses);
        $('#show').empty();
        if (losses === 3 || losses === 6){
          var weak = new Audio("http://www.shannon-g.net/fun/multimedia/sounds/sp/oh_weak.wav");
          weak.play();
        } else if (losses === 4) {
          var school = new Audio("http://www.thesoundarchive.com/spsounds/troublemakers.mp3");
          school.play();
        } else if (losses === 10) {
          var wrong = new Audio("http://www.thesoundarchive.com/spsounds/Dumbass.mp3");
          wrong.play();
        } else {
          loseSound = new Audio("assets/audio/wrong-answer-sound-effect.mp3");
          loseSound.play();
        }
        hankey();
        Reset();
      }
    }

    function Reset() {
      counter = 0;
      $('#score').text(counter);
      targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
      $('#number').html(targetNum);
    }

    function hankey() {
      var imgHankey = $('<img>');
      $(imgHankey).attr('src', "https://i.imgur.com/4X9Q9.jpg")
      $('#show').append(imgHankey);
    }

    function beefCake() {
      var audio = new Audio("http://www.thesoundarchive.com/spsounds/BeefCake-2.mp3");
      audio.play();
    }
  });
});

