//  CLICK-A-CARTMAN GAME

//  Declare wins and losses
var wins = 0;
var losses = 0;


$(document).ready(function(){

  //  Declare Score Counter and Target Number
  var counter = 0;
  var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
  $('#number').html(targetNum);

  // Fancy open div animation for Cartmans to populate
  $(".gems").one("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "slow");
    $(".gems").empty();
    startGame();
  });

    //  Let the Games Begin
    function startGame() {
      var imgArray = ['assets/images/Cartman.jpg', 'assets/images/magicCartman.png', 'assets/images/normalCartman.png', 'assets/images/sadCartman.png']

      //  Loop through image aray, and set up Cartman images
      for (var i=0; i<imgArray.length; i++) {
        var randomNum = Math.floor(Math.random() * (12-1+1)) + 1;
        var imgCartman = $('<img>');
        $(imgCartman).addClass('cartman-button');
        $(imgCartman).attr('src', imgArray[i]);
        $(imgCartman).attr('value', randomNum);
        $('.gems').append(imgCartman);
        $('.gems').css("background-image","none");
        $('.gems').css("background-color","transparent");
        $('.gems').css("height","250px");
        $('.gems').css("width", "90%"); 
      }
    
      //  Every Click Counts
      $('.cartman-button').click(function () {
        var cartmanValue = $(this).attr('value');
        cartmanValue = parseInt(cartmanValue);
        counter += cartmanValue;
        $('#score').text(counter);
        checkWin();
        checkLoss();
      });
    }

    //  Did the User win?
    function checkWin() {
      if (counter === targetNum){
        wins++;
        $('#wins').html("Wins: " + wins);
        if (wins === 2) {
          beefCake();
        } else if (wins === 5) {
          var beef = new Audio("http://www.drodd.com/South-Park-Sound/eaten_beef.wav");
          beef.play();
        } else {
          var winSound = new Audio("assets/audio/dramatic.swf.mp3");
          winSound.play();
        }
        // $("#score").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        //window.setTimeout(Reset(), 3000); 
        $('#show').empty();
        Reset();
      }
    }

    //  Did the user lose?  Does that mean he/she is a lusr?
    function checkLoss() {
      if (counter > targetNum){
        losses++;
        $('#losses').html("Losses: " + losses);
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
        $('#show').empty();
        hankey();
        Reset();
      }
    }

    //  Can I get a reset?  Reset on aisle 9!!
    function Reset() {
      counter = 0;
      $('#score').text(counter);
      targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
      $('#number').html(targetNum);
      $(".gems").empty();
      startGame();
    }

    //  It just got weird
    function hankey() {
      var imgHankey = $('<img>');
      $(imgHankey).attr('src', "https://i.imgur.com/4X9Q9.jpg")
      $('#show').append(imgHankey);
    }

    //  This sound is extra special for no reason at all, but just put all the sounds up above where needed
    function beefCake() {
      var audio = new Audio("http://www.thesoundarchive.com/spsounds/BeefCake-2.mp3");
      audio.play();
    }
});

