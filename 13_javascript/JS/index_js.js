// header__burger
let burger = document.querySelector('.header_burger');
let nav = document.querySelector('.header_list-menu');
let list = document.querySelector('.header__list');
let bod = document.querySelector('body');
let faq = document.querySelector('.section-faq__part');

window.addEventListener('DOMContentLoaded', function() {
  burger.addEventListener('click', function() {
    nav.classList.toggle('header_menu-active');
    burger.classList.toggle('active');
    bod.classList.toggle('flow');
  });
  faq.addEventListener('click', function() {
    faq.classList.toggle('ui-state-active');
  });
});
//tabs
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function(tabContent){
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });
});
// swiper
const swiper = new Swiper('.swiper-container', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // буллеты
    clickable: true
  }
});
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );


