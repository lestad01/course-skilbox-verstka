window.addEventListener('DOMContentLoaded', function() {
  const liMainFunction = function (){
    let selected = document.querySelectorAll(".header__selected");

    const addClass = function(target) {
      // при клике на другой select убираем класс у ранее открытого select
      for (let i = 0;i < selected.length; i++) {
        let optionsContainer = selected[i].previousElementSibling;
        let svgArrow = selected[i].nextElementSibling;
        if (selected[i] != target) {
          optionsContainer.classList.remove('active');
          svgArrow.classList.remove('open');
      }
    }
    //при клике добавляем класс стрелке и диву с выпадающим меню
      optionsContainer = target.previousElementSibling;
      svgArrow = target.nextElementSibling;
      if (optionsContainer.classList.contains('active')) {
        optionsContainer.classList.remove('active');
        svgArrow.classList.remove('open');
      }
      else {
        optionsContainer.classList.add('active');
        svgArrow.classList.add('open');
      }
    };
    //удаление классов (сворачиваем select)
    const removeClass = function() {
      for (let i = 0;i < selected.length; i++) {
        let optionsContainer = selected[i].previousElementSibling;
        let svgArrow = selected[i].nextElementSibling;
        optionsContainer.classList.remove('active');
        svgArrow.classList.remove('open');
      }
    };
    document.addEventListener('click', function (e) {
      if ( e.target.className == 'header__selected') {
            addClass(e.target);
          }
          else if (e.target.className != 'header__options-container' && e.target.className != 'option') {
            removeClass(e.target);
          }
    });
  };

  liMainFunction();

  const anchorFunction = function() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors){
      anchor.addEventListener('click', function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      });
    }
  };
  anchorFunction();

    const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
    });

    //Gallery-slider
    const sliders = document.querySelectorAll('.section-gallery__slide'),
     prev = document.querySelector('.section-gallery__pre'),
     next = document.querySelector('.section-gallery__next'),
     total = document.querySelector('#total'),
     current = document.querySelector('#current');

     let slideIndex = 1;
     showSlides(slideIndex);

    if (sliders.length < 10){
      total.textContent = sliders.length;
    }

     function showSlides(t){
       // если счётчик (t) будет больше чем количество
       //всех слайдов, то счётчик возвращается обратно к 1
        if (t > sliders.length) {
          slideIndex = 1;
        }
        //наоборот, если счётчик меньшье 1 то возвращается последнее значение
        //(количество слайдов) то бишь 3
        if ( t < 1) {
          slideIndex = sliders.length;
        }

        sliders.forEach(item => item.style.display = 'none');
        sliders[slideIndex - 1].style.display = 'flex';

        if (sliders.length < 10){
          current.textContent = slideIndex;
        }
     }
     function plusSlides(n){
      showSlides(slideIndex += n);
     }

     prev.addEventListener('click', () => {
       plusSlides(-1);
     });
     next.addEventListener('click', () => {
      plusSlides(+1);
    });

});






