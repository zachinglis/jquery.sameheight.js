/**
 * Same Height jQuery Plugin
 * 
 * Version 1.0
 * Updated 18/05/2012
 *
 * Copyright (c) 2012 Zach Inglis (@zachinglis)
 *
 * Usage: $(object).equalsizes();
 * 
 */

(function($) {
  $.fn.maxHeight = function (options) {
    var tallest = 0;

    // Reset it back to the beginning for responsive sizing
    this.css('height', 'auto');
    
    // Break from this function if it's bigger than minimum window width.
    if (options['window-min-width'] > $(window).width())
      return false;
    
    this.each(function() {
      tallest = Math.max(tallest, $(this).outerHeight());
    });    
    
    return tallest;
  }
  
  $.fn.matchHeight = function(options) {
    tallest = this.maxHeight(options);
    this.height(tallest);    
  }
  
	$.fn.sameHeight = function(options) {
	  var _ = this;
	  
    // Default options.
    var options = $.extend( {
      'window-min-width' : 0
    }, options);

    $(window).bind('load', function () {
      _.matchHeight(options);      
    });

    $(window).bind('resize', function () {
      _.matchHeight(options);
    })

    return this;
  }
})(jQuery);
