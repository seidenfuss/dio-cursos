# Aula 4 - Sintaxe Básica em JavaScript - Profa. Diana Martine - Estruturas Condicionais

## Estruturas Condicionais

São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição;

Ex.: um jogo precisa mudar o placar toda vez que um jogador marca pontuação;

### Estruturas de decisão

#### *if:* palavra reservada para estabelecer uma condição, significa **se**. 

Ex.:

    if (jogador1 > 0){
        console.log('jogador 1 marcou ponto!');
    }

Como ler: **se** o jogador1 tiver valor maior que 0 ele marcou ponto.

#### *else:* caso a condição não tenha sido atendida faça o que está dentro do **"else"**, que significa **senão**.

Ex.: 

    if (jogador1 > 0){
        console.log('jogador 1 marcou ponto!');
    } else {
        console.log('ninguém marcou ponto!');
    }

#### *else if:* Caso haja mais de uma condição usamos o "else if".

Ex.:

    if (jogador1 > 0){
        console.log('jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('jogador 2 marcou ponto!');
    } else {
        console.log('ninguém marcou ponto!');
    }

#### Ninho de if || if aninhado || aninhamento de ifs

Podemos usar um if dentro de outro if.

Ex.: 

    if (jogador1 != -1){
        if (jogador1 > 0){
            console.log('jogador 1 marcou ponto!');
        } else if (jogador2 > 0) {
            console.log('jogador 2 marcou ponto!');
        } else {
            console.log('ninguém marcou ponto!');
        }
    }else{console.log('jogador inválido');
    }

#### if ternário

Podemos fazer uma verificação em uma única linha:

Ex.: **[condição] ? [instrução1] : [instrução2];**

    jogador1>0 ? console.log('marcou ponto') : console.log('não marcou ponto");

Lembre-se de utilizar a interrogação **?** e os dois pontos **:**
Lê-se: [o jogador 1 tem pontuação maior que zero] **?** [Se sim (true), exiba 'marcou ponto'.] **:** [Se não (false), exiba não marcou ponto.]

#PAROU EM 6minutos retornar amanhã.
