let currentSlide = 0;
let intervaloCarrossel;
const imagens = document.querySelectorAll('#carrosselWrapper img');
const carrosselWrapper = document.getElementById('carrosselWrapper');

function atualizarSlides() {
  imagens.forEach((img, index) => {
    img.classList.remove('img-central');
    if (index === currentSlide) {
      img.classList.add('img-central');
    }
  });

  const offset = currentSlide * (imagens[0].offsetWidth + 16); // 16 = gap
  carrosselWrapper.style.transform = `translateX(-${offset}px)`;
}

function moverSlide(direcao) {
  currentSlide = (currentSlide + direcao + imagens.length) % imagens.length;
  atualizarSlides();
}

// function iniciarAutoplay() {
//   intervaloCarrossel = setInterval(() => moverSlide(1), 4000);
// }

// function pararAutoplay() {
//   clearInterval(intervaloCarrossel);
// }

document.addEventListener('DOMContentLoaded', () => {
  atualizarSlides();
  iniciarAutoplay();

  carrosselWrapper.addEventListener('mouseenter', pararAutoplay);
  carrosselWrapper.addEventListener('mouseleave', iniciarAutoplay);

  let startX = 0;

  carrosselWrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carrosselWrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) moverSlide(1);
    else if (diff < -50) moverSlide(-1);
  });
});