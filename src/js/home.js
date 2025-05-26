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

// Cria um elemento .imagem com <img>
function criarDivImagem(src, alt) {
  const div = document.createElement("div");
  div.className = "imagem";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.style.width = "100%";
  img.style.borderRadius = "15px";

  div.appendChild(img);
  return div;
}

// Carrossel Mobile
function montarCarrosselMobile() {
  carrosselMobileInner.innerHTML = "";

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

// Carrossel Desktop
function atualizarLadosDesktop() {
  ladoEsquerdo.innerHTML = "";
  ladoDireito.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const srcEsquerdo = imagensCarrossel[(indice + i) % imagensCarrossel.length];
    const srcDireito = imagensCarrossel[(indice + i + 3) % imagensCarrossel.length];

    ladoEsquerdo.appendChild(criarDivImagem(srcEsquerdo, `Imagem ${i + 1}`));
    ladoDireito.appendChild(criarDivImagem(srcDireito, `Imagem ${i + 4}`));
  }
}

// Atualiza carrossel mobile (movimenta)
function atualizarCarrosselMobile() {
  carrosselMobileInner.style.transform = `translateX(${-indice * 100}%)`;
}

// Verifica tamanho da tela e aplica o modo correto
function atualizarCarrossel() {
  const tridente = document.getElementById("tridente");

  if (window.innerWidth <= 480) {
    ladoEsquerdo.style.display = "none";
    ladoDireito.style.display = "none";
    carrosselMobile.style.display = "block";
    if (tridente) tridente.style.display = "none";

    montarCarrosselMobile();
    atualizarCarrosselMobile();
  } else {
    ladoEsquerdo.style.display = "flex";
    ladoDireito.style.display = "flex";
    carrosselMobile.style.display = "none";
    if (tridente) tridente.style.display = "block";

    atualizarLadosDesktop();
  }
}

// Navega pelas imagens
function mudarImagens(direcao) {
  indice = (indice + direcao + imagensCarrossel.length) % imagensCarrossel.length;

  if (window.innerWidth <= 480) {
    atualizarCarrosselMobile();
  } else {
    atualizarLadosDesktop();
  }
}

// Inicialização
window.addEventListener("resize", atualizarCarrossel);
window.addEventListener("load", atualizarCarrossel);
