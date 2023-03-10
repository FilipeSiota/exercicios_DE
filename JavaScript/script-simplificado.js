/*=====================================================
# ARQUIVO COM OS CÓDIGOS FUNDAMENTAIS PARA EXPLICAÇÃO

# EXECUTAR VIA TERMINAL PELO COMANDO:
node script-simplificado.js
=====================================================*/

// 1) Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira: “ultimoSobrenome, primeiroNome”

var clientes = [
    {
        "id": 1,
        "nome": "Luis Santos Silveira",
        "idade": 18
    },
    {
        "id": 2,
        "nome": "Ricardo Lopes Alves",
        "idade": 30
    },
    {
        "id": 3,
        "nome": "Gustavo Silva Junior",
        "idade": 26
    }
]

const formataNome = (nome) => {
    const partesDoNome = nome.split(" "); // coloca as partes do nome (separadas a cada espaço) em um array
    const primeiroNome = partesDoNome[0];
    const ultimoSobrenome = partesDoNome[partesDoNome.length - 1]; // pega o último sobrenome baseado na última posição do array considerando seu tamanho

    return ultimoSobrenome + ", " + primeiroNome;
}

const mostraNomeDosClientes = () => {
    console.log("\n>> Exercício 1:\n");

    clientes.forEach((cliente) => {
        console.log(formataNome(cliente.nome));
    })
}
mostraNomeDosClientes();

// 2) Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”

var numero = "5(1)9-876-543-21";

const formataNumeroDeTelefone = (numeroDeTelefone) => {
    numeroDeTelefone = numeroDeTelefone.replace(/[^0-9]/g, ""); // utiliza expressão regular (REGEX) para limpar caracteres indesejáveis e espaços da string que contém o número de telefone, deixando apenas os números
    numeroDeTelefone = numeroDeTelefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1)_$2_$3-$4"); // utiliza expressão regular (REGEX) para formatar o número de telefone
    // coloca os dois primeiros dígitos entre parênteses, o terceiro entre underlines, mais quatro dígitos, um hífen, e os quatro dígitos restantes

    return numeroDeTelefone;
}

const mostraNumeroDeTelefone = () => {
    console.log("\n>> Exercício 2:\n");

    console.log(formataNumeroDeTelefone(numero));
}
mostraNumeroDeTelefone();