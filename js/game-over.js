// Pega a pontuação final e o tempo restante do localStorage
const finalScore = localStorage.getItem("finalScore") || 0;
const remainingTime = localStorage.getItem("remainingTime") || 0;

// Exibe as pontuações e o tempo na tela
document.getElementById("final-score").textContent = finalScore;
document.getElementById("remaining-time").textContent = remainingTime;

// Evento de clique para reiniciar o jogo
document.getElementById("restart-btn").addEventListener("click", function () {
    window.location.href = "jogo.html";
});
