let numbers = [5, 7, 9, 3, 19, 70, 1, 100, 2, 35, 27, 0];
let sum = numbers[0] + numbers [1] + numbers [2] + numbers [3] + numbers [4] + numbers [5]
let averageArithmetic = (numbers[0] + numbers [1] + numbers [2] + numbers [3] + numbers [4] + numbers [5]) / numbers.length
// numbers.sort((a, b) => a - b)

let smallerNumber = numbers[0]; // a ideia é que é um número de dentro do próprio Array. 
//Erro anterior - declarar o valor da variável dentro do For, então ele o smallerNumber não virava o menor número.
for (let index = 0; index < numbers.length; index +=1) { 
    if (numbers[index] > smallerNumber){  //quando passar pelo número menor, o smallerNumber vira ele
        smallerNumber = numbers[index]  // e a comparação fica entre ele e os números do Array
    }
}
console.log(smallerNumber)

let array1to25 = []
for (let index = 1; index <= 25; index += 1 ){
    array1to25.push(index)
}
console.log(array1to25)

