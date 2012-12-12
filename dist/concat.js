// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*global jQuery */
/*! 
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
    
  $.fn.fitText = function( kompressor, options ) {
       
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
    
    return this.each(function(){

      // Store the object
      var $this = $(this); 
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();
                
      // Call on resize. Opera debounces their resize by default. 
      $(window).on('resize', resizer);
        
    });

  };

})( jQuery );

var sw        = document.body.clientWidth,
    bp        = 550,
    map       = $('.map'),
    staticmap = 'http://maps.googleapis.com/maps/api/staticmap?center=42.890595,-78.876607&zoom=15&markers=42.890595,-78.876607&size=640x320&sensor=true',
    embed     = '<iframe width="980" height="650" frameborder="0" scrolling="no" class="google-map" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=225+delaware+avenue,+buffalo+ny&amp;aq=&amp;sll=42.746632,-75.770041&amp;sspn=5.977525,8.580322&amp;ie=UTF8&amp;hq=&amp;hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=42.890595,-78.876607&amp;output=embed"></iframe>';

function buildMap() {
    if (sw > bp) { //If Large Screen
        if ($('.map-container').length < 1) { //If map doesn't already exist
            buildEmbed();
        }
    } else {
        if ($('.static-map-img').length < 1) { //If static image doesn't exist
            buildStatic();
        }
    }
}

function buildEmbed() { //Build iframe view
   $('<div class="map-container"/>').html(embed).prependTo(map);
}

function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img    = $('<img class="static-map-img" alt="">').attr('src', staticmap);

       $('<a/>').attr('href', mapLink).html($img).prependTo(map);
}

https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16

$(window).resize(function () {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
});

$(document).ready(function () {
    buildMap();
});