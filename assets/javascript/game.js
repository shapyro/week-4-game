//  click a div to get a number
//  display number picked 
//  display number sum total
//  display wins
//  display losses
//  start game over and over keeping tallies of wins and losses

$(document).ready(function(){

  // reveal the Cartmans
  $(".gems").on("click", function() {
    $(".gems").animate({ top: "50px", right: "500px" }, "fast");
    $(".gems").empty();
    
    var imgArray = ['assets/images/Cartman.jpg', 'assets/images/magicCartman.png', 'assets/images/normalCartman.png', 'assets/images/sadCartman.png']

    for (var i=0; i<imgArray.length; i++) {
      var imgCartman = $('<img>');
      $(imgCartman).addClass('cartman-image');
      $(imgCartman).attr('src', imgArray[i]);
      $('.gems').append(imgCartman);
      $('.gems').css("background-image","none");
      $('.gems').css("background-color","transparent");
      $('.gems').css("height","250px");
    }
  });

  var targetNum = Math.floor(Math.random() * (120-19+1)) + 19;
  console.log(targetNum);
  // $('#number').append(targetNum);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  $(".cartman-image").on("click", function() {
    var getNum = Math.floor(Math.random() * (12-1+1)) + 19;
    console.log(getNum);
    console.log('worked');
  });



});

