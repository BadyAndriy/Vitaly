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
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("content__item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("content__categoriesbtn");
var btns = btnContainer.getElementsByClassName("content__btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// =====================================================================================
new Swiper('.first-slider',{
  // стрілки навігації
  navigation: {
     nextEl: '.first__button-next',
    prevEl: '.first__button-prev',
  },

  // крапки навігації
  pagination: {
    el: '.first__pagination',
    type: 'bullets',
    clickable: true,
  },
  
  // включення/виключення
  // свайп
  simulateTouch: false,
  
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
  
  // автопрограння слайдів
  autoplay: {
    delay: 5000,
  },
  
  // зміна прозорості
  effect: 'fade',
  fadeEffect: {
    // паралельна зміна прозорості
     crossFade: true,
  },
 
 });
