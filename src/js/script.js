svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $preloader = $('.loader-wrapper'),
  $loader = $preloader.find('.loader');
   $loader.fadeOut();
   $preloader.delay(300).fadeOut('slow');
   $('html').removeClass('no-scroll');
});

particlesJS.load('particles-about', 'js/particles.json');
particlesJS.load('particles-adaptive', 'js/particles.json');
particlesJS.load('particles-services', 'js/particles-back.json');

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
