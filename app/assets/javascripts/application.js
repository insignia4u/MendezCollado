// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require index
//= require foundation.orbit
//= require jquery-picture-min

$(document).foundation();

$(function(){
    $('figure.responsive').picture();
});

$(document).ready(function() {

  $(document).foundation('orbit', {bullets: true, timer_speed: 4000});

  // Override Slider Header
  $(".orbit-next, .orbit-prev").css({display: "none"});
  $(".orbit-timer").css({display: "none"});
  $(".orbit-slide-number").remove();
  $(".orbit-bullets li").each( function() {
    $(this).text($(this).attr("data-orbit-slide-number"));
  } );
});
