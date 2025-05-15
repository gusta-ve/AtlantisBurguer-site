const imagens = [
  "src/img/home/aniversariante lanche.jpg",
  "src/img/home/lanche cheddar.jpg",
  "src/img/home/segurando lanche.jpg",
  "src/img/home/lanche cheddar.jpg",
  "src/img/home/finaldelas.jpg",
  "src/img/home/lanche cheddar.jpg",
];

let indiceAtual = 0;

function mudarImagem(direcao) {
  indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;

  const imagensLado = document.querySelectorAll(".imagens-lado");

  imagensLado.forEach((lado, i) => {
    const imgs = lado.querySelectorAll("img");
    imgs.forEach((img, j) => {
      let posicao = (indiceAtual + i * imgs.length + j) % imagens.length;
      img.src = imagens[posicao];
    });
  });
}