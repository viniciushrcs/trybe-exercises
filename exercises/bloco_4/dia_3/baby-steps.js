//let fruits = [2, 2, 2, 2, 8];
//percorra 1 por 1 somando todos os valores
// se o valor final for maior que 15, imprima-o
// se for igual ou menor que 15 imprima a mensagem, valor menor que 16
/*let sum = null
for (let index = 0; index < fruits.length; index +=1) {
    sum = sum + fruits[index] 
} 
if (sum > 15) {
    console.log(sum)
} else {
    console.log ('Valor menor que 16')
}
*/
// ----------------

/*
let n = 5
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex +=1) {
        for (columnIndex = 1; columnIndex <= n; columnIndex +=1){    
           if (columnIndex < inputPosition) {
               inputLine = inputLine + ' ';
           } else {
               inputLine = inputLine + symbol;
           }
        }
            console.log(inputLine)
            inputLine = ''
            inputPosition -=1;
}
*/

/*
----------------------------------

n = 5
--*--   n-4 01 2 34  n-(n-1) 5 -1 = 4 / 2 = 2 
-***-  n-2 0 123 4  n-(n-3)   n-1<=inputline<=n+1
***** n-0 01234     n-(n-5)

---*--- n-6  012 3 456 n-(n-1) 7 -1 = 6 / 2 = 3
--***-- n-4  01 234 56 n-(n-3)              
-*****- n-2 0 12345 6 
******* n-0 

----*----  9- 1 = 8 / 2 = 4

---***---  012 345 678



let n = 21;
let space = ' ';
let symbol = '*';
let inputLine = '';
let inputPosition = (n-1) / 2;
let lineIndex;
let colunmIndex;
let counter = 0

for (lineIndex = 0; lineIndex < n; lineIndex +=2){  
    for(colunmIndex = 0; colunmIndex < n; colunmIndex +=1){ 
        if ((colunmIndex < (inputPosition - counter)) || (colunmIndex > (inputPosition + counter))) {
            inputLine += space
        } else {
            inputLine += symbol
        }
    }
    console.log(inputLine)
    counter +=1;
    inputLine = ''
}
*/

/*-----------------------------
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

012*456           (inputPos1) 3 = (n - 1) / 2
01*3*56           (inputPos2) 2 e 4 = -1 +1
0*234*6           (inputPos3) 1 e 5 = -2 + 2
*******           (inputPos4) 0 a 6 = -3 + 3

nº de linhas = (n + 1) / 2 

*/
let n = 21;
let space = ' ';
let symbol = '*';
let inputLine = '';
let inputPosition = (n-1) / 2;
let lineIndex = (n + 1) / 2;
let colunmIndex;
let counterRight = inputPosition
let counterLeft = inputPosition


for (lineIndex; lineIndex <= n; lineIndex +=1 ){  
    for(colunmIndex = 0; colunmIndex < n; colunmIndex +=1){ 
        if (colunmIndex === inputPosition && lineIndex ===  (n + 1) / 2) {
            inputLine += symbol
        } else if ((colunmIndex < (counterLeft)) || (colunmIndex > (counterRight))) {
            inputLine += space
        } else if ((colunmIndex === (counterLeft)) || (colunmIndex === (counterRight)) || (lineIndex === n)) {
            inputLine += symbol
        } else {
            inputLine +=space
        }
    }
    console.log(inputLine)
    counterRight +=1;
    counterLeft -=1;
    inputLine = ''
}
/*

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
*/