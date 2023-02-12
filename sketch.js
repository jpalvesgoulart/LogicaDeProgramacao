function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  marcaPontos();
}