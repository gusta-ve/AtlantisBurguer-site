
  const imagensCarrossel = [
    "src/img/home/lanche cheddar.jpg",
    "src/img/home/segurando lanche.jpg",
    "src/img/home/desconto.png",
    "src/img/home/finaldelas.jpg",
    "src/img/home/reserve.png"
  ];

  let indice = 0;

  function atualizarLados() {
    const ladoEsquerdo = document.getElementById("lado-esquerdo");
    const ladoDireito = document.getElementById("lado-direito");

    ladoEsquerdo.querySelectorAll(".imagem img").forEach((img, i) => {
      img.src = imagensCarrossel[(indice + i) % imagensCarrossel.length];
    });

    ladoDireito.querySelectorAll(".imagem img").forEach((img, i) => {
      img.src = imagensCarrossel[(indice + i + 3) % imagensCarrossel.length];
    });
  }

  function mudarImagens(direcao) {
    indice = (indice + direcao + imagensCarrossel.length) % imagensCarrossel.length;
    atualizarLados();
  }

  // Atualização automática a cada 5 segundos
  // setInterval(() => mudarImagens(1), 5000);

  // Inicializa as imagens
  atualizarLados();

