(function () {
  "use strict";

  const carousel = document.querySelector('.carrossel');
  const slider = document.getElementById('carrosselWrapper');
  const items = slider.querySelectorAll('img');

  let currIndex = 0;

  window.moverSlide = function (step) {
    move(currIndex + step);
  };

  function init() {
    move(Math.floor(items.length / 2));
    window.addEventListener('resize', () => move(currIndex));
  }

  function move(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currIndex = index;

    const itemWidth = items[0].offsetWidth + 32;
    const offset = index * itemWidth - (carousel.offsetWidth / 2 - itemWidth / 2);

    slider.scrollTo({
      left: offset,
      behavior: 'smooth'
    });

    items.forEach((item, i) => {
      item.classList.remove('img-central');
      item.style.transform = 'scale(0.9)';
      item.style.opacity = '0.5';
      item.style.zIndex = 0;
    });

    const active = items[index];
    active.classList.add('img-central');
    active.style.transform = 'scale(1.2)';
    active.style.opacity = '1';
    active.style.zIndex = 1;
  }

  init();
})();
