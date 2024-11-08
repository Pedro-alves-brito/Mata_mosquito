let click = false;
let score = 0;
let vida = 4;
let time = 60;

let body = document.querySelector("body");

let img = document.createElement("img");
img.src = "../imagens/mosquito.png";  // Verifique o caminho da imagem do mosquito
img.style.position = "absolute";

let scorebord = document.createElement("p");
scorebord.textContent = `Pontuação: ${score}`;
scorebord.style.color = "white";

let vida1 = document.getElementById("vida1");
let vida2 = document.getElementById("vida2");
let vida3 = document.getElementById("vida3");

// Função para alterar o tamanho do mosquito
function alteraTamanhoMosquito() {
  let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2;
  img.style.transform = `scale(${numeroAleatorio})`;
}

// Função para gerar posição aleatória para o mosquito
function geraPosicao() {
  let y = Math.random() * (window.innerHeight * 0.70);
  let x = Math.random() * (window.innerWidth * 0.70);

  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
}

// Timer
const div_time = document.createElement("div");
div_time.id = "timer";
div_time.style.position = "absolute";
div_time.style.top = "10px";
div_time.style.right = "10px";
div_time.style.fontSize = "20px";
div_time.style.color = "white";
body.appendChild(div_time);

const timerInterval = setInterval(function () {
  if (time > 0) {
    time--;
    div_time.textContent = `Tempo: ${time}`;
  } else {
    mostrarGameOver();  // Exibe o Game Over
  }
}, 1000);

// Função do jogo (intervalo de 1 segundo)
const gameInterval = setInterval(function () {
  alteraTamanhoMosquito();
  geraPosicao();

  if (click === false) {
    vida--;  // Decrementa as vidas se não clicar no mosquito
    if (vida === 3) {
      vida1.src = "../imagens/gorro_vazio.png";
    } else if (vida === 2) {
      vida2.src = "../imagens/gorro_vazio.png";
    } else if (vida === 1) {
      vida3.src = "../imagens/gorro_vazio.png";
    } else if (vida === 0) {
      vida3.src = "../imagens/gorro_vazio.png";
      mostrarGameOver();  // Exibe o Game Over
    }
  } else {
    score += 10;  // Incrementa a pontuação
    scorebord.textContent = `Pontuação: ${score}`;
    click = false;  // Reseta o estado do click
  }

}, 1000);

// Evento de clique no mosquito
img.addEventListener("click", function () {
  click = true;
});

// Função para exibir o Game Over com pontuação e tempo restante
function mostrarGameOver() {
  // Salva a pontuação final e o tempo restante no localStorage
  localStorage.setItem("finalScore", score);
  localStorage.setItem("remainingTime", time);

  // Redireciona para a página game-over.html
  window.location.href = "game-over.html";
}

// Adiciona o mosquito e o placar no body
body.appendChild(img);
body.appendChild(scorebord);
