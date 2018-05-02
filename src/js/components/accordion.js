
//accordion (ff-block)

var accordionWrap = $('.js-accordion-wrap');

accordionWrap.each(function() {
  var _this = $(this);
  var accorTrig = _this.find('.js-accordion-trigger');
  var accordions = _this.find('.js-accordion');

  accorTrig.on('click', function() {
    var parent = $(this).parents('.js-accordion');
    var open = 'is-open';
    if (!parent.hasClass(open)) {
      accordions.removeClass(open);
      parent.addClass(open);
    } else {
      accordions.addClass(open);
      parent.removeClass(open);
    }   
  });
});

// accordion (faq-page)
var accordionWrapper = $('.js-faq-esl-accord');

accordionWrapper.each(function() {
  var _this = $(this);
  var accorTrig = _this.find('.js-accord-btn');
  var accordions = _this.find('.js-accord');

  accorTrig.on('click', function() {
    var parent = $(this).parents('.js-accord');
    var open = 'is-open';
    if (!parent.hasClass(open)) {
      accordions.removeClass(open);
      parent.addClass(open);
    } else {
      parent.removeClass(open);
    }   
  });
});




//buton more-info (ff-page)

$('.js-more-info').click(function() {
  $('.ff-section__sale-wrap').slideToggle('slow');
});
