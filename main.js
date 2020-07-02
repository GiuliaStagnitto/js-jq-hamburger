// Al click di header right devo mostrare hamburger menu

$('.header-right  a').click(function() {
  $('.hamburger-menu').addClass('active');
});

$('.hamburger-menu a').click(function(){
  $('.hamburger-menu').removeClass('active');
})
