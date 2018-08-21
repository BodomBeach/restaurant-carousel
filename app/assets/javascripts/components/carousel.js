var cursor = 2,
    slideWidth = 802,
    timer = window.setInterval(next, 5000);



$(document).ready(function() {

  $(".next").click(function() {
    next()
  });

  $(".previous").click(function() {
    previous()
  });

  $(".image-dot").click(function() {

    var shiftpx = {
      'left': -$(this).val() * slideWidth + 950
    };

    $(".food-pics").animate(shiftpx);
    cursor = $(this).val()
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  });

  $(".image-dot, .previous, .next").click(function() {
    $(".image-dot").removeClass("active-dot");
    $('[value="' + cursor + '"]').addClass("active-dot");
    console.log(cursor)
  });
})


function next() {
  console.log(typeof cursor)
  if (Number(cursor) === 5) {

    $(".food-pics").animate({left: '+=3208px'});
    cursor = 1;
  } else {
    $(".food-pics").animate({left: '-=802px'});
    cursor++;
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  }
}

function previous() {
  if (Number(cursor) === 1) {
    $(".food-pics").animate({left: '-=3208px'});
    cursor = 5;
  } else {
    $(".food-pics").animate({left: '+=802px'});
    cursor -= 1;
    clearInterval(timer);
    timer = window.setInterval(next, 5000);
  }
}
