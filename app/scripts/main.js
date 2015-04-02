"use strict";

/* jshint devel:true */

var waypoint = new Waypoint({
  element: document.getElementById('markets'),
  handler: function(direction) {
  if(direction === "down"){     
    $('.header').addClass('slidedown');
    $('#markets').addClass('ani');
  }else {
  
   $('.header').removeClass('slidedown');
}
  }
})

$(document).ready(function(){
if ($(window).width() < 480) {
   $('#intro .col-md-5').insertAfter('#intro .col-md-7');
} else {
  $('#intro .col-md-7').insertAfter('#intro .col-md-5');
}
});



$(document).ready(function(){
  $('.mobile-menu').on('click', function(){
    $('.header').addClass('ani');
    
});
    $('.mobile-x').on('click', function(){
    $('.header').removeClass('ani');
    
});
});