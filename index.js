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
    document.getElementById("cabeçalhoN").innerHTML= "Esses são seu números: " + resposta;
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
    else if (idade >= 60){
        document.getElementById("idade-resultado").innerHTML= "Você ainda tem dúvida???";
    }
    else {document.getElementById("idade-resultado").innerHTML= "Idade inválida!"};
};
function Sena () {
    let verificar
    let numero = [];
  for (let i = 0; i < 6; i++) {
  verificar.push(Math.floor(Math.random()*60)+1);
    for (let i = 0; i < verificar.length; i++) {
        if (numero[i] != verificar)
    }
    

  }
  console.log(numero);
};
