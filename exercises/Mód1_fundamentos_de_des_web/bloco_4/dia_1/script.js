let grossSalary = 5000;
let aliquotInss
let aliquotIr   

if (grossSalary <= 1556.94) {
    aliquotInss = grossSalary * 0.8;
} else if (grossSalary <= 2594.93){
    aliquotInss = grossSalary * 0.9;
} else if (grossSalary <= 5189.82) {
    aliquotInss = grossSalary * 0.11;
} else {
    aliquotInss = 570.88
}

let baseSalary = grossSalary - aliquotInss

if (baseSalary <= 1903.98) {
    aliquotIr = 0;
} else if (baseSalary <= 2826.65){
    aliquotIr = baseSalary * 0.075 - 142.80;
} else if (baseSalary <= 3751.05) {
    aliquotIr = baseSalary * 0.15 - 354.80;
} else if (baseSalary <= 4664.68) {
    aliquotIr = baseSalary * 0.225 - 636.13;
} else {
    aliquotIr = 0.275
}

console.log ('Salário: ' + (baseSalary - aliquotIr))
