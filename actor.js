//código ator

//ator
let xAtor = 80;
let yAtor = 366;
let hit = false;
let pontos = 0;

function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yAtor<366){
    yAtor += 4
    }
  }
}

function verificaColisao(){
  for(let i=0;i<imagemCarros.length;i++){
    hit = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 15)
    if(hit){
      colidiu.play()
     voltaInicio()
      if(pontos0()){
     pontos -= 1
      }
    }
  }
}

function pontos0(){
  return pontos>0
}

function voltaInicio(){
  yAtor=366
}

function marcaPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 60))
  text(pontos, width / 5, 27)
  if(yAtor < 15){
    pontoss.play()
    pontos += 1;
    voltaInicio();
  } 
}