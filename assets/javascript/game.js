//  click a div to get a number
//  display number picked 
//  display number sum total
//  display wins
//  display losses
//  start game over and over keeping tallies of wins and losses


var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
console.log(targetNum);
// $('#number').append(targetNum);

var counter = 0;
var wins = 0;
var losses = 0;


$(document).ready(function(){

  // reveal the Cartmans
  $(".startBtn").on("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "fast");
    $(".gems").empty();
    $(".startBtn").addClass('display', 'none');
    console.log("clicked?");
    
    //maybe pick random image on restart?
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
  });
 
  $('.cartman-button').on('click', function () {
    console.log("working")
    // counter += $(this).val();
    // console.log(counter);
  });

  // click the cartmans
  $(".cartman-button").on("click", function() {
    console.log('worked');
  });



});

