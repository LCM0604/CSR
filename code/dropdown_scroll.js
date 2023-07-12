$(window).scroll(function() {
  if ($(document).scrollTop() > 130) {
    $('.menu').addClass('actived');
  } else {
    $('.menu').removeClass('actived');
  }
});
