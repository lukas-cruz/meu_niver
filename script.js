// Define a data do aniversário
var countDownDate = new Date("Nov 1, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Chegou o grande dia!";
    }
}, 1000);

// Modal
var modal = document.getElementById("modal");
var sendButton = document.getElementById("sendButton");
var closeModal = document.getElementById("closeModal");

// Abre o modal ao clicar no botão "ENVIAR"
sendButton.onclick = function() {
    modal.style.display = "block";
}

// Fecha o modal ao clicar no botão de fechar
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
