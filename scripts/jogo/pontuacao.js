class Pontuacao {
  constructor() {
    this.pontos = 0
  }
  
  exibe() {
    textAlign(RIGHT);
    fill('#fill');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionaPonto(){
    this.pontos += 0.2 ;
  }
}