// variables
var sw         = document.body.clientWidth,
	bp         = 550,
	map        = $('.map'),
	// Google Static Maps API Docs
	// https://developers.google.com/maps/documentation/staticmaps
	staticmap  = '//maps.googleapis.com/maps/api/staticmap?center=42.890595,-78.876607key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&zoom=15&size=800x400&markers=42.890595,-78.876607&size=640x320&maptype=terrain&sensor=true',
	// Google Dynamic API Docs
	embed      = '<iframe width="980" height="650" frameborder="0" scrolling="no" class="google-map" marginheight="0" marginwidth="0" src="//maps.google.com/maps?f=q&amp;source=s_q&amp;key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&amp;hl=en&amp;geocode=&amp;q=225+delaware+avenue,+buffalo+ny&amp;aq=&amp;sll=42.746632,-75.770041&amp;sspn=5.977525,8.580322&amp;ie=UTF8&amp;hq=&amp;hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=42.890595,-78.876607&amp;output=embed"></iframe>';


// $Build iframe view
// ============================================================

function googleMapAPIScript() {
	// https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16
	// API key console
	// https://code.google.com/apis/console
	// BfloFRED API Key : key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q

	var script = document.createElement("script");
	// Load the Google Maps API : required
	// https://developers.google.com/maps/documentation/javascript/tutorial
	script.src = "http://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&sensor=true";
	document.head.appendChild(script);
}


// $Build iframe view
// ============================================================

function buildEmbed() {
	// https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16
	// API key console
	// https://code.google.com/apis/console
	// BfloFRED API Key : key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q

	$('<div class="map-container"/>').html(embed).prependTo(map);
}


// $Build static map
// ============================================================

function buildStatic() {
	// https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16
	// API key console
	// https://code.google.com/apis/console
	// BfloFRED API Key : key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q

	var mapLink = $('.map-link').attr('href'),
		$img    = $('<img class="static-map-img" alt="">').attr('src', staticmap);

	$('<a/>').attr('href', mapLink).html($img).prependTo(map);
}


// $If Large Screen
// ============================================================

function buildMap() {
	// https://maps.google.com/maps?q=225+delaware+avenue,+Buffalo,+NY&hl=en&sll=42.746632,-75.770041&sspn=5.977525,8.591309&t=h&hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&z=16
	// API key console
	// https://code.google.com/apis/console
	// BfloFRED API Key : key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q

	if (sw > bp) {
		// If map doesn't already exist
		if ($('.map-container').length < 1) {
			buildEmbed();
		}
	} else {
		// If static image doesn't exist
		if ($('.static-map-img').length < 1) {
			buildStatic();
		}
	}
}


// $Window Onlod Events
// ============================================================

window.onload = googleMapAPIScript;


// $Window Resizing
// ============================================================

$(window).resize(function () {
	sw = document.body.clientWidth;
	buildMap();
	// this is causing an 'undefined' call for google
	google.maps.event.trigger(map, 'resize');
});


// $Document Ready
// ============================================================

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