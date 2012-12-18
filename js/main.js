//https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16
var sw        = document.body.clientWidth,
    bp        = 550,
    map       = $('.map'),
    staticmap = '//maps.googleapis.com/maps/api/staticmap?center=42.890595,-78.876607&zoom=15&markers=42.890595,-78.876607&size=640x320&sensor=true',
    embed     = '<iframe width="980" height="650" frameborder="0" scrolling="no" class="google-map" marginheight="0" marginwidth="0" src="//maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=225+delaware+avenue,+buffalo+ny&amp;aq=&amp;sll=42.746632,-75.770041&amp;sspn=5.977525,8.580322&amp;ie=UTF8&amp;hq=&amp;hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=42.890595,-78.876607&amp;output=embed"></iframe>';


function buildEmbed() { //Build iframe view
   $('<div class="map-container"/>').html(embed).prependTo(map);
}


function buildStatic() { //Build static map
   var mapLink = $('.map-link').attr('href'),
       $img    = $('<img class="static-map-img" alt="">').attr('src', staticmap);

       $('<a/>').attr('href', mapLink).html($img).prependTo(map);
}


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


$(window).resize(function () {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
});


$(document).ready(function () {
    // Build the Google Map
    buildMap();

    // Navigation Slide Panel
    var $menu     = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.on('click', function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });
});