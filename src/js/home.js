const imagensCarrossel = [
  "src/img/home/lanche cheddar.jpg",
  "src/img/home/segurando lanche.jpg",
  "src/img/home/desconto.png",
  "src/img/home/finaldelas.jpg",
  "src/img/home/reserve.png"
];

let indice = 0;

const ladoEsquerdo = document.getElementById("lado-esquerdo");
const ladoDireito = document.getElementById("lado-direito");

const carrosselMobile = document.getElementById("carrossel-mobile");
const carrosselMobileInner = document.getElementById("carrossel-mobile-inner");

// Monta as imagens do carrossel mobile (uma única linha)
function montarCarrosselMobile() {
  carrosselMobileInner.innerHTML = ""; // limpa

  imagensCarrossel.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "imagem";
    div.style.minWidth = "100%";
    div.style.flexShrink = "0";
    div.style.padding = "0 10px";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagem ${i + 1}`;
    img.style.width = "100%";
    img.style.borderRadius = "15px";

    div.appendChild(img);
    carrosselMobileInner.appendChild(div);
  });
}

// Atualiza imagens para desktop
function atualizarLadosDesktop() {
  ladoEsquerdo.querySelectorAll(".imagem img").forEach((img, i) => {
    img.src = imagensCarrossel[(indice + i) % imagensCarrossel.length];
  });

  ladoDireito.querySelectorAll(".imagem img").forEach((img, i) => {
    img.src = imagensCarrossel[(indice + i + 3) % imagensCarrossel.length];
  });
}

// Atualiza carrossel mobile movendo a linha para o índice certo
function atualizarCarrosselMobile() {
  carrosselMobileInner.style.transform = `translateX(${-indice * 100}%)`;
}

// Função geral para atualizar dependendo do tamanho da tela
function atualizarCarrossel() {
  if (window.innerWidth <= 480) {
    // Ativa carrossel mobile
    ladoEsquerdo.style.display = "none";
    ladoDireito.style.display = "none";
    carrosselMobile.style.display = "block";

    montarCarrosselMobile();
    atualizarCarrosselMobile();

    const tridente = document.getElementById("tridente");
    if (tridente) tridente.style.display = "none";
  } else {
    // Ativa carrossel desktop
    ladoEsquerdo.style.display = "flex";
    ladoDireito.style.display = "flex";
    carrosselMobile.style.display = "none";

    const tridente = document.getElementById("tridente");
    if (tridente) tridente.style.display = "block";

    atualizarLadosDesktop();
  }
}

function mudarImagens(direcao) {
  indice = (indice + direcao + imagensCarrossel.length) % imagensCarrossel.length;

  if (window.innerWidth <= 480) {
    atualizarCarrosselMobile();
  } else {
    atualizarLadosDesktop();
  }
}

// Atualizações em resize e load
window.addEventListener("resize", atualizarCarrossel);
window.addEventListener("load", atualizarCarrossel);
