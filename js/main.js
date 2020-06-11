$(function () {
  'use strict';
  // window height
  var winH   = $(window).height(),
      // upperH = $('.upper-bar').innerHeight(),
      navH   = $('.navbar').innerHeight();
      $('.slider').height(winH -( navH));

   var win2H   = $(window).height(),
          footer = $('.footer').innerHeight(),
          featuers   = $('.featuers').innerHeight();
          $('.next-term').height(win2H -( footer +featuers));    
});
