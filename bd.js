var bd = openDatabase("myDB", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function(criar){
    criar.executeSql("CREATE TABLE clientes (nome TEXT, endereco TEXT, conta INTEGER)")
});

function salvarCliente () {
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let conta = document.getElementById("conta").value;
    bd.transaction(function(inserir) {
        inserir.executeSql("INSERT INTO clientes (nome, endereco, conta) VALUES(?, ?, ?)", [nome, endereco, conta]);
    });
}