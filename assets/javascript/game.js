//  click a div to get a number
//  display number picked 
//  display number sum total
//  display wins
//  display losses
//  start game over and over keeping tallies of wins and losses


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

      // var counter = 0;
      // $('#score').text(counter);
      // var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
      // $('#number').html(targetNum);

    // function playGame(){
      $('.cartman-button').click(function () {
        var cartmanValue = $(this).attr('value');
        cartmanValue = parseInt(cartmanValue);
        counter += cartmanValue;
        $('#score').text(counter);
        console.log(counter);
        checkWin();
        checkLoss();
      });
    //}

    function checkWin() {
      if (counter === targetNum){
        alert("you win: " + counter + " = " + targetNum);
        wins++;
        $('#wins').html("Wins: " + wins);
        // var counter = 0;
        Reset();
      }
    }

    function checkLoss() {
      if (counter > targetNum){
        alert("you lose: " + counter + " > " + targetNum);
        losses++;
        $('#losses').html("Losses: " + losses);
        // var counter = 0;
        Reset();
      }
    }

    function Reset() {
      counter = 0;
      $('#score').text(counter);
      targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
      $('#number').html(targetNum);
      // $('.cartman-button').remove();
      // randomCartman();
      //playGame();
    }

  });
});

