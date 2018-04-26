// var acc = document.getElementsByClassName('js-accordion');
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function(event) {
//     this.classList.toggle('active');
//     event.preventDefault();

//     var panel = this.nextElementSibling;
//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

// $(document).ready(function() {
//   $('.js-accordion').click(function() {
//     $('.ff-section__up-block').slideToggle('slow');
//   });
// });


$('.js-more-info').click(function() {
  $('.ff-section__sale-wrap').slideToggle('slow');
});

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

