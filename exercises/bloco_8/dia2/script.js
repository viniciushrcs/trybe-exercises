// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach(element => 
//   console.log('Cada elemento do array:', element
// ));

// const result = arrayOfValues.find(elemento => elemento % 5 === 0)
// console.log(result)

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((x, y, z) => console.log(z))

// let elements = [
//     'hidro',
//     'helio',
//     'litio',
//     'beriliu'
// ];

// elements.forEach(element => console.log(element.length))

const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find((number) =>  number % 2 === 0);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30