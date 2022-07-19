$("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h2.glitched" ).clone().appendTo( ".glitch-window" );

//aqui pega a ag h1 onde vai ficar a numeração do relógio
const timer = document.querySelector("h1");
//for para a option de horas

setInterval(() => {
    //pegar hora, minutos e segundos
    let times = new Date(),
    hora = times.getHours(),
    minutos = times.getMinutes(),
    segundos = times.getSeconds(),
    ampm = "AM";

    if(hora >= 12){hora = hora - 12; ampm = "PM";}

    hora = hora == 0 ? hora = 12 : hora;
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // if(hora == 0){ hora = 12; }else{ hora = 12}

    // if(hora < 10){ hora = "0" + hora; }else{hora = }

    // if(minutos < 10){ minutos = "0" + minutos; }

    // if(segundos < 10){ segundos = "0" + minutos;}

    timer.innerHTML = `${hora}:${minutos}:${segundos} ${ampm}`;
}, 1000);