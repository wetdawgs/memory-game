var cronometro;
var minutosTexto;
var segundosTexto;

function timer (mins){
    
    minutos = mins;
    segundos = 0;
    minutosTexto = "00";
    segundosTexto = "00";

    function aumentaReloj() {
        segundos--;
        if(segundos  < 0){
            segundos = 59;
            minutos--;
        }

        if(minutos < 0){
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            outOfTime();
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

        if(segundos < 10){
            segundosTexto = '0' + segundos;
        }

        if(minutos < 10){
            minutosTexto = '0' + minutos;
        }

        document.querySelector("#minutes").innerText = minutosTexto;
        document.querySelector("#seconds").innerText = segundosTexto;
    };

    cronometro = setInterval(aumentaReloj, 1000);
}

function stopTimer(){
    clearInterval(cronometro);
};

function clearTimer(){
    document.querySelector("#minutes").innerText = '0' + nivel;
    document.querySelector("#seconds").innerText = "00";
}

function outOfTime(){
    failure = true;
    document.querySelector(".lay-out").classList.add("invisible");
    setTimeout(function() {
        document.querySelector("#outOfTime").classList.add("visible");
    }, 1000);
}