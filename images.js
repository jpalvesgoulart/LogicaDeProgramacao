//código imagens

//images
let estrada;
let carro1;
let carro2;
let carro3;
let ator;
let imagemCarros;

//sons
let colidiu
let trilha
let pontoss

function preload(){
  estrada = loadImage("images/estrada.png");
  carro1 = loadImage("images/carro-1.png");
  carro2 = loadImage("images/carro-2.png");
  carro3 = loadImage("images/carro-3.png");
  ator = loadImage("images/ator-1.png");
  imagemCarros = [carro1, carro2, carro3, carro1, carro2, carro3];
  
  trilha = loadSound("sounds/trilha.mp3")
  colidiu = loadSound("sounds/colidiu.mp3")
  pontoss = loadSound("sounds/pontos.wav")
}
