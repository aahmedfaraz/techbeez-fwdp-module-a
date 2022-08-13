let name = "Ahmed Faraz";
console.log(name);
name = "abcd";
console.log(name);
console.log(typeof name);
// Ahmed Faraz
// abcd
// string

let age = 22;
console.log(age, typeof age);
let myValue = 3.14;
console.log(myValue, typeof myValue);
let speedOfLight = 3e8;
console.log(speedOfLight, typeof speedOfLight);
// 22 number
// 3.14 number
// 300000000 number

let raining = true;
console.log(raining, typeof raining);
raining = false;
console.log(raining, typeof raining);
// true boolean
// false boolean

let posts = ["This is post 1", "This is post 2", "This is post 3"];
console.log(posts, typeof posts);
console.log(posts[0]);
console.log(posts[2]);
console.log(posts[-1]);
// [ 'This is post 1', 'This is post 2', 'This is post 3' ] object
// This is post 1
// This is post 3
// undefined

let person = {
  name: "Ahmed Faraz",
  email: "ahmed@gmail.com",
  phone: 12345,
};
console.log(person, typeof person);
console.log(person.name, typeof person.name);
console.log(person.email, typeof person.email);
console.log(person.phone, typeof person.phone);
person.age = 22;
console.log(person, typeof person);
console.log(person.age, typeof person.age);
person.email = "faraz@gmail.com";
console.log(person, typeof person);
// { name: 'Ahmed Faraz', email: 'ahmed@gmail.com', phone: 12345 } object
// Ahmed Faraz string
// ahmed@gmail.com string
// 12345 number
// {
//   name: 'Ahmed Faraz',
//   email: 'ahmed@gmail.com',
//   phone: 12345,
//   age: 22
// } object
// 22 number
// {
//   name: 'Ahmed Faraz',
//   email: 'faraz@gmail.com',
//   phone: 12345,
//   age: 22
// } object
