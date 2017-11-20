//  Click a Cartman Game

//  still need to reset cartman values

var wins = 0;
var losses = 0;


$(document).ready(function(){

  var counter = 0;
  var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
  $('#number').html(targetNum);

  $(".gems").one("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "fast");
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
        alert("you win: " + counter + " = " + targetNum);
        wins++;
        $('#wins').html("Wins: " + wins);
        $('#show').empty();
        if (wins === 2) {
          beefCake();
        } else if (wins === 5) {
          var beef = new Audio("http://www.drodd.com/South-Park-Sound/eaten_beef.wav");
          beef.play();
        }
        Reset();
      }
    }

    function checkLoss() {
      if (counter > targetNum){
        alert("you lose: " + counter + " > " + targetNum);
        losses++;
        $('#losses').html("Losses: " + losses);
        $('#show').empty();
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

