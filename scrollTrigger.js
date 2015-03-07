// scrollTrigger.js

;(function($) {

  $.fn.scrollTrigger = function(options) {

    var settings = $.extend({
          active: 'scrolltrig--active',
          offset: 60,
          target: this
        }, options),
        el = this;


    var activate = function() {

      el.each(function(k, v) {
        var sT = $(window).scrollTop(),
            wH = $(window).height();

        if(settings.target != el) {
          if(sT > $(el[0]).offset().top - wH + settings.offset) {
            $(settings.target).addClass(settings.active);
          } else {
            $(settings.target).removeClass(settings.active);
          }
        } else {
          if(sT > $(v).offset().top - wH + settings.offset) {
            $(v).addClass(settings.active);
          } else {
            $(v).removeClass(settings.active);
          }
        }

      });

    };

    var didScroll = false;
    $(window).scroll(function() {
      didScroll = true;
    });
    setInterval(function() {
      if(didScroll) {
        activate();
        didScroll = false;
      }
    }, 250);

  };

}(jQuery));
