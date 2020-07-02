// Al click di header right devo mostrare hamburger menu

// creo var con media query
var media = window.watchMedia("(max-width: 1000px)");

$('.header-right  i').click(function() {
  $('.hamburger-menu').addClass('active');
  console.log('.hamburger-menu');
});
