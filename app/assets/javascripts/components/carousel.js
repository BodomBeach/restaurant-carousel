$(document).ready(function() {

  $(".next").click(function(){
      $(".food-pics").animate({left: '-=800px'});
  });

  $(".previous").click(function(){
      $(".food-pics").animate({left: '+=800px'});
  });
})
