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
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

        if(segundos < 10){
            segundosTexto = '0' + segundos;
        }

        if(minutos < 10){
            minutosTexto = '0' + minutos;
        }

        if(minutos == 0 && segundos == 0){
            outOfTime();
        }

        document.querySelector("#minutos").innerText = minutosTexto;
        document.querySelector("#segundos").innerText = segundosTexto;
    };

    cronometro = setInterval(aumentaReloj, 1000);
}

function stopTimer(){
    clearInterval(cronometro);
};

function clearTimer(){
    document.querySelector("#minutos").innerText = '0' + nivel;
    document.querySelector("#segundos").innerText = "00";
}

function outOfTime(){
    clearInterval(cronometro);
}