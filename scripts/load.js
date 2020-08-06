function preload() {
  imagemCenario = loadImage('imagem/Cenario/floresta.png');
  imagemPersonagem = loadImage('imagem/Personagem/correndo.png');
  imagemInimigo = loadImage('imagem/Inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagem/Inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagem/Inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagem/Assets/game-over.png');
  imagemTelaInicial = loadImage('imagem/Cenario/telaInicial.png');
  imagemVida = loadImage('imagem/Assets/coracao.png');
  fonteTelaInicial = loadFont('imagem/Assets/fonteTelaInicial.otf');
  fita = loadJSON('fita/fita.json');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}