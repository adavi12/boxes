console.log("JS");
$(document).ready(function(){
  console.log("JQ");
  $("#addBox").on("click", function(){
    console.log("addBox click");
    $("#container").append('<div class ="box"></div>');
    $('.box').click(function() {
          $(this).css('background', 'black');
      });
  });
});


