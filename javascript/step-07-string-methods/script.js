let myString = "This is a car, and car is ford";

console.log(`Length : `, myString.length);
console.log(`Slice : `, myString.slice(2,20));
console.log(`Replace : `, myString.replace('car', 'box'))
console.log(`ReplaceAll : `, myString.replaceAll('car', 'box'))

// Length :  30
// Slice :  is is a car, and c
// Replace :  This is a box, and car is ford   
// ReplaceAll :  This is a box, and box is ford

console.log('SPLIT');
console.log(myString.split());
console.log(myString.split(""));
console.log(myString.split(" "));
console.log(myString.split("car"));

// SPLIT
// [ 'This is a car, and car is ford' ]        
// [
//   'T', 'h', 'i', 's', ' ', 'i',
//   's', ' ', 'a', ' ', 'c', 'a',
//   'r', ',', ' ', 'a', 'n', 'd',
//   ' ', 'c', 'a', 'r', ' ', 'i',
//   's', ' ', 'f', 'o', 'r', 'd'
// ]
// [
//   'This', 'is',
//   'a',    'car,',
//   'and',  'car',
//   'is',   'ford'
// ]
// [ 'This is a ', ', and ', ' is ford' ]