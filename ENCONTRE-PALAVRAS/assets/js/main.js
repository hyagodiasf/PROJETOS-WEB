const listaPalavras = [
    {
        palavra: "Disturbed",
        dica: "Banda de Rock Internacional"
    },
    {
        palavra: "Nike",
        dica: "Marca famosa de futebol"
    },
    {
        palavra: "Star Wars",
        dica: "Guerras e lasers de luz"
    },
    {
        palavra: "Inferno",
        dica: "Enigma de uma obra famosa"
    },
    {
        palavra: "Paulo Coelho",
        dica: "Famoso por escrever o Alquimista"
    },
    {
        palavra: "Ypióca",
        dica: "Tem prata, ouro e empalhada"
    },
    {
        palavra: "Jogo da Imitação",
        dica: "Decifra cóigos militares"
    },
    {
        palavra: "Misfits",
        dica: "Horror Punk"
    },
    {
        palavra: "Crato",
        dica: "Município famosa por exposição agropecuária"
    },
    {
        palavra: "Brasil",
        dica: "País do futebol"
    },
];

const resul = document.querySelector(".inputs"),
reset = document.querySelector(".btn-reset"),
dica = document.querySelector(".dica span"),
digita = document.querySelector(".digita");

function radomPalavra(){
    const ranP = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    const palavra = ranP.palavra;
    dica.innerHTML = ranP.dica;
    let html = "";

    for (let i = 0; i < palavra.length; i++) {
        html += `<input type="text" disabled>`;
    }
    resul.innerHTML = html;
}
radomPalavra();

function initGame(e){
    let chave = e.target.value;
    if(chave.match(/^[A-Za-z]+$/)){
        console.log(chave);
        if(palavra.includes(chave)){
           console.log("Palavra encontrada");
        }else{
            console.log("Palavra não encontrada");
        }
    }
}

reset.addEventListener("click", radomPalavra);
digita.addEventListener("input", initGame);
document.addEventListener("keydown", () => digita.focus());