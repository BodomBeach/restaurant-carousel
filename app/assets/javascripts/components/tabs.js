$(document).ready(function() {

  $(".tabs").hide();
  $(".presentation-tab").show();

  $(".presentation-button").click(function(){
      $(".tabs").hide(500);
      $(".presentation-tab").show(500);
  });
  $(".menu-button").click(function(){
      $(".tabs").hide(500);
      $(".menu-tab").show(500);
  });
  $(".reference-button").click(function(){
      $(".tabs").hide(500);
      $(".reference-tab").show(500);
  });
})
