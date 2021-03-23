//Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

//Velocidade da Bolinha
let velocidadexBolinha = 6
let velocidadeyBolinha = 6
let raio = diametro / 2;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteAltura = 90;
let raqueteComprimento = 10;

// variáveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente ;
let chanceDeErrar = 0;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  verificacolisao(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  calculaChanceDeErrar ();
  verificacolisao(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar ();
  marcaPonto ();
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha = xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaBorda (){
    if(xBolinha + raio > width || 
     xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  
  if(yBolinha + raio > height || 
     yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  } 
}

function mostraRaquete (x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){ 
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    
    velocidadexBolinha *= -1;
  }
}

function verificacolisao (x, y) {
  colidiu =
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
  }
    
}
function movimentaRaqueteOponente (){
  velocidadeyOponente = yBolinha -yRaqueteOponente -raqueteComprimento /2 -30;
  yRaqueteOponente += velocidadeyOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
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
  
function incluirPlacar (){
  stroke (255);
  textSize(20);
  textAlign (CENTER);
  fill (color (255, 140,0));
  rect (150, 10, 40, 20);
  fill (255);
  text (meusPontos, 170, 26);
  fill (color (255, 140,0));
  rect (450, 10, 40, 20);
  fill (255);
  text (pontosOponente, 470,26);  

}

function marcaPonto (){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}




