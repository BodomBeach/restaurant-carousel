$(document).ready(function() {

  $(".tabs").hide();
  $(".presentation-tab").addClass("active-tab").show();
  $(".presentation-btn").prop('disabled', true);


  $(".presentation-btn").click(function() {
    $(".active-tab").removeClass("active-tab").hide(300, function() {
      $(".presentation-tab").addClass("active-tab").show(300);
    });
    $(".tabs-btn").prop('disabled', false);
    $(".presentation-btn").prop('disabled', true);
  });

  $(".menu-btn").click(function() {
    $(".active-tab").removeClass("active-tab").hide(300, function() {
      $(".menu-tab").addClass("active-tab").show(300);
    });
    $(".tabs-btn").prop('disabled', false);
    $(".menu-btn").prop('disabled', true);
  });

  $(".reference-btn").click(function() {
    $(".active-tab").removeClass("active-tab").hide(300, function() {
      $(".reference-tab").addClass("active-tab").show(300);
    });
    $(".tab-btn").prop('disabled', false);
    $(".reference-btn").prop('disabled', true);
  });
})
