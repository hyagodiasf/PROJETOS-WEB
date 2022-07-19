//pega a tag select do index.html
const selete = document.querySelectorAll("select");
const timer = document.querySelector("h1");
//for para a option de horas
for (let i = 12; i > 0; i--) {
    if(i < 10 ){
        i = "0" + i;
        let opt = `<option value="${i}">${i}</option>`;
        selete[0].firstElementChild.insertAdjacentHTML("afterend", opt);

    }else{
        let opt = `<option value="${i}">${i}</option>`;
        selete[0].firstElementChild.insertAdjacentHTML("afterend", opt);

    }  
    
}

//for para a option de minutos
for (let i = 59; i >= 0; i--) {
    if(i < 10 ){
        i = "0" + i;
        let opt = `<option value="${i}">${i}</option>`;
        selete[1].firstElementChild.insertAdjacentHTML("afterend", opt);

    }else{
        let opt = `<option value="${i}">${i}</option>`;
        selete[1].firstElementChild.insertAdjacentHTML("afterend", opt);

    }  
    
}

//for para a option de AM/PM
for (let i = 2; i > 0; i--) {
    if(i == 2 ){
        am = "AM";
        let opt = `<option value="${am}">${am}</option>`;
        selete[2].firstElementChild.insertAdjacentHTML("afterend", opt);
    }else{
        pm = "PM";
        let opt = `<option value="${pm}">${pm}</option>`;
        selete[2].firstElementChild.insertAdjacentHTML("afterend", opt);

    } 
    
}

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