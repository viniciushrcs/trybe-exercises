/*
Regra de Negócio da Mega Sena
6 nº sorteados aleatoriamente de 1 a 60
Pessoas vencedoras --> acertos de 4 a 6 nº
*/
let megaSenaNumbers = [35, 60, 15, 55, 35, 5];

//for(let index = 0; index < 6; index += 1){
//    let sorteio = Math.ceil(Math.random() * 60);
//    megaSenaNumbers.push(sorteio);
//}

let game = [40, 60, 42, 54, 27, 22]
//for(let index = 0; index < 6; index += 1){
//    let sorteio = Math.ceil(Math.random() * 60);
//    game.push(sorteio);
//}

let numberOfHits = 0

for (let index = 0; index < 6; index += 1){
    for (let gameIndex = 0; gameIndex < 6; gameIndex += 1) {
        if (megaSenaNumbers[index] === game[gameIndex]) {
        numberOfHits += 1    
    }
  }
}

console.log(megaSenaNumbers)
console.log(game)

if (numberOfHits === 4) {
    console.log('Quadra!')
} else if (numberOfHits === 5) {
    console.log('Quina')
} else if (numberOfHits === 6) {
    console.log('Grande Campeão!')
} else {
    console.log('Tente novamente...')
}
