let botaoTrocaCorFundo = document.getElementById('trocaCorFundo');
let botaoTrocaCorTexto = document.querySelectorAll('button')[1];
let botaoTrocaTamanho = document.querySelectorAll('button')[2];
let botaoTrocaEspacamento = document.querySelectorAll('button')[3];
let botaoTrocaFonte = document.querySelectorAll('button')[4];

document.querySelector('body').style.backgroundColor = sessionStorage.getItem('backgroundColor');

botaoTrocaCorFundo.addEventListener('click', function TrocaCor(){
  document.querySelector('body').style.backgroundColor = 'red';
  sessionStorage.setItem('backgroundColor', 'red');
})

botaoTrocaCorTexto.addEventListener('click', function trocaCorTexto(){
  document.getElementsByClassName('paragrafos')[0].style.color = "blue";
})

botaoTrocaTamanho.addEventListener('click', function trocaTamanhoTexto(){
  document.getElementsByClassName('paragrafos')[0].style.fontSize = 'large'
})

botaoTrocaEspacamento.addEventListener('click', function trocaTamanho(){
  document.getElementsByClassName('paragrafos')[0].style.letterSpacing = '10px'
})

botaoTrocaFonte.addEventListener('click', function trocaFonte(){
  document.getElementsByClassName('paragrafos')[0].style.fontFamily = 'monospace'
})