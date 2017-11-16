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

    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = '../week-4-game/assets/images/Cartman.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = '../images/magicCartman.png';

    imgArray[2] = new Image();
    imgArray[2].src = '../images/normalCartman.png';

    imgArray[3] = new Image();
    imgArray[3].src = '../images/sadCartman.png';

    for (var i=0; i<imgArray.length; i++) {
      var imgCartman = $('<img>');
      $(imgCartman).addClass('cartman-image');
      $(imgCartman).attr('src', imgArray[i]);
      $('.gems').append(imgCartman);
      $('.gems').css("background-image","none");
      $('.gems').css("height","250px");
    }
  });

  var targetNum = 99;
  console.log(targetNum);


  var counter = 0;
  var wins = 0;
  var losses = 0;
  var numOps = [1, 5, 10, 50];




  

});

