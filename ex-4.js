// Start coding here
const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  mutiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};
let a = 10;
let b = 20;
let addResult = calculator.add(a, b);
console.log(addResult); // 30

a = 3000;
b = 10;
let divideResult = calculator.divide(a, b);
console.log(divideResult); // 300
