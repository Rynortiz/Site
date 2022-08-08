function funcaoOrdena( x, y )
{
 return parseInt( x ) - parseInt( y );
}
function aumentar () {
    var i = parseInt(+ 100);
    return i;
};
function Botao (i) {
    let inutil = document.getElementById("inutil").value;
    console.log(inutil);
    if (inutil == "") {
    document.getElementById("cabeçalho").innerHTML= "Você está ficando rico!!!";
    alert("Você ganhou mais " + i + "R$ !!!!");
    }
    else {alert("Não serve pra nada, SÓ APERTA O BOTÃO!");};
};
function Nome () {
    let nome = document.getElementById("nome").value;
    alert("Olá, " + nome + "!");
    // document.getElementById("cabeçalho").innerHTML= "Olá, " + nome + "!!!
};
function Botao1 () {
    let Número = document.getElementById("numero").value;
    if ( Número % 2 == 0 ) {
        alert(Número + "\nÉ par");
    }
    else {alert(Número + "\nNão é par");};
};
function Aleatorio () {
    let todos = [];
    let quantia = document.getElementById("quantia").value;
    for (let i = 0; i < quantia; i++) {
        todos.push(Gerador());
    }
    let resposta = todos.join(" - ");
    document.getElementById("cabeçalhoN").innerHTML= "Esses são seus números: " + resposta;
};
function Gerador () {
    let min =parseInt (document.getElementById("min").value);
    let max =parseInt (document.getElementById("max").value);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
function Idade () {
    let idade= parseInt(document.getElementById("idade").value);
    if (idade < 18 
        && idade >= 0 )  {
        document.getElementById("idade-resultado").innerHTML= "Você é menor de idade";
    }
    else if (idade >= 18
        && idade < 60) {
        document.getElementById("idade-resultado").innerHTML= "Você é maior de idade";
    }
    else if (idade >= 60
        && idade < 120){
        document.getElementById("idade-resultado").innerHTML= "Você ainda tem dúvida???";
    }
    else if (idade >= 120) {
        document.getElementById("idade-resultado").innerHTML= "Como...?";
    }
    else {document.getElementById("idade-resultado").innerHTML= "Idade inválida!"};
};
function Sena(){
    let max = 60;
    let numeros = [];
    for (let i = 0;i < 6 ; i++){
        let temp = (Math.floor(Math.random() * max) + 1);
        if (numeros.indexOf(temp) == - 1){
            numeros.push(temp);
        }
        else {
            i--;
        };
    };
    numeros.sort((a,b) => a-b);
    let text = numeros.join(" - ");
    return text;
};
function Quantia(){
    let jogos = [];
    let quantia = parseInt(document.getElementById("jogos").value);
    for (let i = 0; i < quantia; i++) {
        jogos.push(Sena());
    };
    document.getElementById("saida").innerHTML = jogos.join("<br>");
};