console.log("JS");

var colorArray = ['red','yellow','purple'];

$(document).ready(function(){
  console.log("JQ");

  $("#addBox").on("click", function (){
    var color = colorArray[randomColor(0,2)];
    $("#container").append('<div class ="box" style = "background-color: '+color+';"></div>');
    console.log(color);
    $('.box').click(function() {
      $(this).css('background', 'black');
    });

  });
});

function randomColor(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
