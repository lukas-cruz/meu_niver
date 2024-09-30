// Define a data do aniversário
var countDownDate = new Date("Nov 1, 2024 00:00:00").getTime();

// Atualiza o contador a cada segundo
var countdownFunction = setInterval(function() {

    // Pega a data e hora atual
    var now = new Date().getTime();

    // Calcula a diferença entre a data atual e a data do aniversário
    var distance = countDownDate - now;

    // Calcula o tempo em dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se a contagem terminar, mostra uma mensagem
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Chegou o grande dia!";
    }
}, 1000);
