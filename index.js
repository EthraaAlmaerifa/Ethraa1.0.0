$(document).ready(function() {
  $(window).scroll(function() {
    // var hTHeader = $('#header').offset().top,
    //   hHHeader = $('#header').outerHeight(),
    //   hTAchiv = $('#achievements').offset().top,
    //   hHAchiv = $('#achievements').outerHeight(),
    //   wH = $(window).height(),
    //   wS = $(this).scrollTop();
    // if ((wS > (hTHeader + hHHeader - wH) && (hTHeader > wS) && (wS + wH > hTHeader + hHHeader)) ) {
    //   console.log('H1 on the view!');
    //   $(".navbars-container").css({
    //     "background-color": "transparent"
    //   });
    // } else {
    //   console.log("You are out");
    //   $(".navbars-container").css({
    //     "background-color": "rgba(86, 58, 85, 0.4)"
    //   });
    if ($(window).scrollTop() < 900) {
      $(".navbars-container").css({
        "background-color": "transparent"
      });
    } else {
      $(".navbars-container").css({
        "background-color": "rgba(86, 58, 85, 0.4)"
      });
    }



  })
})
