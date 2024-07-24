const medalhas = ["ouro", "prata", "bronze", "nada"];

function medalhaDeAcordoComPosicao(posicao) {
  switch (posicao) {
    case 1:
      return medalhas[0];
    case 2:
      return medalhas[1];
    case 3:
      return medalhas[2];
    default:
      return medalhas[3];
  }
}

console.log(
  `Parabéns, você ganhou a medalha de ${medalhaDeAcordoComPosicao(4)}`
);

console.log()