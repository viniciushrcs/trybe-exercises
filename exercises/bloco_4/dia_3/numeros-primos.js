// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

//variavel que vai entrar o nº a ser testado
let numPrimo = 10;

//variavel armazenar resultados dos testes
let testResults = 0;

//testes
//1)Ele deve passar a cada nº desde o 1 até ele
for (let index = 2; index < numPrimo && testResults !== 1; index +=1){
    if (numPrimo % index === 0) {
        testResults +=1
    }
}
    if (testResults === 0){
        console.log('O nº', numPrimo, 'é um nº Primo')
    } else {
        console.log('O nº,', numPrimo, 'Não é um nº Primo')
    }

//2)Testar a divisão dele por cada nº

//3)Ir armazenando se houve alguma divisão que deu resto === 0
//4)Se alguma divisão com outro número der resto zero, ele não é primo
//5) Se todas as divisões derem resto diferente de zero, ele é primo
