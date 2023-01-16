<?php

// 1) Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.

echo ("\n>> Exercício 1:\n\n");

$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];

$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];

$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];

$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];

$arrayDeClientes = [$cliente1, $cliente2, $cliente3];

echo ($arrayDeClientes[1]->nome); // pega o nome do cliente de índice 1 (segundo do array)

// 2) Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura $arrayDeClientes a data de nascimento de cada cliente.

echo ("\n\n>> Exercício 2:\n\n");

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
];

foreach ($arrayDeClientes as $cliente) {
    // para cada cliente do array um atributo dataNascimento é adicionado ao objeto
    // o valor desse novo atributo é baseado na busca pelo nome do cliente (índice) no arrayDeNascimento
    $cliente->dataNascimento = $arrayDeNascimento[$cliente->nome]; // ** cuidar pois se o nome do cliente não estiver no arrayDeNascimento ele estará procurando uma posição inexistente

    echo ("Nome: " . $cliente->nome . "\nData de nascimento: " . $cliente->dataNascimento . "\n\n");
}

// 3) Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício 2 pela data de nascimento (pode ser ascendente ou descendente).

echo (">> Exercício 3:\n\n");

// Maneira 1 - Bubble Sort - ASC:

echo ("- Bubble Sort:\n\n");

// iteramos o arrayDeClientes até o penúltimo cliente, já que o último já estará na posição correta, evitando processamento a mais
for ($indice = 0; $indice < sizeof($arrayDeClientes) - 1; $indice++) {

    // para cada indice, comparamos os outros clientes do final do array até a posição do próprio indice
    for ($indiceComparativo = sizeof($arrayDeClientes) - 1; $indiceComparativo > $indice; $indiceComparativo--) {

        // comparamos as datas de nascimento dos objetos colocando sempre a menor na posição do indice
        if (strtotime($arrayDeClientes[$indice]->dataNascimento) > strtotime($arrayDeClientes[$indiceComparativo]->dataNascimento)) {
            $aux = $arrayDeClientes[$indice];
            $arrayDeClientes[$indice] = $arrayDeClientes[$indiceComparativo];
            $arrayDeClientes[$indiceComparativo] = $aux;
        }
    }
}

foreach ($arrayDeClientes as $cliente) {
    echo ($cliente->nome . " nascido em " . $cliente->dataNascimento . "\n\n");
}

// Maneira 2 - usort() - DESC:

echo ("- usort():\n\n");

// permite com que criemos uma função de comparação
function comparaDataNascimento($ant, $pos) {   
    if (strtotime($ant->dataNascimento) == strtotime($pos->dataNascimento)) {
    return 0;
    }
    return (strtotime($ant->dataNascimento) > strtotime($pos->dataNascimento)) ? -1 : 1;
}

usort($arrayDeClientes, "comparaDataNascimento"); // ordena o arrayDeClientes conforme a função passada

foreach ($arrayDeClientes as $cliente) {
    echo ($cliente->nome . " nascido em " . $cliente->dataNascimento . "\n\n");
}

?>