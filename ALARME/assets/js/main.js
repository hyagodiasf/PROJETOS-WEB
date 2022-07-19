//pega a tag select do index.html
const selete = document.querySelectorAll("select");
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