/* jshint devel:true */
console.log('\'Allo \'Allo!');


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


