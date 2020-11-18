// Exercício 1

//function palindromo (parametro) {
//     let conferencia = ''
//     for (let index = parametro.length - 1; index >= 0; index -= 1) {
//         conferencia += parametro[index]
//     }
    
//     if (parametro === conferencia){
//         return console.log(true)
//     } else {
//         return console.log(false)
//     }
// }

// palindromo('desenvoltura')


// Exercício 2 
// function maiorValor (array) {
//     let conferencia = array[0]
//     for (let index = 0; index < array.length; index += 1){
//         if (conferencia < array[index]){
//             conferencia = array[index]
//         }
//     }
//     return console.log(array.indexOf(conferencia))
// }

// maiorValor([2, 3, 6, 7, 10, 1])

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4



//Exercício 3 
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
// function menorValor (array) {
//     let conferencia = array[0]
//     for (let index = 0; index < array.length; index += 1) {
//         if (conferencia > array[index]){
//             conferencia = array[index]
//         }
//     }
//     return console.log(array.indexOf(conferencia))
// }

// menorValor([2, 4, 6, 7, 10, 0, -3])

//Exercício 4
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function maiorCaractere (array){
//     let conferencia = array[0]
//     for (let index = 1; index < array.length; index += 1){
//         if (conferencia.length < array[index].length){
//             conferencia = array[index]
//         }
//     }
//     return console.log(conferencia)
// }

// maiorCaractere(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

//Exercício 5
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// function maiorRepete (array){
//     let finalResult = 0
//     let numeroQueMaiorRepete = ''
//     for (let index = 0; index < array.length; index += 1){
//         let result = 0
//         let arrayNumber = array[index]
//             for (let internIndex = 0; internIndex < array.length; internIndex += 1){
//                 let arrayConference = array[internIndex]
//                 if (arrayNumber === arrayConference){
//                     result += 1
//                 } 
//             }
//             if (result > finalResult){
//                 finalResult = result
//                 numeroQueMaiorRepete = array[index] 
//             } 
//     }
//     console.log(numeroQueMaiorRepete)
// }

// maiorRepete ([2, 3, 2, 5, 8, 2, 3, 3, 3, 4, 5, 4, 3, 4, 2, 2, 3, 3])

// Exercício 6
//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// // Valor esperado no retorno da função: 1+2+3+4+5 = 15

// function somatorio (n){
//     //vai pegar do zero até o número e somar cada algarismo
//     let sum = 0
//     for(let index = 0; index <= n; index +=1){
//         sum += index
//     }
//     console.log(sum)
// }

// somatorio(4)

// //Exercício 7
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// function verificaFimPalavra (word, ending){
//     let counter = 0 
//     let endingIndex = 0
//     for (let index = (word.length - ending.length); index < word.length; index += 1 ){
//         if (word[index] === ending[endingIndex]){
//             counter += 1
//         }
//         endingIndex += 1
//     }
//     if (counter === ending.length){
//         console.log(true)
//     } else {
//         console.log(false)
//     }

// }

// verificaFimPalavra('fernando', 'nando')