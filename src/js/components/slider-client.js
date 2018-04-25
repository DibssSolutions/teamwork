import $ from 'jquery';
import 'slick-carousel';

$('.js-slider-client').slick({
  dots: true,
  dotsClass: 'slider__dots',
  prevArrow: '.slider__prev',
  nextArrow: '.slider__next',
  customPaging : function(slider, i) {
    var title = $(slider.$slides[i]).find('[data-title]').data('title');
    return '<a class="slider__item"> '+title+' </a>';
  }
});

$('.js-radius-slider').slick({
  fade: true,
  speed: 700,
  cssEase: 'linear',
  infinite: true,
  prevArrow: '<button type="button" class="radius-slider__prev"></button>',
  nextArrow: '<button type="button" class="radius-slider__next"></button>',
});



