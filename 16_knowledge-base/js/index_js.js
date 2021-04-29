//Select
const element = document.querySelector('#customSelect');
const choices = new Choices(element, {
  searchEnabled: false
});

//Map
 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(function () {
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
             center: [48.872197, 2.354224],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 9
    });
    //     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    // ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Метка улицы дю Фобур Сен Дени, 54'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/Subtract.svg',
        // Размеры метки.
        iconImageSize: [28, 40],
    });    
    myMap.geoObjects.add(myPlacemark);
    });

    //inputMask
    let selector = document.querySelector("input[type='tel']");
    let im = new Inputmask("+7 (999) 999-99-99");

    im.mask(selector);
    new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      phone: {
        required: true,
        function: (name, value) => {
          const phone = selector.Inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?'
      },
      mail: {
        email: 'Введите корректный e-mail',
        required:'Укажите ваш e-mail'
      },
      phone:{
        required: 'Укажите ваш телефон'
      },
    },
    colorWrong: 'red',
  });
  
  
let press = document.querySelector('[data-select-text]');
let clickLak = document.querySelector('.choices__inner');
let numClick = document.querySelector('#choices--customSelect-item-choice-2');

window.addEventListener('DOMContentLoaded', function() {
  clickLak.addEventListener('click', function() {
    numClick.classList.remove('[data-select-text]');
  });
});




    

    
