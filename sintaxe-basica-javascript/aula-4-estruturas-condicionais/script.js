var jogador1 = 2;
var jogador2 = 0;

var placar;

// if, else e else if 
// if (jogador1 > 0){
//     console.log('jogador 1 marcou ponto!');
// } else if (jogador2 > 0) {
//     console.log('jogador 2 marcou ponto!')
// } else {
//     console.log('ninguém marcou ponto!');
// }

// // if aninhado
// if (jogador1 !=  -1){
//     if (jogador1 > 0){
//         console.log('jogador 1 marcou ponto!');
//     } else if (jogador2 > 0) {
//         console.log('jogador 2 marcou ponto!')
//     } else {
//         console.log('ninguém marcou ponto!');
//     }
// }
// else{console.log('jogador inválido');
// }


// if ternário

jogador1 != -1 && jogador2  !=-1 ? console.log('os jogadores são válidos'): console.log('jogadores inválidos');

// usando if

if(jogador1>0 && jogador2==0) {
    console.log('jogador 1 marcou ponto!')
    placar = jogador1>jogador2;
}

// usando else if
else if (jogador2>0 && jogador1==0){
    console.log('jogador 2 marcou ponto!')
    placar = jogador2>jogador1;
}
//usando else
else{
    console.log('ninguém marcou ponto!')
}

//switch

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
        break;
    default:
        console.log('ninguém ganhou!')
    
}

// Estruturas de repetição

