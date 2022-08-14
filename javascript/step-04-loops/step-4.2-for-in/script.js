let evenNumbers = [2,4,6,8,10,12,14,16];

for(let index in evenNumbers) {
    console.log(`Index : ${i} , Value : ${evenNumbers[index]}`);
}

// Index : 0 , Value : 2
// Index : 1 , Value : 4 
// Index : 2 , Value : 6 
// Index : 3 , Value : 8 
// Index : 4 , Value : 10
// Index : 5 , Value : 12
// Index : 6 , Value : 14
// Index : 7 , Value : 16

let person = {
    name: 'steve',
    email: 'steve@gmail.com',
    phone: 12345,
    city: 'London'
}

for(let key in person) {
    console.log(person[key]);
}

// steve
// steve@gmail.com
// 12345
// London