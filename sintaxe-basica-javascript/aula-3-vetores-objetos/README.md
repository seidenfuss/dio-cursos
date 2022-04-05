# Aula 3 - Sintaxe Básica em JavaScript - Profa. Diana Martine - Vetores e Objetos

## Vetores ou Arrays

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. O valores podem ser de varios tipos.
Imagina que um array é uma caixa com várias outras caixas dentro e cada uma contendo algum valor;

Sintaxe de declaração de um array:

    let array = ['string', 1, true, ...]

### Array

O array deve ser declarado entre colchetes **"[ ]"**, e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays;

    let array = ['string', 1, true, false, ['array1'], ['array2'],...]

Obs.: o índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.

### Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

* forEach(): itera um array;
* push(): adiciona item no final do array;
* pop(): remove item no final do array;
* shift(): remove item no início do array;
* unshift(): adiciona item no início do array;
* indexOf(): retorna o índice de um valor;
* splice(): remove ou substitui um item pelo índice;
* slice(): retorna uma parte de um array existente;

## Objetos

Dados que possuem **propriedades** e **valores** que definem suas características. Deve ser declarado entre chaves **"{}"**.


Ex.: Imaginem uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções (quero café!!). O objeto xícara pode ser declarado assim:

    var xicara = {
        cor: 'azul',
        tamanho: 'p',
        funcao: tomarCafe()
    }

### Manipulando Objetos

As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

Ex.:

    var xicara ={cor:'azul',tamanho='p',funcao: tomarCafe()}

    var cor = xicara.cor;
    var tamanho = xicara.tamanho;
    var funcao = tomarCafe();

Outra forma de fazer desestruturação é utilizando chaves ao declarar a variável:

Ex.:

    var xicara ={cor:'azul',tamanho='p',funcao: tomarCafe()}
    var{cor, tamanho, funcao} = xicara;



**Links úteis:**

[Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
[Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)
[Desestruturação](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)