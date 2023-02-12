//código carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 150, 210, 260, 315]
let wCarros = 50;
let hCarros = 40;
let velocidadeCarros = [3, 3.5, 4, 5, 3.8, 3]

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i=i+1){
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
  }
}

function movimentaCarro(){
  for(let i=0;i<imagemCarros.length;i=i+1){
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaCarro(){
  for(let i=0;i<imagemCarros.length;i=i+1){
  if(xCarros[i] < -50){
    xCarros[i] = 600
   }
  }
}







