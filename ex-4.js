// Start coding here
let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  mutiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};
let a = 10;
let b = 20;
let addResult = calculator.add(a, b);
console.log(addResult); // 30

a = 3000;
b = 10;
let divideResult = calculator.divide(a, b);
console.log(divideResult); // 300
