let percentage = 80;
let shortAttendance = false;

console.log(shortAttendance);
console.log(!shortAttendance);
console.log(percentage >= 70);

if(!shortAttendance && percentage >= 70) {
    console.log('Student is eligible for Finals.');
} else {
    console.log('Student is NOT eligible for Finals.');
}

console.log('program terminated');

// false
// true
// true
// Student is eligible for Finals.
// program terminated

let compulsorySubject1 = false;
let compulsorySubject2 = true;
let optionalSubject1 = true;
let optionalSubject2 = true;

if(compulsorySubject1 && compulsorySubject2 && (optionalSubject1 || optionalSubject2)) {
    console.log('This student is graduated');
} else {
    console.log('This student is NOT graduated');
}

// This student is NOT graduated