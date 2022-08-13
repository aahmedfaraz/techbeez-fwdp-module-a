// BINARY OPERATORS
let num1 = 2,
  num2 = 3;

let addition = num1 + num2;
console.log("Addition : ", addition);

let subtraction = num1 - num2;
console.log("Subtraction : ", subtraction);

let multiplication = num1 * num2;
console.log("Multiplication : ", multiplication);

let division = num1 / num2;
console.log("Division : ", division);

let modulus = num1 % num2;
console.log("Modulus : ", modulus);

let power = num1 ** num2;
console.log(`Power : ${power}`);
// Addition :  5
// Subtraction :  -1
// Multiplication :  6
// Division :  0.6666666666666666
// Modulus :  2
// Power : 8

// UNARY OPERATORS
let num3 = 10;
console.log(`NUM 3 : ${num3}`);
console.log(++num3);
console.log(num3++);
console.log(num3);
let num4 = 20;
console.log(`NUM 4 : ${num4}`);
console.log(--num4);
console.log(num4--);
console.log(num4);
// NUM 3 : 10
// 11
// 11
// 12
// NUM 4 : 20
// 19
// 19
// 18
