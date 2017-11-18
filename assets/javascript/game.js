//  click a div to get a number
//  display number picked 
//  display number sum total
//  display wins
//  display losses
//  start game over and over keeping tallies of wins and losses



// $('#number').append(targetNum);


var wins = 0;
var losses = 0;


$(document).ready(function(){

  var counter = 0;
  var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
  $('#number').html(targetNum);

  // reveal the Cartmans
  $(".gems").one("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "fast");
    $(".gems").empty();
    $(".startBtn").addClass('display', 'none');
    randomCartman();
    
    // Thinking about maybe picking random image on restart?

    function randomCartman(){
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
        $(imgCartman).attr('value', randomNum);
      }
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
        alert("you win");
        wins++;
        $('#wins').html("Wins: " + wins);
        Restart();
      }
    }

    function checkLoss() {
      if (counter > targetNum){
        alert("you lose");
        losses++;
        $('#losses').html("Losses: " + losses);
        Restart();
      }
    }

    function Restart() {
      //$('.gems').empty();
      randomCartman();
      var counter = 0;
      $('#score').text(counter);
      var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
      $('#number').html(targetNum);
    }

  });
});

