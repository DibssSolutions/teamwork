//hover length

$('.js-lang-text').hover(function() {
  $(this).parents('.js-lang').addClass('is-hover');
}, function() {
  $(this).parents('.js-lang').removeClass('is-hover');
});

//menu popup

$(document).ready(function() {
  $('.header__menu-btn, .header-mobile__menu-button-close').click(function() {
    $('.header-mobile').slideToggle('slow');
  });
});
// $('.header__menu-btn').click(function() {
//   $('.header-mobile').addClass('is-active');
// });
// $('.header-mobile__menu-button-close').click(function() {
//   $('.header-mobile').removeClass('is-active');
// });

