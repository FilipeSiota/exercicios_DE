/*=====================================================
# ARQUIVO COM UTILIZAÇÃO DA DOM DO index.html
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
    const partesDoNome = nome.split(" ");
    const primeiroNome = partesDoNome[0];
    const ultimoSobrenome = partesDoNome[partesDoNome.length - 1];

    return ultimoSobrenome + ", " + primeiroNome;
}

const mostraNomeDosClientes = (nomeFormatado) => {
    const btnAddFormatacao = document.querySelectorAll(".btnAddFormatacao")[0];
    const btnRemoveFormatacao = document.querySelectorAll(".btnRemoveFormatacao")[0];

    const listaDeClientesEl = document.querySelector("#listaDeClientes");
    listaDeClientesEl.textContent = "";

    if (nomeFormatado) {
        clientes.forEach((cliente) => {
            const item = document.createElement("li");
            item.textContent = formataNome(cliente.nome);
    
            listaDeClientesEl.appendChild(item);
        })

        btnAddFormatacao.style.display = "none";
        btnRemoveFormatacao.style.display = "inline";
    }
    else {
        clientes.forEach((cliente) => {
            const item = document.createElement("li");
            item.textContent = cliente.nome;
    
            listaDeClientesEl.appendChild(item);
        })

        btnAddFormatacao.style.display = "inline";
        btnRemoveFormatacao.style.display = "none";
    }
}
mostraNomeDosClientes(true);

// 2) Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”

var numero = "5(1)9-876-543-21";

const formataNumeroDeTelefone = (numeroDeTelefone) => {
    numeroDeTelefone = numeroDeTelefone.replace(/[^0-9]/g, "");
    numeroDeTelefone = numeroDeTelefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1)_$2_$3-$4");

    return numeroDeTelefone;
}

const mostraNumeroDeTelefone = (numeroDeTelefoneFormatado) => {
    const btnAddFormatacao = document.querySelectorAll(".btnAddFormatacao")[1];
    const btnRemoveFormatacao = document.querySelectorAll(".btnRemoveFormatacao")[1];

    const numeroDeTelefoneEl = document.querySelector("#numeroDeTelefone");
    numeroDeTelefoneEl.textContent = "";

    const item = document.createElement("li");

    if (numeroDeTelefoneFormatado) {
        item.textContent = formataNumeroDeTelefone(numero);

        btnAddFormatacao.style.display = "none";
        btnRemoveFormatacao.style.display = "inline";
    }
    else {
        item.textContent = numero;

        btnAddFormatacao.style.display = "inline";
        btnRemoveFormatacao.style.display = "none";
    }

    numeroDeTelefoneEl.appendChild(item);
}
mostraNumeroDeTelefone(true);