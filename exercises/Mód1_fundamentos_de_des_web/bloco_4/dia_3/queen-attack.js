// posição da rainha
let queenRowPosition = 4;
let queenColumnPosition = 4;

//posição da peça oponente
let opponentRowPosition = 8;
let opponentColumnPosition = 4; 

// identifica se o ataque foi bem sucedido; sim ou não - método booleano mais adequado
let sucessfulAttack = false;

//Se a peça do oponente estiver na mesma coluna que a rainha, o ataque pode ser feito
//Se a peça do oponente estiver na mesma linha que a rainha, o ataque também pode ser feito

if (opponentRowPosition === queenRowPosition) {
    sucessfulAttack = true;
    console.log('Ataque bem sucedido na linha')
} else if (opponentColumnPosition === queenColumnPosition) {
    sucessfulAttack = false;
    console.log('Ataque bem sucedido na coluna')
}

//diagonal inferior esquerda

for (let index = 1; index < 8; index +=1) {

}