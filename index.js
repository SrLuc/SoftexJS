const medalhas = ["ouro", "prata", "bronze", "nada"];

function medalhaDeAcordoComPosicao(posicao) {
  if (posicao == 1 || posicao == 2) {
    return medalhas[0];
  }
  if (posicao == 2) {
    return medalhas[1];
  }

  if (posicao == 3) {
    return medalhas[2];
  } else {
    return medalhas[3];
  }
}

console.log(
  `Parabéns, você ganhou a medalha de ${medalhaDeAcordoComPosicao(1)}`
);
