//Variáveis Bolinha (B)
let xB = 250;
let yB = 200;
let dB = 22;
let rB = dB/2;

//Velocidade Bolinha (B)
let vxB = 6;
let vyB = 6;

//Variáveis Raquete (R)
let xR = 5;
let yR = 150;
let wR = 10;
let hR = 90;

//Variáveis Oponente (O)
let xO = 485;
let yO = 150;
let vyO;
let chanceDeErrar = 0;

//Variáveis Placar
let pontos = 0;
let pontosO = 0;

//Variáveis Sons
let raquetada
let ponto
let trilha

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(500, 400);
  trilha.loop()
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  verificaColisao();
  desenhaRaquete(xR, yR);
  movimentaRaquete();
  colisaoRaquete(xR, yR);
  desenhaRaquete(xO, yO);
  movimentaRaqueteOpNpc();
  //movimentaRaqueteOp()
  colisaoRaquete(xO, yO)
  placarPontos();
  bolinhaNaoFicaPresa();
  }

function calculaChanceDeErrar() {
  if (pontosO >= pontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xB - rB < 0){
    xB = 23
    }
}

function movimentaRaqueteOpNpc(){
  vyO = yB - yO - hR / 2 - 30;
  yO += vyO + chanceDeErrar
  calculaChanceDeErrar()
}

function movimentaRaqueteOp(){
  if(keyIsDown(87)){
        yO -= 8
  }
   if(keyIsDown(83)){
        yO += 8
  }
 
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
        yR -= 8
  }
   if(keyIsDown(DOWN_ARROW)){
        yR += 8
  }
 
}

function desenhaRaquete(x, y){
  rect(x, y, wR, hR);
}

function desenhaBolinha(){
  circle(xB, yB, dB);  
}

function movimentaBolinha(){
  xB += vxB;
  yB += vyB;
}

function verificaColisao(){
  if(xB + rB > width || xB - rB < 0){
    vxB *= -1;
  }
  if(yB + rB > height || yB - rB < 0){
    vyB *= -1;
  }
}
 
let hit = false; 

function colisaoRaquete(x, y){
  hit = collideRectCircle(x, y, wR, hR, xB, yB, rB);
  if(hit){
    vxB *= -1;
    raquetada.play()
  }
}

function placarPontos(){
  stroke(255)
  textAlign(CENTER)
  textSize(16)
  fill(color(255,140,0))
  rect(180, 10, 40, 20)
  fill(255)
  text(pontos, 200, 26)
  fill(color(255,140,0))
  rect(280, 10, 40, 20)
  fill(255)
  text(pontosO, 300, 26)
  if(xB + rB > width){
    pontos += 1
    ponto.play()
  }
  if(xB - rB < 0){
    pontosO += 1
    ponto.play()
  }
}












