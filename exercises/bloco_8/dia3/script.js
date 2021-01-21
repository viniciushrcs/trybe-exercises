//Array reduce

const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, cur) => {
      for (index in cur) {
          if(cur[index] === 'a' || cur[index] === 'A') { acc += 1}
      }
    return acc
  }, 0)
}

console.log(containsA())

// assert.deepStrictEqual(containsA(), 20);