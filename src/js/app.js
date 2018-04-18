import svg4everybody from 'svg4everybody';

svg4everybody();

$('.header__length-ru').hover(function() {
  $('.header__length-en').addClass('hover');
}, function() {
  $('.header__length-en').removeClass('hover');
});


