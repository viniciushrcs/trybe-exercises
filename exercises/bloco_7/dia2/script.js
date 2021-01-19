const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// const expected = sum('4','5');

// implemente seus testes aqui
// assert.strictEqual(expected, 9, '1 + 2 = 3');

const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };
  
  assert.strictEqual(obj1, obj1);
  assert.notDeepStrictEqual(obj1, obj3);
  assert.notDeepStrictEqual(obj2, obj3);