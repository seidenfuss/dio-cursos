# Aula 2 - Sintaxe Básica em JavaScript - Profa. Diana Martine - Variáveis e seus Valores 

## Tipagem

Tipagem é como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado;

A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.
    
Ex. 1: ao criarmos uma variavel com valor entre aspas:

    var valor = "valor";

O JavaScript já converte o dado para o tipo string.
    
Ex. 2: 
    
    var numero = 1;

O JavaScript já converte o valor 1 para o tipo Number.

### Tipos primitivos

* Boolean
* Null
* Undefined
* Number
* String
* Array
* Object
* Function

## Variáveis

São dados que mudam (variam), variáveis funcionam como caixas que armazenam valores. 

### Declarando variáveis em JavaScript:

* *var:* escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
<br>
* *let:* escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;
<br>
* *const:* escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

### Escopo

O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

* *Global:* quando a variável é declarada fora de qualquer bloco, sua visibilidade pode fica disponível em todo o código.

* *Local:* quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

### Regras de uso de variáveis

* Uma variavel não deve ser iniciada por um número! Inicie com:
    * letras
    * underscore _
    * cifrão $
    
Ex.:

    var 1nome ❌
    var nome || var _nome ✅ 

<br>

* Não utilizar espaços, utilize:

    * camelCase
    * underscore _

Ex.:

    var nome completo ❌
    var nome_completo || var nomeCompleto ✅

* Não usar palavras reservadas

Ex.:

    var function ❌
    var let ❌
    var const ❌
    var console ❌
    ...
    

Isso porque *function* é uma palavra reservada para a definição de uma função, logo, não podemos ter uma variável com este nome.


* Declarar variáveis no topo do bloco de código.

## Diferenças entre atribuição, comparação e comparação idêntica

### Atribuição
O sinal de igualdade *"="* não significa igual, e sim **atribuição**.

Ex.:
* Como declarar:


        var nome = "meu nome";

* Como ler: variável nome recebe o valor meu nome;

### Comparação
Para fazer uma comparação em JavaScript utilizamos dois sinais de igual: **"=="**.

Ex.:
* Como declarar:

         "0" == 0;

* Como ler: "0" tem valor igual a 0?;
    
// Nesse caso retorna true;

### Comparação idêntica
Para fazermos uma comparação de valores e tipos em JavaScript usamos *"==="*.

Ex.:
* Como declarar:

         "0" === 0;

* Como ler: "0" tem valor e tipo idêntico a 0?;
 
 // Nesse caso retorna false; 

 ## Operadores

 ### Operadores aritméticos

 São tipos de operadores matemáticos com valor numérico:

 Símbolo    | Operação          | Definição
:---------: | :------:            | :---------: 
\+           | adição            | soma
\-           | subtração         | diminui
\*           | multiplicação     | multiplica
\/           | divisao real      | retorna o valor real da divisão (com decimal)
\%           | divisão inteira   | resto da divisão
\**          | potenciação       | eleva o número à alguma potência



 ### Operadores relacionais

São tipos de operadores que consultam a relação entre valores:

 Símbolo    | Operação
:---------: | :--------:           
\>           | maior do que
<           | menor do que  
\>=          | maior ou igual à     
<=          | menor ou igual à


 ### Operadores lógicos

São tipos de operadores que consultam valores lógicos:

Símbolo     | Operação  | definição |
:---------: | :--------:| :--------:|         
 &&         |  e        | retorna verdadeiro quando todos os valores lógicos forem verdadeiros
 \|\|       | ou        | retorna verdadeiro quando pelo menos um dos valores lógicos for verdadeiro
 !          | não       | inverte o valor ⇢ o que era verdadeiro passa a ser falso

____________________________________________________________________________________________________________________________________________________________________________