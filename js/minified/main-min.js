// Avoid `console` errors in browsers that lack a console.
function googleMapAPIScript(){var e=document.createElement("script");e.async;e.src="http://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&sensor=true";document.head.appendChild(e)}function buildEmbed(){$('<div class="map-container"/>').html(embed).prependTo(map)}function buildStatic(){var e=$(".map-link").attr("href"),t=$('<img class="static-map-img" alt="">').attr("src",staticmap);$("<a/>").attr("href",e).html(t).prependTo(map)}function buildMap(){sw>bp?$(".map-container").length<1&&buildEmbed():$(".static-map-img").length<1&&buildStatic()}(function(){var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};while(r--){e=n[r];i[e]||(i[e]=t)}})();(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this),n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize",n)})}})(jQuery);var sw=document.body.clientWidth,bp=550,map=$(".map"),staticmap="//maps.googleapis.com/maps/api/staticmap?center=42.890595,-78.876607key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&zoom=15&size=800x400&markers=42.890595,-78.876607&size=640x320&maptype=terrain&sensor=true",embed='<iframe width="980" height="650" frameborder="0" scrolling="no" class="google-map" marginheight="0" marginwidth="0" src="//maps.google.com/maps?f=q&amp;source=s_q&amp;key=AIzaSyBMSezbmos0W2n6BQutkFvNjkF5NTPd0-Q&amp;hl=en&amp;geocode=&amp;q=225+delaware+avenue,+buffalo+ny&amp;aq=&amp;sll=42.746632,-75.770041&amp;sspn=5.977525,8.580322&amp;ie=UTF8&amp;hq=&amp;hnear=225+Delaware+Ave,+Buffalo,+Erie,+New+York+14202&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=42.890595,-78.876607&amp;output=embed"></iframe>';window.onload=googleMapAPIScript;$(window).resize(function(){sw=document.body.clientWidth;buildMap();google.maps.event.trigger(map,"resize")});$(document).ready(function(){buildMap();var e=$("#menu"),t=$(".menu-link");t.on("click",function(){t.toggleClass("active");e.toggleClass("active");return!1})});