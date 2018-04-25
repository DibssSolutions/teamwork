var btnPlay = $('.js-video-play');

btnPlay.click(function() {
  var parent = $(this).parents('.js-video-parent');
  var video = parent.find('.js-video');
  video[0].play();
  parent.addClass('is-play');
});

var btnPause = $('.js-video-pause');

btnPause.click(function() {
  var parent = $(this).parents('.js-video-parent');
  var video = parent.find('.js-video');
  video[0].pause();
  parent.removeClass('is-play');
});

