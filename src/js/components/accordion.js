
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
var submenu = $('.js-accord-hide-block').hide();

//On Click
$('.js-accord-btn').click(function(){
    if( $(this).next().is(':hidden') ) { 
        $('.js-accord-btn').removeClass('active').next().slideUp(); 
        $(this).toggleClass('active').next().slideDown();

    }
    return false; 
 $(function() {
    $( '.js-accord-btn' ).click(function(){
      collapsible: true; 
    });
});

};



//buton more-info (ff-page)

$('.js-more-info').click(function() {
  $('.ff-section__sale-wrap').slideToggle('slow');
});
