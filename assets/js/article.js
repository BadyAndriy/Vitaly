function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;
    // видны верхний ИЛИ нижний край элемента
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
  }
  function showVisible() {
    for (let img of document.querySelectorAll('img')) {
      let realSrc = img.dataset.src;
      if (!realSrc) continue;
      if (isVisible(img)) {
        // отключение кеширования
        // эта строка должна быть удалена в "боевом" коде
        realSrc += '?nocache=' + Math.random();
        img.src = realSrc;
        img.dataset.src = '';
        }
    }
}
window.addEventListener('scroll', showVisible);
showVisible();
// =====================================================================================
const _menuBurger = document.querySelector(".header__menu-burger")
const _header = document.querySelector(".header")
_menuBurger.addEventListener("click", () => {
    _header.classList.toggle("active")
})
// =====================================================================================
new Swiper('.article-slider',{
    // стрілки навігації
    navigation: {
      nextEl: '.article__button-next',
      prevEl: '.article__button-prev',
    },
    
    // включення/виключення
    // свайп
    simulateTouch: true,
    
    // чутливість
    touchRatio: 1,
    
    // кут спрацьовування свайпа
    touchAngel: 45,
    
    // курсор перетягування
    grabCursor: false,
    
    // переключення по кліку на слайд
    slideToClickedSlide: false,
    
    // управління клавіатурою
    keyboard: {
      // вкл\викл
      enable: true,
      // вкл\викл
      // тільки коли слайдер в межах вюпорта
      onlyInViewport: true,
      // вкл\викл
      // управління клавішами PgUp, PgDown
      pageUpDown: true,
    },
    
    // автовисота
    autoHeight: false,
    
    // кількість слайдів для показу
    slidesPerView: 1,
    
    // відключення функції slidesPerView
    // якщо слайдів менше ніж треба
    watchOverflow: true,
    
    // відступи між слайдами
    spaceBetween: 0,
    
    // кількість пролистуваних слайдів
    slidesPerGroup: 1,
    
    // активний слайд по центру
    centeredSlides: true,
    
    // стартовий слайд
    initialSlide: 0,
    
    // нескінечний слайдер
    loop: true,
    
    // вільний режим перегортання слайдів
    freeMode: false,

    // скорість переключення слайдів
    speed: 300,
    
    // зміна прозорості
    effect: 'fade',
    fadeEffect: {
      // паралельна зміна прозорості
       crossFade: true,
    },
   
    thumbs: {
        swiper: {
          el: '.article__mini-slider',
          // стартовий слайд
          initialSlide: 0,
          // відключення функції slidesPerView
          // якщо слайдів менше ніж треба
          watchOverflow: true,
          breakpoints: {
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        }
      },
  });
  