const niveisIMC = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau I',
    'Obesidade grau II',
    'Obesidade grau III ou Mórbida'
]; 

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inpeso = Number(e.target.querySelector('.input-imc-1').value);
    const inaltura = Number(e.target.querySelector('.input-imc-2').value);
    limpar();
  
    if(!inpeso){
        resultado("Peso inválido!");
        return;
    }

    if(!inaltura){
        resultado("Altura inválida");
        return;
    }
    let imcRes = imc(inpeso, inaltura);
    if(imcRes > 39.9){
        return resultado(imcRes + " " + niveisIMC[5]);
    } else if(imcRes > 34.9 & imcRes >= 39.9){
        return resultado(imcRes + " " + niveisIMC[4]);
    } else if(imcRes > 29.9 & imcRes <= 34.9){
        return resultado(imcRes + " " + niveisIMC[3]);
    } else if(imcRes > 24.9 & imcRes <= 29.9){
        return resultado(imcRes + " " + niveisIMC[2]);
    } else if(imcRes >= 18.5 & imcRes <= 24.9){
        return resultado(imcRes + " " + niveisIMC[1]);
    } else if(imcRes < 18.5){
        return resultado(imcRes + " " + niveisIMC[0]);
    }
});

function limpar() {
    document.querySelector('.input-imc-1').value = '';
    document.querySelector('.input-imc-2').value = '';
}

function imc(inpeso, inaltura){
    return (inpeso / inaltura ** 2).toFixed(2);
}


function resultado(msg){
    const resul = document.querySelector(".resul");
    resul.innerHTML = msg;
    if(isInvalid){
        resul.classList.add('positivo');
    }else{
        resul.classList.add('negativo');
    }

}

