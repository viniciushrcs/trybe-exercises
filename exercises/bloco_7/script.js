const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log(lesson2[])

// const addNewKey  = (obj, key, value) => {
//   obj[key] = value;
// }
// addNewKey(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson1))

// const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson2))
// const allLessons = { };
// Object.assign(allLessons, { lesson1, lesson2, lesson3 })

// console.log(allLessons)

// // const totalOfStudents = (obj) => {
// //   let total = 0;
// //   const array = Object.keys(obj)
// //   for (i in array) {
// //     total += obj[array[i]].numeroEstudantes;
// //   }
// //   return total;
// // }

// // console.log(totalOfStudents(allLessons))

// // const keyValuePosition = (obj, position) => {
// //   const array = Object.values(obj)
// //   const value = array[position]
// //   return console.log(value)
// // }

// // keyValuePosition(lesson1, '2')

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let isEqual = false;
//   for (i in arr) {
//     if (arr[i][0] === key && arr [i][1] === value) {
//       isEqual = true
//     }
//   }
//   return isEqual
// }

// console.log(verifyPair(lesson2, 'numeroEstudantes', 20))