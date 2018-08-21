var cursor = 2,
    slideWidth = 802;

$(document).ready(function() {



  $(".next").click(function() {
    next()
  });

  $(".previous").click(function() {
    previous()
  });

  $(".image-dot").click(function() {



    let shift = $(this).val() - cursor;
    let shiftpx = {
      'left': -$(this).val() * slideWidth + 950
    };
    console.log(cursor, shift)
    $(".food-pics").animate(shiftpx);
    cursor = $(this).val()
    console.log($(this).val())
    console.log(cursor, shift)
  });

  $(".image-dot, .previous, .next").click(function() {
    $(".image-dot").removeClass("active-dot");
    $('[value="' + cursor + '"]').addClass("active-dot");
    console.log($('.image-dot option[value="' + cursor + '"]'));
  });
})


function next() {
  if (cursor === 5) {
    $(".food-pics").animate({left: '+=3200px'});
    cursor = 1;
  } else {
    $(".food-pics").animate({left: '-=800px'});
    cursor++;
  }
  console.log(cursor)
}

function previous() {
  if (cursor === 1) {
    $(".food-pics").animate({left: '-=3200px'});
    cursor = 5;
  } else {
    $(".food-pics").animate({left: '+=800px'});
    cursor -= 1;
  }
  console.log(cursor)
}
