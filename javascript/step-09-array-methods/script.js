const myArray = ["html","css", "javascript", "react", "redux"];

console.log(myArray);
console.log(myArray.toString())
console.log(myArray.join())
console.log(myArray.join(""))
console.log(myArray.join(" "))
console.log(myArray.join("-"))
const myString = myArray.join("-");
console.log(myString.split("-"));

// [ 'html', 'css', 'javascript', 'react', 'redux' ]
// html,css,javascript,react,redux
// html,css,javascript,react,redux
// htmlcssjavascriptreactredux
// html css javascript react redux
// html-css-javascript-react-redux
// [ 'html', 'css', 'javascript', 'react', 'redux' ]

console.log(myArray)
myArray.push("github");
console.log(myArray)
myArray.unshift("web fundamentals")
console.log(myArray)
myArray.pop()
myArray.pop()
console.log(myArray)
myArray.shift()
myArray.shift()
console.log(myArray)

// [ 'html', 'css', 'javascript', 'react', 'redux' ]
// [ 'html', 'css', 'javascript', 'react', 'redux', 'github' ] 
// [
//   'web fundamentals',
//   'html',
//   'css',
//   'javascript',
//   'react',
//   'redux',
//   'github'
// ]
// [ 'web fundamentals', 'html', 'css', 'javascript', 'react' ]
// [ 'css', 'javascript', 'react' ]

console.log(myArray.length)
const result = myArray.concat(["git", "github", "gitlab"])
console.log("Result : ", result);
console.log(myArray)

// 5
// Result :  [
//   'html',       'css',
//   'javascript', 'react',
//   'redux',      'git',
//   'github',     'gitlab'
// ]
// [ 'html', 'css', 'javascript', 'react', 'redux' ]

console.log(myArray);
console.log(...myArray)
myArray.splice(2,2, ...["git", "github", "gitlab"])
console.log(myArray);

// [ 'html', 'css', 'javascript', 'react', 'redux' ]
// html css javascript react redux
// [ 'html', 'css', 'git', 'github', 'gitlab', 'redux' ]

console.log(myArray);
console.log(myArray.slice(2,4));
console.log(myArray);

// [ 'html', 'css', 'javascript', 'react', 'redux' ]
// [ 'javascript', 'react' ]
// [ 'html', 'css', 'javascript', 'react', 'redux' ]

myArray.forEach( (word, index) => {
    console.log(`Word ${index} : ${word}`)
} )

// Word 0 : html
// Word 1 : css
// Word 2 : javascript
// Word 3 : react
// Word 4 : redux

console.log(myArray);
const result = myArray.map( (word) => `${word}!`)
console.log(result);

const percentages = [80.23123123123, 70.3123213, 75.313123, 80.232312];
const finalPercentages = percentages.map(num => num.toFixed(2));
console.log(finalPercentages);

// [ 'html', 'css', 'javascript', 'react', 'redux' ]
// [ 'html!', 'css!', 'javascript!', 'react!', 'redux!' ]
// [ '80.23', '70.31', '75.31', '80.23' ]

const naturalNumbers = [1,2,3,4,5,6,7,8,9];
const evenNumbers = naturalNumbers.filter(num => num % 2 === 0);
const oddNumbers = naturalNumbers.filter(num => num % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

// [ 2, 4, 6, 8 ]
// [ 1, 3, 5, 7, 9 ]

const numbers = [11,34,56,78,91,24,56];
const sum = numbers.reduce( (total, num) => total + num )
console.log(sum);

// 350

const students = [
    {
        name: 'student a',
        percentage : 80,
    },
    {
        name: 'student a',
        percentage : 60,
    },
    {
        name: 'student a',
        percentage : 40,
    },
    {
        name: 'student a',
        percentage : 90,
    },
]

const brilliantStudents = students.filter(student => student.percentage >= 80);
console.log(brilliantStudents);
const status = students.every(value => value.percentage > 70);
console.log(status);

// [
//     { name: 'student a', percentage: 80 },
//     { name: 'student a', percentage: 90 } 
// ]
// false

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let result = numbers.find(num => num % 2 === 0);
console.log(result);
result = numbers.findIndex(num => num % 2 === 0);
console.log(result);
result = numbers.findLastIndex(num => num % 2 === 0); /* Could be Depreciated */
console.log(result);

// 2
// 1
// 15