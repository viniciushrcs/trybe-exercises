
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];



function studentAverage(listNames, listGrades) {
  // escreva seu código aqui
    const average = (acc, curr, _, array) => {
        return acc + curr 
    }
    return listNames.map((student, index) => (
        { name: student, average: (listGrades[index].reduce(average, 0) / listGrades[index].length) }
    )
  )
}


const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage(students, grades))

